package com.comic.store.authentication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.comic.store.authentication.model.Authentication;

@Repository
public interface AuthenticationRepository extends JpaRepository<Authentication, Integer>{
	
	public Authentication findByEmail(String email);

}
