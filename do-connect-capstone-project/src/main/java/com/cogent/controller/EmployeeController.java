package com.cogent.controller;

import com.cogent.entity.AuthRequest;
import com.cogent.entity.Employee;
import com.cogent.repository.EmployeeRepository;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmployeeController {

	
	
	
	//	@Autowired
//	EmployeeRepository er;
//    @Autowired
//    private JwtUtil jwtUtil;
//    @Autowired
//    private AuthenticationManager authenticationManager;
//
//    @GetMapping("/")
//    public String welcome() {
//        return "Welcome to Great learning !!";
//    }
//
//    @PostMapping("/authenticate")
//    public String generateToken(@RequestBody AuthRequest authRequest) throws Exception {
//        try {
//            authenticationManager.authenticate(
//                    new UsernamePasswordAuthenticationToken(authRequest.getUserName(), authRequest.getPassword())
//            );
//        } catch (Exception ex) {
//            throw new Exception("inavalid username/password");
//        }
//        return jwtUtil.generateToken(authRequest.getUserName());
//    }
//    @PostMapping("/employees")
//    public Employee create(@RequestBody Employee employee) {
//    	return er.save(employee);
//    }
//    @GetMapping("/employees/{id}")
//    public Employee read(@PathVariable("id") Integer id) {
//    	Optional<Employee> i=er.findById(id);
//    	return i.get();
//    }
//    @GetMapping("/employees")
//    public List<Employee> readAll(){
//    	return er.findAll();
//    }
//    @PutMapping("/employees")
//    public Employee update(@RequestBody Employee employee) {
//    	return er.save(employee);
//    }
//    @DeleteMapping("/employees")
//    public String delete(@RequestParam(value="id") Integer id) {
//    	Optional<Employee> i = er.findById(id);
//    	er.delete(i.get());
//    	return "Book id "+id+" deleted successfully.";
//    }
    
}
