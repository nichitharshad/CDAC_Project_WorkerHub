package com.app.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Setter
@Getter
@ToString

public class UserEditDTO {
	private String email;
	private String phone;
	private String address;
	public UserEditDTO(String phone, String address, String email) {
		super();
		this.email  = email;
		this.phone = phone;
		this.address = address;
	}
	
}

