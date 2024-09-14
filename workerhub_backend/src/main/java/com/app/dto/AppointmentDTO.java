package com.app.dto;

import java.time.LocalDate;

import com.app.entity.User;
import com.app.entity.Worker;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Setter
@Getter
@ToString
public class AppointmentDTO 
{
	
	
	
	private String address;
	
	private String pincode;
	
	private String status = "pending";
	
	private LocalDate date;
	
	private User userId;
	
	private Worker workerId;

	public AppointmentDTO(String address, String pincode, String status, LocalDate date, User userId, Worker workerId) {
		super();
		this.address = address;
		this.pincode = pincode;
		this.status = status;
		this.date = date;
		this.userId = userId;
		this.workerId = workerId;
	}

	
	}

	

	
	
	


