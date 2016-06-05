import { Injectable }			from '@angular/core';
import { Http, Response } 	from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { User } from './user';

@Injectable()
export class UserService {
	private usersUrl = 'app/users';	//URL to web api
	
	constructor(private http: Http) {}
	
	getUsers(): Observable<User[]> {
		return this.http.get(this.usersUrl)
			.map(this.extractData)
			.catch(this.handleError);
	}
	
	private extractData(res: Response) {
		let body = res.json();
		return body.data || { };
	}
	
	private handleError (error: any) {
		let errMsg = (error.message) ? error.message :
			error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg);
		return Observable.throw(errMsg);
	}
  
	addUser(user: User): Observable<User> {
		let body = JSON.stringify(user);
		let headers = new Headers({
			'Content-Type' : 'application/json' });
		let options = new RequestOptions({
			headers: headers });
		return this.http.post(this.usersUrl, body, options)
			.map(this.extractData)
			.catch(this.handleError);
	}
}