import { Component, OnInit }		from '@angular/core';
import { Router }						from '@angular/router-deprecated';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, FormBuilder, ControlGroup, 
	Validators, AbstractControl }		from '@angular/common';

import { User }				from './user';
import { UserService }	from './user.service';

@Component({
	selector: 'my-register',
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
	templateUrl: 'app/templates/register.component.html',
	styleUrls: ['app/styles/register.component.css']
})

export class RegisterComponent implements OnInit {
	users: User[];
	user: User;
	errorMessage: any;
	
	myForm: ControlGroup;
	firstName: AbstractControl;
	lastName: AbstractControl;
	email: AbstractControl;
	password: AbstractControl;
	
	constructor(
		private router: Router,
		private userService: UserService,
		fb: FormBuilder
	) {
		this.myForm = fb.group({
			'firstName'	:	['', Validators.required],
			'lastName'	:	['', Validators.required],
			'email'		:	['', Validators.compose([Validators.required,	this.emailValidator])],
			'password'	:	['', Validators.compose([Validators.required, this.passwordValidator])]
		});
		
		this.firstName = this.myForm.controls['firstName'];
		this.lastName = this.myForm.controls['lastName'];
		this.email = this.myForm.controls['email'];
		this.password = this.myForm.controls['password'];
	}
	
	emailValidator(control: AbstractControl): { [s: string]: boolean } {
		if (!control.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
			return { invalidEmail: true };
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
	
	register(form: any): void {
		if (!this.firstName.valid || !this.lastName.valid 
			|| !this.email.valid || !this.password.valid) {
			return;	
		}
		
		for (var i = 0; i < this.users.length; i++) {
			if (this.users[i].username === this.email.value) {
				alert('E-mail occupied already!');
				return;
			}
		}
		this.user = new User(this.firstName.value, this.lastName.value, 
			this.email.value, this.password.value);
		this.addUser(this.user);
	}
	
	addUser(user: User) {
		if (!user) {
			return;
		}
		this.userService.addUser(user)
			.subscribe(
				user => this.users.push(user),
				error => this.errorMessage = <any>error);
	}

	toLogin() {
		this.router.navigate(['Login']);
	}
}