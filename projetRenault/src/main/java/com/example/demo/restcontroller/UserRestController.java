package com.example.demo.restcontroller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.metier.Cdp;
import com.example.demo.metier.Client;
import com.example.demo.metier.Correspondant;
import com.example.demo.metier.Da;
import com.example.demo.metier.Pilote_Da;
import com.example.demo.metier.Specialiste;
import com.example.demo.metier.User;
import com.example.demo.repository.CdpRepository;
import com.example.demo.repository.ClientRepository;
import com.example.demo.repository.CorrespondantRepository;
import com.example.demo.repository.Pilote_DaRepository;
import com.example.demo.repository.SpecialisteRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.services.MyUserDetailsService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*")
public class UserRestController {

	@Autowired
	private MyUserDetailsService muds;

	@Autowired
	private ClientRepository clientRepository;

	@Autowired
	private CdpRepository cdpRepository;

	@Autowired
	private CorrespondantRepository correspondantRepository;

	@Autowired
	private SpecialisteRepository specialisteRepository;

	@Autowired
	private Pilote_DaRepository pilote_DaRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@GetMapping("/client")
	public ResponseEntity<List<Client>> findAllClient() {
		return new ResponseEntity<List<Client>>(clientRepository.findAll(), HttpStatus.OK);
	}

	@GetMapping("/client/{id}")
	public ResponseEntity<Client> findClientById(@PathVariable(name = "id") Integer id) {
		return new ResponseEntity<Client>(clientRepository.findById(id).get(), HttpStatus.OK);
	}

	@GetMapping("/cdp")
	public ResponseEntity<List<Cdp>> findAllCdp() {
		return new ResponseEntity<List<Cdp>>(cdpRepository.findAll(), HttpStatus.OK);
	}

	@GetMapping("/cdp/{id}")
	public ResponseEntity<Cdp> findCdpById(@PathVariable(name = "id") Integer id) {
		return new ResponseEntity<Cdp>(cdpRepository.findById(id).get(), HttpStatus.OK);
	}

	@GetMapping("/correspondant")
	public ResponseEntity<List<Correspondant>> findAllCorrespondant() {
		return new ResponseEntity<List<Correspondant>>(correspondantRepository.findAll(), HttpStatus.OK);
	}

	@GetMapping("/correspondant/{id}")
	public ResponseEntity<Correspondant> findCorrespondantById(@PathVariable(name = "id") Integer id) {
		return new ResponseEntity<Correspondant>(correspondantRepository.findById(id).get(), HttpStatus.OK);
	}

	@GetMapping("/specialiste")
	public ResponseEntity<List<Specialiste>> findAllSpecialiste() {
		return new ResponseEntity<List<Specialiste>>(specialisteRepository.findAll(), HttpStatus.OK);
	}

	@GetMapping("/specialiste/{id}")
	public ResponseEntity<Specialiste> findSpecialisteById(@PathVariable(name = "id") Integer id) {
		return new ResponseEntity<Specialiste>(specialisteRepository.findById(id).get(), HttpStatus.OK);
	}

	@GetMapping("/piloteda")
	public ResponseEntity<List<Pilote_Da>> findAllPiloteda() {
		return new ResponseEntity<List<Pilote_Da>>(pilote_DaRepository.findAll(), HttpStatus.OK);
	}

	@GetMapping("/piloteda/{id}")
	public ResponseEntity<Pilote_Da> findPilote_daById(@PathVariable(name = "id") Integer id) {
		return new ResponseEntity<Pilote_Da>(pilote_DaRepository.findById(id).get(), HttpStatus.OK);
	}

	// créer et éditer un client
	@PutMapping("/client/edit")
	public ResponseEntity<Void> editClient(@RequestBody Client client) {
		if (client.getId() == null) {
			clientRepository.save(client);
			return new ResponseEntity<Void>(HttpStatus.CREATED);
		} else {
			Optional<Client> opt = clientRepository.findById(client.getId());
			if (opt.isPresent()) {
				Client ceb = opt.get(); // ceb = client en base
				ceb.setNom((client.getNom() != null ? client.getNom() : ceb.getNom()));
				ceb.setPrenom((client.getPrenom() != null ? client.getPrenom() : ceb.getPrenom()));
				ceb.setRoles((client.getRoles() != null ? client.getRoles() : ceb.getRoles()));
				clientRepository.save(ceb);
				return new ResponseEntity<Void>(HttpStatus.OK);
			} else {
				clientRepository.save(client);
				return new ResponseEntity<Void>(HttpStatus.CREATED);
			}
		}

	}

	// créer et éditer un chef de projet
	@PutMapping("/cdp/edit")
	public ResponseEntity<Void> editCdp(@RequestBody Cdp cdp) {
		if (cdp.getId() == null) {
			cdpRepository.save(cdp);
			return new ResponseEntity<Void>(HttpStatus.CREATED);
		} else {
			Optional<Cdp> opt = cdpRepository.findById(cdp.getId());
			if (opt.isPresent()) {
				Cdp ceb = opt.get(); // ceb = cdp en base
				ceb.setNom((cdp.getNom() != null ? cdp.getNom() : ceb.getNom()));
				ceb.setPrenom((cdp.getPrenom() != null ? cdp.getPrenom() : ceb.getPrenom()));
				ceb.setRoles((cdp.getRoles() != null ? cdp.getRoles() : ceb.getRoles()));
				cdpRepository.save(ceb);
				return new ResponseEntity<Void>(HttpStatus.OK);
			} else {
				cdpRepository.save(cdp);
				return new ResponseEntity<Void>(HttpStatus.CREATED);
			}
		}

	}

