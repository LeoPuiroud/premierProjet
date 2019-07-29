import { Roles } from './Roles.enum';

export class Pilote_Da {

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

    /**
     * Setter $id
     * @param {number} value
     */
	public set $id(value: number) {
		this.id = value;
	}

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
    private id: number;
    private roles: Roles[];
    private nom: string;
    private prenom: string;


	constructor() {
	}

}
