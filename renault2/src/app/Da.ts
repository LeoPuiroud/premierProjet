export class Da {


    constructor (private _id?: number,
        private _description_du_besoin?: string,
        private _devis_propose?: string,
        private _direction_exploitant?: string,
        private _service_exploitant?: string,
        private _site_utilisation?: string,
        private _validation_du_besoin?: boolean,
        private _zone_commentaire?: string,
        private _version?: number
        ) {}

    get id(): number {
        return this._id;
      }

      set id(value: number) {
        this._id = value;
      }

      get validation_du_besoin(): boolean {
          return this._validation_du_besoin
      }

      set validation_du_besoin(value: boolean) {
        this._validation_du_besoin = value;
      }

      get description_du_besoin(): string {
        return this._description_du_besoin
    }

    set description_du_besoin(value: string) {
        this._description_du_besoin = value;
      }

    get devis_propose(): string {
        return this._devis_propose
    }

    set devis_propose(value: string) {
        this._devis_propose = value;
      }

      get service_exploitant(): string {
        return this._service_exploitant
    }

    set service_exploitant(value: string) {
        this._service_exploitant = value;
      }

      get direction_exploitant(): string {
        return this._direction_exploitant
    }

    set direction_exploitant(value: string) {
        this._direction_exploitant = value;
      }

      get site_utilisation(): string {
        return this._site_utilisation
    }

    set site_utilisation(value: string) {
        this._site_utilisation = value;
      }

      get zone_commentaire(): string {
        return this._zone_commentaire
    }

    set zone_commentaire(value: string) {
        this._zone_commentaire = value;
      }

      get version(): number {
        return this._version
    }

    set version(value: number) {
        this._version = value;
      }
    
}
