package com.app.service;

import java.util.List;

import com.app.entity.Field;
import com.app.entity.Worker;

public interface WorkerService {
	
	
	List<Worker> getallWorker();
	
	
	Worker addWorker(Worker w);
	
	
	Worker getWorker(String email, String pass);
	
	Worker getWorkerByEmail(String email);
	
	void updateWorker(String email, String address, String pincode, String phone, Field field, double rating );
	
	void updatePass(String email, String newpass);
	
	void deleteWOrker(Worker w);
	
	void deleteWorkerById(Long id);


	public boolean existsByEmail(String email);
}





