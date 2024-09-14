package com.app.entity;

import java.time.LocalDate;
import javax.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "appointments")
@NoArgsConstructor
@Setter@Getter
@ToString
public class Appointment 
{
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
    private Long id;

	

	@Column(name="Address")
    private String address;
	@Column(name="PinCode")
	private String pincode;
	@Column(name="Appointment_Date")
	private LocalDate date;
	@Column(name="Status")
	private String status = "pending";
//	@Column(name="Approval")
////	private String approval="pending";
	//@Column(name="userId")
	 @ManyToOne
	 @JoinColumn(name = "user_id")
    private User user;
//	@Column(name="WorkerId")
	 @ManyToOne
	    @JoinColumn(name = "worker_id")
	private Worker worker;
public Appointment(String address, String pincode, LocalDate date, String status, User user, Worker worker) {
	super();
	this.address = address;
	this.pincode = pincode;
	this.date = date;
	this.status = status;
	this.user = user;
	this.worker = worker;
}
	

	
	
	
	
    
    

}
