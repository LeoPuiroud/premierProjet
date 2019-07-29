package com.example.demo.restcontroller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.example.demo.metier.Da;
import com.example.demo.repository.DaRepository;

@RestController
@RequestMapping("/da")
@CrossOrigin(origins = "*")
public class DaRestController {

	@Autowired
	private DaRepository daRepository;

	// return the Da list
	@GetMapping(value = { "" })
	public ResponseEntity<List<Da>> findAll() {
		return list();
	}

	// get the Da list from the database
	public ResponseEntity<List<Da>> list() {
		return new ResponseEntity<List<Da>>(daRepository.findAll(), HttpStatus.OK);
	}

	// get the Da by Id
	@GetMapping(value = { "/{id}" })
	public ResponseEntity<Optional<Da>> findById(@PathVariable(name = "id") Integer id) {
		return new ResponseEntity<Optional<Da>>(daRepository.findById(id), HttpStatus.OK);
	}

	// Get the Da list by a client Id
	@GetMapping(value = { "/client/{id}" })
	public ResponseEntity<List<Da>> findAllByClient(@PathVariable(name = "id") Integer id) {
		return new ResponseEntity<List<Da>>(daRepository.findAllByClient(id).get(), HttpStatus.OK);
	}

	// Get the Da list by a specialiste Id
	@GetMapping(value = { "/specialiste/{id}" })
	public ResponseEntity<List<Da>> findAllBySpecialiste(@PathVariable(name = "id") Integer id) {
		return new ResponseEntity<List<Da>>(daRepository.findListDaParSpecialiste(id).get(), HttpStatus.OK);
	}

	// Get the Da list by a project manager Id
	@GetMapping(value = { "/cdp/{id}" })
	public ResponseEntity<List<Da>> findAllByCdp(@PathVariable(name = "id") Integer id) {
		return new ResponseEntity<List<Da>>(daRepository.findListDaParCdp(id).get(), HttpStatus.OK);
	}

	// Get the Da list by a correspondant Id
	@GetMapping(value = { "/correspondant/{id}" })
	public ResponseEntity<List<Da>> findAllByCorrespondant(@PathVariable(name = "id") Integer id) {
		return new ResponseEntity<List<Da>>(daRepository.findListDaParCorrespondant(id).get(), HttpStatus.OK);
	}

	// Get the Da list by a pilote_da Id
	@GetMapping(value = { "/pilote_da/{id}" })
	public ResponseEntity<List<Da>> findAllByPilote_da(@PathVariable(name = "id") Integer id) {
		return new ResponseEntity<List<Da>>(daRepository.findListDaParPilote_da(id).get(), HttpStatus.OK);
	}

	// Create a new Da or modify a Da if it already exist (using information from a
	// form)
	
	@PutMapping("/edit")
	public ResponseEntity<Void> update(@Valid @RequestBody Da da) { 	
		if (da.getId() == null) {
			daRepository.save(da);
			return new ResponseEntity<Void>(HttpStatus.CREATED);
		} else {
			Optional<Da> opt = daRepository.findById(da.getId());
			if (opt.isPresent()) {
				Da daEnBase = opt.get();
				daEnBase.setCdp((da.getCdp() != null ? da.getCdp() : daEnBase.getCdp()));
				daEnBase.setClient((da.getClient() != null ? da.getClient() : daEnBase.getClient()));
				daEnBase.setSpecialiste(
						(da.getSpecialiste() != null ? da.getSpecialiste() : daEnBase.getSpecialiste()));
				daEnBase.setCorrespondant(
						(da.getCorrespondant() != null ? da.getCorrespondant() : daEnBase.getCorrespondant()));
				daEnBase.setPilote_da((da.getPilote_da() != null ? da.getPilote_da() : daEnBase.getPilote_da()));
				daEnBase.setDescription_du_besoin((da.getDescription_du_besoin() != null ? da.getDescription_du_besoin()
						: daEnBase.getDescription_du_besoin()));
				daEnBase.setDevis_propose(
						(da.getDevis_propose() != null ? da.getDevis_propose() : daEnBase.getDevis_propose()));
				daEnBase.setDirection_exploitant((da.getDirection_exploitant() != null ? da.getDirection_exploitant()
						: daEnBase.getDirection_exploitant()));
				daEnBase.setService_exploitant((da.getService_exploitant() != null ? da.getService_exploitant()
						: daEnBase.getService_exploitant()));
				daEnBase.setSite_utilisation(
						(da.getSite_utilisation() != null ? da.getSite_utilisation() : daEnBase.getSite_utilisation()));
				daEnBase.setZone_commentaire(
						(da.getZone_commentaire() != null ? da.getZone_commentaire() : daEnBase.getZone_commentaire()));
				daRepository.save(daEnBase);
				return new ResponseEntity<Void>(HttpStatus.OK);

			} else {
				Da newDa = new Da();
				newDa.setCdp((da.getCdp() != null ? da.getCdp() : newDa.getCdp()));
				newDa.setClient((da.getClient() != null ? da.getClient() : newDa.getClient()));
				newDa.setSpecialiste((da.getSpecialiste() != null ? da.getSpecialiste() : newDa.getSpecialiste()));
				newDa.setCorrespondant(
						(da.getCorrespondant() != null ? da.getCorrespondant() : newDa.getCorrespondant()));
				newDa.setPilote_da((da.getPilote_da() != null ? da.getPilote_da() : newDa.getPilote_da()));
				newDa.setDescription_du_besoin((da.getDescription_du_besoin() != null ? da.getDescription_du_besoin()
						: newDa.getDescription_du_besoin()));
				newDa.setDevis_propose(
						(da.getDevis_propose() != null ? da.getDevis_propose() : newDa.getDevis_propose()));
				newDa.setDirection_exploitant((da.getDirection_exploitant() != null ? da.getDirection_exploitant()
						: newDa.getDirection_exploitant()));
				newDa.setService_exploitant((da.getService_exploitant() != null ? da.getService_exploitant()
						: newDa.getService_exploitant()));
				newDa.setSite_utilisation(
						(da.getSite_utilisation() != null ? da.getSite_utilisation() : newDa.getSite_utilisation()));
				newDa.setZone_commentaire(
						(da.getZone_commentaire() != null ? da.getZone_commentaire() : newDa.getZone_commentaire()));
				daRepository.save(newDa);
				return new ResponseEntity<Void>(HttpStatus.CREATED);
			}
		}
	}

	@DeleteMapping("/delete")
	public ResponseEntity<Void> delete(@RequestParam(name="id") Integer id){
		Optional<Da> opt = daRepository.findById(id);
		if (opt.isPresent()) {
			daRepository.delete(opt.get());
			return new ResponseEntity<Void>(HttpStatus.OK);
		}
		else {
			return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
		}
		
	}
}
