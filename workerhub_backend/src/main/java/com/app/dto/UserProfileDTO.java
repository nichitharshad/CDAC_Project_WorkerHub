package com.app.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Setter
@Getter
@ToString

public class UserProfileDTO {
	
	private Long id;
	
	
	private String email;
	
	
	private String name;
	
	
	private String address;
	
	
	private String phone;


	public UserProfileDTO(Long id, String email, String name, String address, String phone) {
		super();
		this.id = id;
		this.email = email;
		this.name = name;
		this.address = address;
		this.phone = phone;
	}


	public UserProfileDTO(String email, String name, String address, String phone) {
		super();
		this.email = email;
		this.name = name;
		this.address = address;
		this.phone = phone;
	}
	
	
	
	

}
