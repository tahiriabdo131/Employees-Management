package com.demo.employees.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.demo.employees.dao.entities.Employee;
//Cross Origin
import org.springframework.web.bind.annotation.CrossOrigin;

//(origins = "http://localhost:3000")
@CrossOrigin("*")
@RepositoryRestResource
//, allowedHeaders = "*"
public interface EmployeeRepository extends JpaRepository<Employee, Long>{}
