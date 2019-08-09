import { Roles } from './Roles.enum';

export class Pilote_Da {

    
  public id: number;
  public roles: Roles[] = new Array;
  public nom: string;
  public prenom: string;
  public username: string;
  public password: string;

	constructor() {
    }

}
