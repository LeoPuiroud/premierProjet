import { Roles } from './Roles.enum';

export class User {

    public id: number;
    public roles: Roles[];
    public nom: string;
    public prenom: string;
    public username: string;
    public password: string;

	constructor() {
	}

   

}
