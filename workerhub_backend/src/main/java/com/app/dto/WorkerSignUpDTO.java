package com.app.dto;

import com.app.entity.Field;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Setter
@Getter
@ToString
public class WorkerSignUpDTO {
	
	private String email;
	
	private String password;
	
	private String name;
	
	private String phone;
	
	private double vcharge;
	
	private String address;
	
	private String pincode;
	
	private Field field;
	
	private double exp;

	public WorkerSignUpDTO(String email, String password, String name, String phone, double vcharge, String address,
			String pincode, Field field,double exp) {
		super();
		this.email = email;
		this.password = password;
		this.name = name;
		this.phone = phone;
		this.vcharge = vcharge;
		this.address = address;
		this.pincode = pincode;
		this.field = field;
		this.exp=exp;
	}

	
	
	

}
