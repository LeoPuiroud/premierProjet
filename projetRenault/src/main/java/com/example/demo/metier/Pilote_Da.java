package com.example.demo.metier;


import java.util.List;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
public class Pilote_Da extends User {
	
	@OneToMany(mappedBy = "pilote_da")
	@Column(name = "PILOTE_DA_DA")
	@JsonIgnore
	private List<Da> demandes;

	
	public List<Da> getDemandes() {
		return demandes;
	}


	public void setDemandes(List<Da> demandes) {
		this.demandes = demandes;
	}



	public Pilote_Da() {
		super();
	}
	
	public void addDa(Da da) {
		this.demandes.add(da);
	}
	
	

}
