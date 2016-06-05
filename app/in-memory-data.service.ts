export class InMemoryDataService {
  createDb() {
    let users = [
		{	username: 'j.gulkowski@wp.pl',	password: 'QWEqwe!@#123', 
			firstName: 'Jan',			lastName: 'Gulkowski'
		},
		{	username: 'w.gulkowski@wp.pl',	password: 'QWEqwe!@#231', 
			firstName: 'Wojciech',	lastName: 'Gulkowski'
		},
		{	username: 'k.gulkowski@wp.pl',	password: 'QWEqwe!@#312', 
			firstName: 'Krzysztof',			lastName: 'Gulkowski'
		},
		{	username: 'p.gulkowski@wp.pl',	password: 'QWEqwe!@#321', 
			firstName: 'Paweł',			lastName: 'Gulkowski'
		},
		{	username: 'm.gulkowska@wp.pl',	password: 'QWEqwe!@#321123', 
			firstName: 'Maria',			lastName: 'Gulkowska'
		}
    ];
    return {users};
  }
}
