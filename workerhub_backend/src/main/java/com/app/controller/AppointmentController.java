package com.app.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.Appointment;
import com.app.service.AppointmentService;


@RequestMapping("/appointment")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AppointmentController 
{
	@Autowired
	AppointmentService aservice;
	
	@Autowired
	ModelMapper modelmapp;
	
	
	  
	  @GetMapping("/all")
	    public List<Appointment> getAllAppointments() {
	        return aservice.getAllAppointments();
	    }
	  
	  @GetMapping("/u/{userId}")
	  public List<Appointment> getAppointmentsByUserId(@PathVariable Long userId) {
		  System.out.println("Fetching appointments for user ID: " + userId);
		  List<Appointment> appointments = aservice.getAppointmentsByUserId(userId);
		    System.out.println("Appointments found: " + appointments);
		    return appointments;
	  }
	  
	  @GetMapping("/w/{workerId}")
	  public List<Appointment> getAppointmentsByWorkerId(@PathVariable Long workerId) {
		 
		  List<Appointment> appointments = aservice.getAppointmentsByWorkerId(workerId);
		    return appointments;
	  }
	  
	  @PutMapping("/{id}/status")
	    public ResponseEntity<Appointment> updateStatus(@PathVariable Long id, @RequestParam String status) {
	        Appointment updatedAppointment = aservice.updateAppointmentStatus(id, status);
	        return ResponseEntity.ok(updatedAppointment);
	    }

	  
	  	  
	  
	  @PostMapping("/add")
	    public ResponseEntity<Appointment> addAppointment(@RequestBody Appointment appointment) {
		  	Appointment appoint = modelmapp.map(appointment, Appointment.class);
	        Appointment savedAppointment = aservice.bookAppointment(appoint, appointment.getUser().getId(), appointment.getWorker().getId());
	        return ResponseEntity.ok(savedAppointment);
	    }
		


}
