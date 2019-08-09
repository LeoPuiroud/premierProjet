package com.example.demo.metier;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Version;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.fasterxml.jackson.annotation.JsonView;


@Entity
@Table(name = "users")
public class User {

	@Id
	@GeneratedValue (strategy = GenerationType.SEQUENCE, generator = "user_generator")
	@SequenceGenerator (name = "user_generator", sequenceName = "user_seq", allocationSize = 1)
	@JsonView(JsonViews.Common.class)
	private Integer id;
	@ElementCollection(targetClass = Roles.class)
	@CollectionTable(name = "ROLES", joinColumns = @JoinColumn(name = "user_id"))
	@Column(name = "roles")
	@JsonView(JsonViews.Common.class)
	private List<Roles> roles = new ArrayList<Roles>();
	@JsonView(JsonViews.Common.class)
	private String nom;
	@JsonView(JsonViews.Common.class)
	private String prenom;
	@JsonView(JsonViews.Common.class)
	@Column(nullable = true, unique = true)
	private String username;
	@JsonView(JsonViews.Common.class)
	private String password;

	@Version
	private Integer version;

	public User() {
	}
	
	

	public String getUsername() {
		return username;
	}



	public void setUsername(String username) {
		this.username = username;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}



	public Integer getVersion() {
		return version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public List<Roles> getRoles() {
		return roles;
	}

	public void setRoles(List<Roles> roles) {
		this.roles = roles;
	}
	
	public void addRoles(Roles role) {
		this.roles.add(role);
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}
