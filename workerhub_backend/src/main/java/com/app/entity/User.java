package com.app.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "users")
@NoArgsConstructor
@Setter@Getter
@ToString
public class User extends BaseEntity{
	
	@Column(length = 100, name = "name")
	private String name;
	@Column(length = 250, name = "address")
	private String address;
	@Column(name="Pincode")
	private String pincode;
	@Column(length = 15, name = "phone")
	private String phone;
	@Enumerated(EnumType.STRING)
	@Column(name = "role", length = 20)
	private Role role;
	public User(String email, String password, String name, String address, String pincode, String phone, Role role) {
		super(email, password);
		this.name = name;
		this.address = address;
		this.pincode = pincode;
		this.phone = phone;
		this.role = role;
	}
	
	
	

}




