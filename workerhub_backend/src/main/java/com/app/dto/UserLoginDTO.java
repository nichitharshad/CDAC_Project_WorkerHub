package com.app.dto;

import lombok.Getter;

import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Setter
@Getter
@ToString
public class UserLoginDTO {
	
	private String email;
	
	private String password;

	public UserLoginDTO(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}	

}






