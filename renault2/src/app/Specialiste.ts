import { Roles } from './Roles.enum';

export class Specialiste {

    
  public id: number;
  public roles: Roles[] = new Array;
  public nom: string;
  public prenom: string;
  public username: string;
  public password: string;

	constructor() {
    }
    
}
