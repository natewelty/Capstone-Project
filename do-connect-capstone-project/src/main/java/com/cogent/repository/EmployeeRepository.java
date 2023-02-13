package com.cogent.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cogent.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}
