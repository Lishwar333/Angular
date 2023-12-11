package com.comic.store.authentication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.comic.store.authentication.model.Authentication;
import com.comic.store.authentication.repository.AuthenticationRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AuthenticationController {
	
	@Autowired
	AuthenticationRepository authRepository;
	
	@GetMapping("/authentication/get")
	public Authentication getAuthDetails(@RequestParam String email) {
		
		return authRepository.findByEmail(email);
		
	}
	
	@PostMapping("/authentication/post")
	public Authentication postAuthDetails(@RequestBody Authentication auth) {
		
		return authRepository.save(auth);
	}

}
