
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
public class WorkerProfileDTO 
	{
	private Long id;
	private String email;
	private String name;
	private String address;
	private String phone;
	private double vcharge;
	private String pincode;
	private Field field;
	private double exp;
	public WorkerProfileDTO(Long id, String email, String name, String address, String phone,double vcharge, String pincode,
			Field field, double exp) {
		super();
		this.id = id;
		this.email = email;
		this.name = name;
		this.address = address;
		this.phone = phone;
		this.vcharge=vcharge;
		this.pincode = pincode;
		this.field = field;
		this.exp = exp;
	}
	public WorkerProfileDTO(String email, String name, String address, String phone,double vcharge, String pincode, Field field,
			double exp) {
		super();
		this.email = email;
		this.name = name;
		this.address = address;
		this.phone = phone;
		this.vcharge=vcharge;
		this.pincode = pincode;
		this.field = field;
		this.exp = exp;
	}
	
	
	

}
