package com.app.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.entity.User;
import com.app.repository.UserRepository;


@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userRepo;
	
	
	
	@Override
	public List<User> getall() {
		// TODO Auto-generated method stub
		return userRepo.findAll();
	}

	@Override
	public User addUser(User u) {
		// TODO Auto-generated method stub
		return userRepo.save(u);
	}

	@Override
	public User getUser(String email, String pass) {
		//public User getUser(String email, String password) {
	        User user = userRepo.getUserByEmail(email);
	        if (user != null &&  (pass.equals(user.getPassword()))) {
	            return user;
	        }
	        return null;
	    }
	

	@Override
	public User getUserByEmail(String email) {
		// TODO Auto-generated method stub
		return userRepo.getUserByEmail(email);
	}

	@Override
	public void updateUser(String phone, String address, String email) {
	    User user = getUserByEmail(email);
	    System.out.println(user);
	    if (user != null) {
	        user.setPhone(phone);
	        user.setAddress(address);
	        userRepo.save(user);
	    }
	}

	@Override
	public void updatePass(String email, String newpass) {
		// TODO Auto-generated method stub
		User user = getUserByEmail(email);
		if(user !=null) {
			user.setPassword(newpass);
			userRepo.save(user);
		}
	}

	@Override
	public void deleteUser(User u) {
		// TODO Auto-generated method stub
		userRepo.delete(u);
		
	}

	@Override
	public boolean existsByEmail(String email) {
		return userRepo.existsByEmail(email); 
	}

	@Override
	public void deleteuserbyId(Long id) {
		// TODO Auto-generated method stub
		User u = userRepo.getById(id);
		userRepo.delete(u);
	}

}




