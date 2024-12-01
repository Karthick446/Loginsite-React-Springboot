package com.LoginRegister.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.LoginRegister.example.model.Users;
import com.LoginRegister.example.requests.LoginRequest;
import com.LoginRegister.example.service.UserService;

@RestController
public class UsersController {
	
	@Autowired
	private UserService userservice;
	
	@PostMapping("/addUser")
	@CrossOrigin("*")
	public Users addUser(@RequestBody Users users) {
		return userservice.addUser(users);
	}
	
	@PostMapping("/loginUser")
	@CrossOrigin("*")
	public Boolean loginUser(@RequestBody LoginRequest loginrequest) {
		return userservice.loginUser(loginrequest);
	}
		

}
