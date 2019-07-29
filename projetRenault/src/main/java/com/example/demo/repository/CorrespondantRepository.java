package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.metier.Correspondant;

public interface CorrespondantRepository extends JpaRepository<Correspondant, Integer>{

}
