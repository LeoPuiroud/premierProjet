package com.example.demo.metier;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
public class Cdp extends User {
	
	@OneToMany(mappedBy = "cdp")
	@Column(name = "CDP_DA")
	@JsonIgnore
	private List<Da> demandes;
//	@OneToMany
//	private List<Pilote_Da> pilote_Das;
	
	public Cdp() {
		super();
	}

	

	public List<Da> getDemandes() {
		return demandes;
	}



	public void setDemandes(List<Da> demandes) {
		this.demandes = demandes;
	}
	
	public void addDa(Da da) {
		this.demandes.add(da);
	}
//
//
//
//	public List<Pilote_Da> getPilote_Das() {
//		return pilote_Das;
//	}
//
//	public void setPilote_Das(List<Pilote_Da> pilote_Das) {
//		this.pilote_Das = pilote_Das;
//	}
	
	

}
