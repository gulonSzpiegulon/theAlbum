export class InMemoryDataService {
  createDb() {
    let users = [
		{	username: 'j.gulkowski@wp.pl',	password: 'QWEqwe123', 
			firstName: 'Jan',			lastName: 'Gulkowski'
		},
		{	username: 'w.gulkowski@wp.pl',	password: 'QWEqwe123', 
			firstName: 'Wojciech',	lastName: 'Gulkowski'
		},
		{	username: 's.gulkowska@wp.pl',	password: 'QWEqwe123', 
			firstName: 'Sylwia',			lastName: 'Gulkowska'
		},
		{	username: 'jsz.gulkowski@wp.pl',	password: 'QWEqwe123', 
			firstName: 'Janusz',			lastName: 'Gulkowski'
		},
		{	username: 'janusz.sylwia@wp.pl',	password: 'QWEqwe123', 
			firstName: 'Janusz',			lastName: 'Sylwia'
		}
    ];
    return {users};
  }
}
