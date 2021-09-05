package com.demo.employees.dao.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

//ORM
@Entity
//Annotation To Create Getters & Setters & constructor ...
@Data @AllArgsConstructor @NoArgsConstructor @ToString
public class Employee implements Serializable {
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String email;
	private String address;	
	private String phone;
}
