import { Client } from './Client';
import { Cdp } from './Cdp';
import { Pilote_Da } from './Pilote_Da';
import { Specialiste } from './Specialiste';
import { Correspondant } from './Correspondant';

export class Da {


  constructor(
    public id?: number,
    public client?: Client,
    public cdp?: Cdp,
    public pilote_da?: Pilote_Da,
    public specialiste?: Specialiste,
    public correspondant?: Correspondant,
    public description_du_besoin?: string,
    public devis_propose?: string,
    public direction_exploitant?: string,
    public service_exploitant?: string,
    public site_utilisation?: string,
    public validation_du_besoin?: boolean,
    public zone_commentaire?: string,
    public version?: number
  ) { }

  // get id(): number {
  //   return this._id;
  // }

  // set id(value: number) {
  //   this._id = value;
  // }

  // get client(): Client {
  //   return this._client;
  // }

  // set client(value: Client) {
  //   this._client = value;
  // }

  // get correspondant(): Correspondant {
  //   return this._correspondant;
  // }

  // set correspondant(value: Correspondant) {
  //   this._correspondant = value;
  // }

  // get specialiste(): Specialiste {
  //   return this._specialiste;
  // }

  // set specialiste(value: Specialiste) {
  //   this._specialiste = value;
  // }

  // get cdp(): Cdp {
  //   return this._cdp;
  // }

  // set cdp(value: Cdp) {
  //   this._cdp = value;
  // }

  // get pilote_da(): Pilote_Da {
  //   return this._pilote_da;
  // }

  // set pilote_da(value: Pilote_Da) {
  //   this._pilote_da = value;
  // }

  // get validation_du_besoin(): boolean {
  //   return this._validation_du_besoin
  // }

  // set validation_du_besoin(value: boolean) {
  //   this._validation_du_besoin = value;
  // }

  // get description_du_besoin(): string {
  //   return this._description_du_besoin
  // }

  // set description_du_besoin(value: string) {
  //   this._description_du_besoin = value;
  // }

  // get devis_propose(): string {
  //   return this._devis_propose
  // }

  // set devis_propose(value: string) {
  //   this._devis_propose = value;
  // }

  // get service_exploitant(): string {
  //   return this._service_exploitant
  // }

  // set service_exploitant(value: string) {
  //   this._service_exploitant = value;
  // }

  // get direction_exploitant(): string {
  //   return this._direction_exploitant
  // }

  // set direction_exploitant(value: string) {
  //   this._direction_exploitant = value;
  // }

  // get site_utilisation(): string {
  //   return this._site_utilisation
  // }

  // set site_utilisation(value: string) {
  //   this._site_utilisation = value;
  // }

  // get zone_commentaire(): string {
  //   return this._zone_commentaire
  // }

  // set zone_commentaire(value: string) {
  //   this._zone_commentaire = value;
  // }

  // get version(): number {
  //   return this._version
  // }

  // set version(value: number) {
  //   this._version = value;
  // }

}
