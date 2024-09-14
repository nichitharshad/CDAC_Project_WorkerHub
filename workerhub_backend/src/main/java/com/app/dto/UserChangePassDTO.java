package com.app.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Setter
@Getter
@ToString
public class UserChangePassDTO {
	
	private String email;
	private String password;
	private String newPass;
	public UserChangePassDTO(String email, String password, String newPass) {
		super();
		this.email = email;
		this.password = password;
		this.newPass = newPass;
	}
}

