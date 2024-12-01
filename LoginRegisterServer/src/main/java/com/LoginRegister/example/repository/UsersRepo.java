package com.LoginRegister.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.LoginRegister.example.model.Users;

@Repository
public interface UsersRepo extends JpaRepository<Users,String>{

}