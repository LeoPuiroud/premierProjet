package com.example.demo.services;

import java.security.Security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.metier.Cdp;
import com.example.demo.metier.Client;
import com.example.demo.metier.Correspondant;
import com.example.demo.metier.Da;
import com.example.demo.metier.Pilote_Da;
import com.example.demo.metier.Roles;
import com.example.demo.metier.Specialiste;
import com.example.demo.metier.Statut;
import com.example.demo.metier.User;
import com.example.demo.repository.CdpRepository;
import com.example.demo.repository.ClientRepository;
import com.example.demo.repository.CorrespondantRepository;
import com.example.demo.repository.DaRepository;
import com.example.demo.repository.Pilote_DaRepository;
import com.example.demo.repository.SpecialisteRepository;
import com.example.demo.repository.UserRepository;

@Service
public class ApplicationService implements CommandLineRunner {

	@Autowired
	private ClientRepository clientrepo;
	
	@Autowired
	private SpecialisteRepository specialisterepo;
	
	@Autowired
	private DaRepository daRepository;
	
	@Autowired
	private CdpRepository cdpRepository;
	
	@Autowired
	private CorrespondantRepository correspondantRepository;
	
	@Autowired
	private Pilote_DaRepository pilote_DaRepository;
	
	@Autowired
	private PasswordEncoder passwordencoder;
	
	private UserRepository userRepository;
	
	
	@Override
	public void run(String... args) throws Exception {
		test1();
	}
	
		public void test1() {
			
			Cdp c = new Cdp();
			c.setPrenom("admin");
			c.setPassword(passwordencoder.encode("admin"));
			c.setUsername("admin");
			c.setNom("nomadmin");
			c.addRoles(Roles.ROLE_ADMIN);
			cdpRepository.save(c);
			Client c2 = new Client();
			c2.setPrenom("client");
			c2.setUsername("client");
			c2.setPassword(passwordencoder.encode("client"));
			c2.setNom("nomclient");
			c2.addRoles(Roles.ROLE_CLIENT);
			clientrepo.save(c2);
			Specialiste spe = new Specialiste();
			spe.setPrenom("specialiste");
			spe.setNom("specialiste");
			spe.setUsername("specialiste");
			spe.setPassword(passwordencoder.encode("specialiste"));
			spe.addRoles(Roles.ROLE_SPECIALISTE);
			specialisterepo.save(spe);
			Cdp cdp1 = new Cdp();
			cdp1.setPrenom("cdp");
			cdp1.setNom("nomcdp");
			cdp1.setUsername("cdp");
			cdp1.setPassword(passwordencoder.encode("cdp"));
			cdp1.addRoles(Roles.ROLE_CDP);
			cdpRepository.save(cdp1);
			Correspondant corres1 = new Correspondant();
			corres1.setPrenom("correspondant");
			corres1.setNom("nomcorrespondant");
			corres1.setUsername("correspondant");
			corres1.setPassword(passwordencoder.encode("correspondant"));
			corres1.addRoles(Roles.ROLE_CORRESPONDANT);
			correspondantRepository.save(corres1);
			Pilote_Da pda = new Pilote_Da();
			pda.setPrenom("piloteda");
			pda.setNom("nompiloteda");
			pda.setUsername("piloteda");
			pda.setPassword(passwordencoder.encode("piloteda"));
			pda.addRoles(Roles.ROLE_PILOTEDA);
			pilote_DaRepository.save(pda);
			Da demande1 = new Da();
			demande1.setClient(c2);
			demande1.setDescription_du_besoin("besoin de...");
			demande1.setService_exploitant("service A");
			demande1.setDevis_propose("500€");
			demande1.setDirection_exploitant("Direction technique");
			demande1.setSite_utilisation("Paris");
			demande1.setZone_commentaire("Commentaires");
			demande1.setStatut(Statut.Creation);
			daRepository.save(demande1);
			Da demande2 = new Da();
			demande2.setClient(c2);
			demande2.setStatut(Statut.Verification_1);
			daRepository.save(demande2);
			
			
			System.out.println("lala");		
		}
		
		public void test2(){
			Cdp c = new Cdp();
			c.setPrenom("admin");
			c.setPassword(passwordencoder.encode("admin"));
			c.setUsername("admin");
			c.setNom("nomadmin");
			c.addRoles(Roles.ROLE_ADMIN);
			cdpRepository.save(c);
			System.out.println("test2");
			
		}

}
