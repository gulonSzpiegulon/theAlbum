import { Component, OnInit }	from '@angular/core';
import { Router }			from '@angular/router-deprecated';

@Component({
	selector: 'my-profile',
	templateUrl: 'app/templates/profile.component.html',
	styleUrls: ['app/styles/profile.component.css']
})

export class ProfileComponent implements OnInit {
	
	constructor(private router: Router) {}
	
	ngOnInit() {
		
	}
	
	logout() {
		this.router.navigate(['Login']);
	}
}