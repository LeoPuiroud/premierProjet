package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.metier.User;

public interface UserRepository extends JpaRepository<User, Integer>{

}
