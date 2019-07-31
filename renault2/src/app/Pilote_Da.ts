import { Roles } from './Roles.enum';

export class Pilote_Da {

    
    private _id: number;
    private roles: Roles[];
    private _nom: string;
    private prenom: string;


	constructor() {
    }
    
    get id(): number {
        return this._id;
      }
    
      set id(value: number) {
        this._id = value;
      }

      get nom(): string {
        return this._nom;
      }
    
      set nom(value: string) {
        this._nom = value;
      }

}
