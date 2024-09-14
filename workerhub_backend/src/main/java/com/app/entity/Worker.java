package com.app.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "workers")
@NoArgsConstructor
@Setter
@Getter
@ToString
public class Worker extends BaseEntity{
	
	@Column(name = "name", length = 100)
	private String name;
	@Column(name = "phone", length = 15)
	private String phone;
	@Column(name = "Visiting_Charge")
	private double vcharge;
	@Column(name = "address", length = 250)
	private String address;
	@Column(name = "pin_code", length = 15)
	private String pincode;
	@Enumerated(EnumType.STRING)
	@Column(name = "field", length = 20)
	
	private Field field;
	
	private double exp;

	public Worker(String email, String password, String name, String phone, double vcharge, String address,
			String pincode, Field field, double exp) {
		super(email, password);
		this.name = name;
		this.phone = phone;
		this.vcharge = vcharge;
		this.address = address;
		this.pincode = pincode;
		this.field = field;
		this.exp = exp;
	}

	

	

	

}




