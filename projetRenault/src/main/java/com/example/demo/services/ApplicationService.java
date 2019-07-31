package com.example.demo.services;

import java.security.Security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;

import com.example.demo.metier.Cdp;
import com.example.demo.metier.Client;
import com.example.demo.metier.Correspondant;
import com.example.demo.metier.Da;
import com.example.demo.metier.Pilote_Da;
import com.example.demo.metier.Roles;
import com.example.demo.metier.Specialiste;
import com.example.demo.repository.CdpRepository;
import com.example.demo.repository.ClientRepository;
import com.example.demo.repository.CorrespondantRepository;
import com.example.demo.repository.DaRepository;
import com.example.demo.repository.Pilote_DaRepository;
import com.example.demo.repository.SpecialisteRepository;

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
	
	
	@Override
	public void run(String... args) throws Exception {
		test1();
	}
	
		public void test1() {
			
			Client c = new Client();
			c.setPrenom("toto");
			c.setNom("legrand");
			c.addRoles(Roles.ROLE_CLIENT);
			clientrepo.save(c);
			Client c2 = new Client();
			c2.setPrenom("tata");
			c2.setNom("petit");
			c2.addRoles(Roles.ROLE_CLIENT);
			clientrepo.save(c2);
			Specialiste spe = new Specialiste();
			spe.setPrenom("le specialiste");
			spe.setNom("petit");
			spe.addRoles(Roles.ROLE_SPECIALISTE);
			specialisterepo.save(spe);
			Cdp cdp1 = new Cdp();
			cdp1.setPrenom("Cpt Flamme");
			cdp1.setNom("stranger");
			cdpRepository.save(cdp1);
			Correspondant corres1 = new Correspondant();
			corres1.setPrenom("azerty");
			corres1.setNom("corres");
			correspondantRepository.save(corres1);
			Pilote_Da pda = new Pilote_Da();
			pda.setPrenom("PiloteDA");
			pda.setNom("achat");
			pilote_DaRepository.save(pda);
			Da demande1 = new Da();
			demande1.setClient(c);
			demande1.setCdp(cdp1);
			demande1.setCorrespondant(corres1);
			demande1.setPilote_da(pda);
			demande1.setSpecialiste(spe);
			demande1.setDescription_du_besoin("besoin de stuff");
			demande1.setService_exploitant("service des douanes");
			demande1.setDevis_propose("50000€");
			demande1.setDirection_exploitant("Doc Pouzet");
			demande1.setSite_utilisation("Paris");
			demande1.setZone_commentaire("nope");
			daRepository.save(demande1);
			Da demande2 = new Da();
			demande2.setClient(c);
			daRepository.save(demande2);
			
			
			System.out.println("lala");
			
			
		}

}
