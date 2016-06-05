import { Component, OnInit }	from '@angular/core';
import { Router }			from '@angular/router-deprecated';

import { User }				from './user';
import { UserService }	from './user.service';

@Component({
	selector: 'my-register',
	templateUrl: 'app/templates/register.component.html',
	styleUrls: ['app/styles/register.component.css']
})

export class RegisterComponent implements OnInit {
	user: User = new User();
	users: User[];
	errorMessage: any;
	mode = 'Observable';	//a po cholere to tu??
	
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
	
	addUser(user: User) {
		if (!user) {
			return;
		}
		this.userService.addUser(user)
			.subscribe(
				user => this.users.push(user),
				error => this.errorMessage = <any>error);
	}

	register() {
		for (var i = 0; i < this.users.length; i++) {
			if (this.users[i].username === this.user.username) {
				alert('E-mail occupied already!');
				return;
			}
		}
		this.addUser(this.user);
	}

	toLogin() {
		this.router.navigate(['Login']);
	}
}