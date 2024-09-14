package com.app.entity;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@MappedSuperclass
@Setter
@Getter
@ToString
@NoArgsConstructor
public class BaseEntity {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id ;
	@Column(length = 50, name = "email",unique = true)
	private String email;
	@Column(length = 50, name = "password")
	private String password;
	public BaseEntity(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}
	
}








