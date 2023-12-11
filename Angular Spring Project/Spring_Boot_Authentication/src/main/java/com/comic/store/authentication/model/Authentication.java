package com.comic.store.authentication.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Authentication {
	
	@Id
	int id;
	String email;
	String password;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Authentication(int id, String email, String password) {
		
		this.id = id;
		this.email = email;
		this.password = password;
	}
	public Authentication() {
		
	}
	@Override
	public String toString() {
		return "Authentication [id=" + id + ", email=" + email + ", password=" + password + "]";
	}
	

}
