package com.app.service;

import java.util.List;

import com.app.entity.Appointment;

public interface AppointmentService 
{
	
	public List<Appointment> getAllAppointments();
	
	public List<Appointment> getAppointmentsByUserId(Long userId);
	
	public List<Appointment> getAppointmentsByWorkerId(Long workerId);
	
	public Appointment updateAppointmentStatus(Long appointmentId, String status);
	
	public Appointment bookAppointment(Appointment appointment, Long userId, Long workerId);

}
