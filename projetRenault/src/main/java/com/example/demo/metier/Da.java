package com.example.demo.metier;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
@Table(name="DA")
public class Da {

	@Id
	@GeneratedValue (strategy = GenerationType.SEQUENCE, generator = "da_generator")
	@SequenceGenerator (name = "da_generator", sequenceName = "da_seq", allocationSize = 1)
	@JsonView(JsonViews.Common.class)
	private Integer id;
	@Version
	@JsonView(JsonViews.Common.class)
	private Integer version;
	
	@ManyToOne
	@JsonView(JsonViews.ClientAvecDa.class)
	private Client client;
	@ManyToOne
	private Correspondant correspondant;
	@ManyToOne
	private Specialiste specialiste;
	@ManyToOne
	private Cdp cdp;
	@ManyToOne
	private Pilote_Da pilote_da;
	@JsonView(JsonViews.Common.class)
	private String service_exploitant;
	@JsonView(JsonViews.Common.class)
	private String direction_exploitant;
	@JsonView(JsonViews.Common.class)
	private String site_utilisation;
	@JsonView(JsonViews.Common.class)
	private String description_du_besoin;
	@JsonView(JsonViews.Common.class)
	private boolean validation_du_besoin;
	@JsonView(JsonViews.Common.class)
	private String devis_propose;
	@JsonView(JsonViews.Common.class)
	private String zone_commentaire;
	
	
	
	public Da() {
		super();
	}
	
	
	
	public Integer getVersion() {
		return version;
	}



	public void setVersion(Integer version) {
		this.version = version;
	}



	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Client getClient() {
		return client;
	}
	public void setClient(Client client) {
		this.client = client;
	}
	public Correspondant getCorrespondant() {
		return correspondant;
	}
	public void setCorrespondant(Correspondant correspondant) {
		this.correspondant = correspondant;
	}
	public Specialiste getSpecialiste() {
		return specialiste;
	}
	public void setSpecialiste(Specialiste specialiste) {
		this.specialiste = specialiste;
	}
	public Cdp getCdp() {
		return cdp;
	}
	public void setCdp(Cdp cdp) {
		this.cdp = cdp;
	}
	public Pilote_Da getPilote_da() {
		return pilote_da;
	}
	public void setPilote_da(Pilote_Da pilote_da) {
		this.pilote_da = pilote_da;
	}
	public String getService_exploitant() {
		return service_exploitant;
	}
	public void setService_exploitant(String service_exploitant) {
		this.service_exploitant = service_exploitant;
	}
	public String getDirection_exploitant() {
		return direction_exploitant;
	}
	public void setDirection_exploitant(String direction_exploitant) {
		this.direction_exploitant = direction_exploitant;
	}
	public String getSite_utilisation() {
		return site_utilisation;
	}
	public void setSite_utilisation(String site_utilisation) {
		this.site_utilisation = site_utilisation;
	}
	public String getDescription_du_besoin() {
		return description_du_besoin;
	}
	public void setDescription_du_besoin(String description_du_besoin) {
		this.description_du_besoin = description_du_besoin;
	}
	public boolean isValidation_du_besoin() {
		return validation_du_besoin;
	}
	public void setValidation_du_besoin(boolean validation_du_besoin) {
		this.validation_du_besoin = validation_du_besoin;
	}
	public String getDevis_propose() {
		return devis_propose;
	}
	public void setDevis_propose(String devis_propose) {
		this.devis_propose = devis_propose;
	}
	public String getZone_commentaire() {
		return zone_commentaire;
	}
	public void setZone_commentaire(String zone_commentaire) {
		this.zone_commentaire = zone_commentaire;
	}
	
	
	
	
}
