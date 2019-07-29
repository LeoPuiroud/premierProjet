package com.example.demo.metier;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;

@Entity
public class Client extends User {

	@OneToMany(mappedBy = "client")
	@Column(name = "CLIENT_DA")
	@JsonIgnore
	private List<Da> demandes;
//	@OneToMany
//	private List<Correspondant> correspondants;
//	@OneToMany
//	private List<Specialiste> specialistes;

	public Client() {

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
//	public List<Correspondant> getCorrespondants() {
//		return correspondants;
//	}
//	public void setCorrespondants(List<Correspondant> correspondants) {
//		this.correspondants = correspondants;
//	}
//	public List<Specialiste> getSpecialistes() {
//		return specialistes;
//	}
//	public void setSpecialistes(List<Specialiste> specialistes) {
//		this.specialistes = specialistes;
//	}

}
