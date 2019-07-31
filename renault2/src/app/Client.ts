import { Roles } from './Roles.enum';

export class Client {


    // /**
    //  * Getter $id
    //  * @return {number}
    //  */
	// public get $id(): number {
	// 	return this.id;
	// }

    /**
     * Getter $roles
     * @return {Roles[]}
     */
	public get $roles(): Roles[] {
		return this.roles;
	}

    /**
     * Getter $nom
     * @return {string}
     */
	public get $nom(): string {
		return this.nom;
	}

    /**
     * Getter $prenom
     * @return {string}
     */
	public get $prenom(): string {
		return this.prenom;
	}

    // /**
    //  * Setter $id
    //  * @param {number} value
    //  */
	// public set $id(value: number) {
	// 	this.id = value;
	// }

    /**
     * Setter $roles
     * @param {Roles[]} value
     */
	public set $roles(value: Roles[]) {
		this.roles = value;
	}

    /**
     * Setter $nom
     * @param {string} value
     */
	public set $nom(value: string) {
		this.nom = value;
	}

    /**
     * Setter $prenom
     * @param {string} value
     */
	public set $prenom(value: string) {
		this.prenom = value;
	}
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
