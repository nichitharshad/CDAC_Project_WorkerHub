package com.app.service;

import java.util.List;

import com.app.entity.User;

public interface UserService {

	List<User> getall();
	
	User addUser(User u);
	
	User getUser(String email, String pass);

	User getUserByEmail(String email);

	void updateUser(String phone, String pass, String email);
	
	void updatePass(String email, String newpass);
	
	void deleteUser(User u);

	public boolean existsByEmail(String email);
	
	void deleteuserbyId(Long id);
}
	




