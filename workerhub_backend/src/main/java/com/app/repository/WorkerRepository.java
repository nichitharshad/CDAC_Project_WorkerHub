package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entity.Worker;

public interface WorkerRepository extends JpaRepository<Worker, Long> {

	
	@Query("select u from Worker u where u.email=:email and u.password=:pass")
	Worker getWorker(String email, String pass);
	
	
	
	@Query("select u from Worker u where u.email=:email")
	Worker getWorkerbyEmail(String email);
	
	@Query("select u from Worker u where u.id=:id ")
	Worker getWorkerByID(Long id);
	
	boolean existsByEmail(String email);
}




