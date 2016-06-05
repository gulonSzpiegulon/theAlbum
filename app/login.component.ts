import { Component, OnInit }	from '@angular/core';
import { Router }					from '@angular/router-deprecated';

import { User }				from './user';
import { UserService }	from './user.service';

@Component({
	selector: 'my-login',
	templateUrl: 'app/templates/login.component.html',
	styleUrls: ['app/styles/login.component.css']
})

export class LoginComponent implements OnInit {
	user: User  = new User();
	users: User[];
	errorMessage: string;
	mode = 'Observable';	//a po choloere to tu??
	
	constructor(
		private router: Router,
		private userService: UserService
	) {}
	
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
		for(var i = 0; i < this.users.length; i++) {
			if (this.user.username === this.users[i].username &&
				this.user.password === this.users[i].password) {
					//zaloguj
					//czyli zapisz w sesji username i haslo
					//oraz nawiguj do profile o podanym usernamie
					//a po stronie tego profile username będzie trzeba sprawdzic 
					//czy zapisane credantiale należą do ziomka na którego nawigowalismy
					//jesli nie to powrot do logowania i wyczyszczenie credentaili
				}
			alert("Wrong e-mail or password!");
		}
	}
	
	toRegister() {
		this.router.navigate(['Register']);
	}
}