package com.app.dto;

import com.app.entity.Field;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@NoArgsConstructor
@Setter@Getter
@ToString
public class WorkerEditDTO {
	private String email;
	private String address;
	private String phone;
	private double vcharge;
	private String pincode;
	private Field field;
	private double exp;
	public WorkerEditDTO(String email, String address, String phone, double vcharge, String pincode, Field field,
			double exp) {
		super();
		this.email = email;
		this.address = address;
		this.phone = phone;
		this.vcharge = vcharge;
		this.pincode = pincode;
		this.field = field;
		this.exp = exp;
	}
	
	
	

}
