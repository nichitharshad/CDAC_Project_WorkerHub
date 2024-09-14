	package com.app.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.WorkerChangePassDTO;
import com.app.dto.WorkerDeleteDTO;
import com.app.dto.WorkerEditDTO;
import com.app.dto.WorkerLoginDTO;
import com.app.dto.WorkerProfileDTO;
import com.app.dto.WorkerSignUpDTO;
import com.app.entity.Worker;
import com.app.service.WorkerService;

@RequestMapping("/worker")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class WorkerController {
	
	
	@Autowired
	public WorkerService workerServ;
	
	@Autowired
	public ModelMapper modelmapper;
	
	@GetMapping("/getall")
	public List<Worker> getall(){
		return workerServ.getallWorker();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> deletWorkerByID(@PathVariable Long id){
		try {
			workerServ.deleteWorkerById(id);
			return ResponseEntity.ok("Worker Deleted Successfully !!");
		}
		catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to deleted worker");
		}
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> addWorker(@RequestBody WorkerSignUpDTO w) {
		System.out.println(w);
		Worker wor = modelmapper.map(w, Worker.class);
		if (workerServ.existsByEmail(w.getEmail())) {
	        return ResponseEntity.status(HttpStatus.CONFLICT).body("Email is already in use");
	    }
		return new ResponseEntity<>(workerServ.addWorker(wor), HttpStatus.CREATED);
	}

	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody WorkerLoginDTO worker){
		System.out.println("Hii");
		try {
			Worker w = workerServ.getWorker(worker.getEmail(), worker.getPassword());
			if(w != null) {
				WorkerProfileDTO workerprofile = modelmapper.map(w,WorkerProfileDTO.class);
				return ResponseEntity.ok(workerprofile);
			}
			else
				return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Worker");
		}
		catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to authenticate worker");
		}
	}
	
	
	@PostMapping("/edit")
	public ResponseEntity<?> updateWorker(@RequestBody WorkerEditDTO worke){
		
		System.out.println(worke);
		try {
			System.out.println("Hii Aniket");
			Worker w= workerServ.getWorkerByEmail(worke.getEmail());
			System.out.println(w);
			if(w != null) {
				w.setPhone(worke.getPhone());
			
				workerServ.updateWorker(worke.getEmail(), worke.getAddress(), worke.getPincode(), worke.getPhone(), worke.getField(), worke.getExp());
				return ResponseEntity.ok("Worker Profile Updated Successfully");
			}
			else
				return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Worker Not Found");
		}
		catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update worker profile");
		}
	}
	
	@PostMapping("/changepass")
	public ResponseEntity<?> changePass(@RequestBody WorkerChangePassDTO w){
		try {
			Worker wor = workerServ.getWorkerByEmail(w.getEmail());
			if( wor != null && (wor.getPassword().equals(w.getPassword()))){
				workerServ.updatePass(wor.getEmail(), w.getNewPass());
				return ResponseEntity.ok("Worker Password updated Successfully");
			}
			else
				return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Worker Not Found");
			}
			catch (Exception e) {
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update pass");
			}

	}
	
	@PostMapping("/delete")
	public ResponseEntity<?> deleteWorker(@RequestBody WorkerDeleteDTO w){
		System.out.println(w);
		try {
			System.out.println("Mahasea");
			Worker wor = workerServ.getWorkerByEmail(w.getEmail());
			if(wor != null && (wor.getPassword().equals(w.getPassword()))) {
				System.out.println("Hii First");
				workerServ.deleteWOrker(wor);
				System.out.println("Second");
				
				return ResponseEntity.ok("Worker was Deleted");
			}
			else
				return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Worker not found");
		}
		catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to delete user");
		}
	}
}





