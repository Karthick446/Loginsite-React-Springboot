package com.LoginRegister.example.service;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.LoginRegister.example.model.Users;
import com.LoginRegister.example.repository.UsersRepo;
import com.LoginRegister.example.requests.LoginRequest;

@Service
public class UserService {
	@Autowired
	private UsersRepo usersrepo;
	
	public Users addUser(Users users) {
		return usersrepo.save(users);
	}
	public Boolean loginUser(LoginRequest loginrequest) {
		Optional<Users> users=usersrepo.findById(loginrequest.getUserId());
		Users user1=users.get();
		
		if(user1==null) {
			return false;
		}
		if(!user1.getPassword().equals(loginrequest.getPassword())) {
			return false;
		}
		return true;
	}
	
}
