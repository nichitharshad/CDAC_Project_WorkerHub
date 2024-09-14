package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.entity.Field;
import com.app.entity.Worker;
import com.app.repository.WorkerRepository;


@Service
@Transactional
public class WorkerServiceImpl implements WorkerService {

	@Autowired
	WorkerRepository workRepo;
	
	@Override
	public List<Worker> getallWorker() {
		// TODO Auto-generated method stub
		return workRepo.findAll();
	}

	@Override
	public Worker addWorker(Worker w) {
		// TODO Auto-generated method stub
		return workRepo.save(w);
	}

	@Override
	public Worker getWorker(String email, String pass) {
		// TODO Auto-generated method stub
		return workRepo.getWorker(email, pass);
	}

	@Override
	public Worker getWorkerByEmail(String email) {
		// TODO Auto-generated method stub
		System.out.println("First");
		Worker w = workRepo.getWorkerbyEmail(email);
		System.out.println("hii");
		return w;
	}

	@Override
	public void updateWorker(String email, String address, String pincode, String phone, Field field, double exp) {
		// TODO Auto-generated method stub
		Worker w = getWorkerByEmail(email);
		if(w != null)
		{
			w.setAddress(address);
			w.setField(field);
			w.setAddress(phone);
			w.setPincode(pincode);
			w.setExp(exp);
		}
	}

	@Override
	public void updatePass(String email, String newpass) {
		// TODO Auto-generated method stub
		Worker w = getWorkerByEmail(email);
		if(w != null) {
			w.setPassword(newpass);
			workRepo.save(w);
		}
	}

	@Override
	public void deleteWOrker(Worker w) {
		// TODO Auto-generated method stub
		System.out.println("#rd");
		workRepo.delete(w);
	}

	@Override
	public boolean existsByEmail(String email) {
		return workRepo.existsByEmail(email);
	}

	@Override
	public void deleteWorkerById(Long id) {
		// TODO Auto-generated method stub
		Worker w = workRepo.getWorkerByID(id);
		workRepo.delete(w);
	}

}




