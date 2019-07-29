package com.example.demo.metier;


import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Specialiste extends User {
	
	@OneToMany(mappedBy = "specialiste")
	@Column(name = "SPECIALISTE_DA")
	@JsonIgnore
	private List<Da> demandes;
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
	
//	public List<Cdp> getCdps() {
//		return Cdps;
//	}
//	public void setCdps(List<Cdp> cdps) {
//		Cdps = cdps;
//	}
	public Specialiste() {
		super();
	}

	
	
}
