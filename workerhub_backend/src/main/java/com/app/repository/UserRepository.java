package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entity.User;

public interface UserRepository extends JpaRepository<User, Long>{
	
	@Query("select u from User u where u.email=:email and u.password=:pass")
	User getUser(String email, String pass);
	//
	@Query("select u  from User u where u.email=:email")
	User getUserByEmail(String email);
	
	
	@Query("update User u set u.phone = :p  where u.email = :e")
	User updateUser(String p, String e);
	
	@Query("select u from User u where u.id=:id ")
	User getById(Long id);
	
	boolean existsByEmail(String email);

}



