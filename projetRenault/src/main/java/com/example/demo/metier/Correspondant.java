package com.example.demo.metier;


import java.util.List;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Correspondant extends User {
	
	@OneToMany(mappedBy = "correspondant")
	@Column(name = "CORRESPONDANT_DA")
	@JsonIgnore
	private List<Da> demandes;
//	@OneToMany
//	private List<Specialiste> specialistes;
//	@OneToMany
//	private List<Client> clients;
//	@OneToMany
//	private List<Cdp> Cdps;
	
	
	public List<Da> getDemandes() {
		return demandes;
	}
	public void setDemandes(List<Da> demandes) {
		this.demandes = demandes;
	}
	
	public void addDa(Da da) {
		this.demandes.add(da);
	}
	
//	public List<Specialiste> getSpecialistes() {
//		return specialistes;
//	}
//	public void setSpecialistes(List<Specialiste> specialistes) {
//		this.specialistes = specialistes;
//	}
//	public List<Client> getClients() {
//		return clients;
//	}
//	public void setClients(List<Client> clients) {
//		this.clients = clients;
//	}
//	public List<Cdp> getCdps() {
//		return Cdps;
//	}
//	public void setCdps(List<Cdp> cdps) {
//		Cdps = cdps;
//	}
	
	public Correspondant() {
		super();
	}
	
	

}
