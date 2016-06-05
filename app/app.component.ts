import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } 
	from '@angular/router-deprecated';

import './rxjs-operators';
import { UserService }			from './user.service';
import { LoginComponent } 	from './login.component';
import { RegisterComponent }	from './register.component';
import { ProfileComponent }	from './profile.component';

@Component({
	selector: 'my-app',
	templateUrl: 'app/templates/app.component.html',
	directives: [ROUTER_DIRECTIVES],
	providers: [
		ROUTER_PROVIDERS,
		UserService
	]
})

@RouteConfig ([
	{
		path: '/login',
		name: 'Login',
		component: LoginComponent,
		useAsDefault: true
	},
	{
		path: '/register',
		name: 'Register',
		component: RegisterComponent
	},
	{
		path: '/profile/:username',
		name: 'Profile',
		component: ProfileComponent
	}
])

export class AppComponent {}










