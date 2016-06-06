export class User {
	username: string;
	password: string;
	firstName: string;
	lastName: string;
	
	constructor(firstName = '', lastName = '', email = '', password = '') {
		this.firstName = firstName;
		this.lastName = lastName;
		this.username = email;
		this.password = password;
	}
}