	// créer et éditer un correspondant
	@PutMapping("/correspondant/edit")
	public ResponseEntity<Void> editCdp(@RequestBody Correspondant correspondant) {
		if (correspondant.getId() == null) {
			correspondantRepository.save(correspondant);
			return new ResponseEntity<Void>(HttpStatus.CREATED);
		} else {
			Optional<Correspondant> opt = correspondantRepository.findById(correspondant.getId());
			if (opt.isPresent()) {
				Correspondant ceb = opt.get(); // ceb = correspondant en base
				ceb.setNom((correspondant.getNom() != null ? correspondant.getNom() : ceb.getNom()));
				ceb.setPrenom((correspondant.getPrenom() != null ? correspondant.getPrenom() : ceb.getPrenom()));
				ceb.setRoles((correspondant.getRoles() != null ? correspondant.getRoles() : ceb.getRoles()));
				correspondantRepository.save(ceb);
				return new ResponseEntity<Void>(HttpStatus.OK);
			} else {
				correspondantRepository.save(correspondant);
				return new ResponseEntity<Void>(HttpStatus.CREATED);
			}
		}

	}

	// créer et éditer un specialiste
	@PutMapping("/specialiste/edit")
	public ResponseEntity<Void> editCdp(@RequestBody Specialiste specialiste) {
		if (specialiste.getId() == null) {
			specialisteRepository.save(specialiste);
			return new ResponseEntity<Void>(HttpStatus.CREATED);
		} else {
			Optional<Specialiste> opt = specialisteRepository.findById(specialiste.getId());
			if (opt.isPresent()) {
				Specialiste seb = opt.get(); // seb = specialiste en base
				seb.setNom((specialiste.getNom() != null ? specialiste.getNom() : seb.getNom()));
				seb.setPrenom((specialiste.getPrenom() != null ? specialiste.getPrenom() : seb.getPrenom()));
				seb.setRoles((specialiste.getRoles() != null ? specialiste.getRoles() : seb.getRoles()));
				specialisteRepository.save(seb);
				return new ResponseEntity<Void>(HttpStatus.OK);
			} else {
				specialisteRepository.save(specialiste);
				return new ResponseEntity<Void>(HttpStatus.CREATED);
			}
		}

	}

	// créer et éditer un pilote_da
	@PutMapping("/pilote_da/edit")
	public ResponseEntity<Void> editCdp(@RequestBody Pilote_Da pilote_da) {
		if (pilote_da.getId() == null) {
			pilote_DaRepository.save(pilote_da);
			return new ResponseEntity<Void>(HttpStatus.CREATED);
		} else {
			Optional<Pilote_Da> opt = pilote_DaRepository.findById(pilote_da.getId());
			if (opt.isPresent()) {
				Pilote_Da peb = opt.get(); // peb = pilote_da en base
				peb.setNom((pilote_da.getNom() != null ? pilote_da.getNom() : peb.getNom()));
				peb.setPrenom((pilote_da.getPrenom() != null ? pilote_da.getPrenom() : peb.getPrenom()));
				peb.setRoles((pilote_da.getRoles() != null ? pilote_da.getRoles() : peb.getRoles()));
				pilote_DaRepository.save(peb);
				return new ResponseEntity<Void>(HttpStatus.OK);
			} else {
				pilote_DaRepository.save(pilote_da);
				return new ResponseEntity<Void>(HttpStatus.CREATED);
			}
		}

	}

//	@PostMapping("/login")
//	public ResponseEntity<UserDetails> login(@RequestParam User user) {
//		UserDetails ud = muds.loadUserByUsername(user.getUsername());
//		if (ud != null) {
//			if (ud.getUsername().equals(user.getUsername()) && ud.getPassword().equals(user.getPassword())) {
//				return new ResponseEntity<UserDetails>(ud, HttpStatus.OK);
//			} else {
//				return new ResponseEntity<UserDetails>(HttpStatus.BAD_REQUEST);
//			}
//		} else {
//			return new ResponseEntity<UserDetails>(HttpStatus.BAD_REQUEST);
//		}
//	}

//	@PostMapping("/login")
//	public ResponseEntity<Boolean> login(@RequestBody User user){
//		Optional<User> opt = userRepository.findByUsernameWithRoles(user.getUsername());
//		if (opt.isPresent()) {
//			if(opt.get().getPassword() == user.getPassword()) {
//				return new ResponseEntity<Boolean>(true, HttpStatus.OK);
//			}
//			else {
//				return new ResponseEntity<Boolean>(false, HttpStatus.BAD_REQUEST);
//			}
//		}
//		else {
//			return new ResponseEntity<Boolean>(false, HttpStatus.BAD_REQUEST);
//		}
//	}

	@PostMapping("/login/{username}")
	public ResponseEntity<User> login(@PathVariable String username) {
		Optional<User> opt = userRepository.findByUsernameWithRoles(username);
		if (opt.isPresent()) {
			return new ResponseEntity<User>(opt.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<User>(opt.get(), HttpStatus.BAD_REQUEST);
		}
	}

}
