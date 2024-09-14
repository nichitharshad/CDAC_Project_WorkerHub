package com.app.dto;

import com.app.entity.Role;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@NoArgsConstructor
@Setter
@Getter
@ToString
public class UserSignUpDTO {
	
	private String email;
	
	private String password;
	
	private String phone;
	
	private String name;
	
	private String address;
	
	private String pincode;
	
	private Role role;

	public UserSignUpDTO(String email, String password, String phone, String name, String address, String pincode ,Role role) {
		super();
		this.email = email;
		this.password = password;
		this.phone = phone;
		this.name = name;
		this.address = address;
		this.pincode = pincode;
		this.role = role;
	}

	
	

	

}




