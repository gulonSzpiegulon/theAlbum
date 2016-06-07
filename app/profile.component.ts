import { Component, OnInit }	from '@angular/core';
import { RouteParams, Router } 			from '@angular/router-deprecated';

import { User }				from './user';
import { UserService }	from './user.service';

@Component({
	selector: 'my-profile',
	templateUrl: 'app/templates/profile.component.html',
	styleUrls: ['app/styles/profile.component.css']
})

export class ProfileComponent implements OnInit {
	users: User[];
	user: User;
	username: string;
	errorMessage: string;
	
	constructor(
		private userService: UserService,
		private router: Router,
		private routeParams: RouteParams
	) {}
	
	ngOnInit() {
		this.username = this.routeParams.get('username');
		this.getUsers();
	}
	
	getUsers() {
		this.userService.getUsers()
			.subscribe(
				users => { 
					this.users = users; 
					for(var i = 0; i < this.users.length; i++) {
						if (this.username === this.users[i].username) {
							this.user = new User(this.users[i].firstName, this.users[i].lastName, 
								this.users[i].username, this.users[i].password);
							return;
						}
					}
				},
				error =>  this.errorMessage = <any>error);
	}
	
	logout() {
		this.router.navigate(['Login']);
	}
}