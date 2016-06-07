import { Component, OnInit }	from '@angular/core';
import { Router }					from '@angular/router-deprecated';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, FormBuilder, ControlGroup, 
	Validators, AbstractControl }		from '@angular/common';
	
import { User }				from './user';
import { UserService }	from './user.service';

@Component({
	selector: 'my-login',
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
	templateUrl: 'app/templates/login.component.html',
	styleUrls: ['app/styles/login.component.css']
})

export class LoginComponent implements OnInit {
	users: User[];
	user: User;
	errorMessage: string;
	
	myForm: ControlGroup;
	username: AbstractControl;
	password: AbstractControl;
	
	constructor(
		private router: Router,
		private userService: UserService,
		fb: FormBuilder
	) {
		this.myForm = fb.group({
			'username'	:	['', Validators.compose([Validators.required, this.usernameValidator])],
			'password'	:	['', Validators.compose([Validators.required, this.passwordValidator])]
		});
		
		this.username = this.myForm.controls['username'];
		this.password = this.myForm.controls['password'];
	}
	
	usernameValidator(control: AbstractControl): { [s: string]: boolean } {
		if (!control.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
			return { invalidUsername: true };
		} 
	}
	
	passwordValidator(control: AbstractControl): { [s: string]: boolean } {
		if (!control.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)) {
			//contains at least one digit, one lower case, one upper case and consist 
			//of at least 8 of these characters
			//this.passwordInvalid = true;
			return { invalidPassword: true };
		}
	}
	
	ngOnInit() {
		this.getUsers();
	}
	
	getUsers() {
		this.userService.getUsers()
			.subscribe(
				users => this.users = users,
				error =>  this.errorMessage = <any>error);
	}
	
	login() {
		if (!this.username.valid || !this.password.valid) {
			return;	
		}
		
		for(var i = 0; i < this.users.length; i++) {
			
			if (this.username.value === this.users[i].username &&
				this.password.value === this.users[i].password) {
					console.log("Loguje!!");
					this.router.navigate(['Profile', { username: this.username.value }]);
					return;
			}
		}
		alert("Wrong e-mail or password!");
	}
	
	toRegister() {
		this.router.navigate(['Register']);
	}
}