package com.example.demo.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import com.example.demo.metier.User;

public interface UserRepository extends JpaRepository<User, Integer>{

	@Query("select u from User u left join fetch u.roles where u.username=:username")
	Optional<User> findByUsernameWithRoles(@Param("username")String username);
	
}
