
package com.app.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class WorkerDeleteDTO {
	
	private String email;
	private String password;
	public WorkerDeleteDTO(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}
	

}
