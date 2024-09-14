package com.app.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter@Setter
@ToString
@NoArgsConstructor
public class WorkerLoginDTO {
	
	private String email;
	
	private String password;

	public WorkerLoginDTO(String email, String passworld) {
		super();
		this.email = email;
		this.password = passworld;
	}
	
	
	

}





