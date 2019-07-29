package com.example.demo.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.metier.Cdp;
import com.example.demo.metier.Client;
import com.example.demo.metier.Correspondant;
import com.example.demo.metier.Pilote_Da;
import com.example.demo.metier.Specialiste;
import com.example.demo.repository.CdpRepository;
import com.example.demo.repository.ClientRepository;
import com.example.demo.repository.CorrespondantRepository;
import com.example.demo.repository.Pilote_DaRepository;
import com.example.demo.repository.SpecialisteRepository;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*")
public class UserRestController {
	
	@Autowired
	private  ClientRepository clientRepository;
	
	@Autowired
	private CdpRepository cdpRepository;
	
	@Autowired
	private CorrespondantRepository correspondantRepository;
	
	@Autowired
	private SpecialisteRepository specialisteRepository;
	
	@Autowired
	private Pilote_DaRepository pilote_DaRepository;

	@GetMapping("/client")
	public ResponseEntity<List<Client>> findAllClient() {
		return new ResponseEntity<List<Client>>(clientRepository.findAll(), HttpStatus.OK);
	}
	
	@GetMapping("/client/{id}")
	public ResponseEntity<Client> findClientById(@PathVariable(name="id") Integer id ) {
		return new ResponseEntity<Client>(clientRepository.findById(id).get(), HttpStatus.OK);
	}
	
	
	
	@GetMapping("/cdp")
	public ResponseEntity<List<Cdp>> findAllCdp() {
		return new ResponseEntity<List<Cdp>>(cdpRepository.findAll(), HttpStatus.OK);
	}
	
	@GetMapping("/cdp/{id}")
	public ResponseEntity<Cdp> findCdpById(@PathVariable(name="id") Integer id ) {
		return new ResponseEntity<Cdp>(cdpRepository.findById(id).get(), HttpStatus.OK);
	}
	
	@GetMapping("/correspondant")
	public ResponseEntity<List<Correspondant>> findAllCorrespondant() {
		return new ResponseEntity<List<Correspondant>>(correspondantRepository.findAll(), HttpStatus.OK);
	}
	
	@GetMapping("/correspondant/{id}")
	public ResponseEntity<Correspondant> findCorrespondantById(@PathVariable(name="id") Integer id ) {
		return new ResponseEntity<Correspondant>(correspondantRepository.findById(id).get(), HttpStatus.OK);
	}
	
	@GetMapping("/specialiste")
	public ResponseEntity<List<Specialiste>> findAllSpecialiste() {
		return new ResponseEntity<List<Specialiste>>(specialisteRepository.findAll(), HttpStatus.OK);
	}
	
	@GetMapping("/specialiste/{id}")
	public ResponseEntity<Specialiste> findSpecialisteById(@PathVariable(name="id") Integer id ) {
		return new ResponseEntity<Specialiste>(specialisteRepository.findById(id).get(), HttpStatus.OK);
	}
	
	@GetMapping("/piloteda")
	public ResponseEntity<List<Pilote_Da>> findAllPiloteda() {
		return new ResponseEntity<List<Pilote_Da>>(pilote_DaRepository.findAll(), HttpStatus.OK);
	}
	
	@GetMapping("/piloteda/{id}")
	public ResponseEntity<Pilote_Da> findPilote_daById(@PathVariable(name="id") Integer id ) {
		return new ResponseEntity<Pilote_Da>(pilote_DaRepository.findById(id).get(), HttpStatus.OK);
	}
	
	
	
	
}
