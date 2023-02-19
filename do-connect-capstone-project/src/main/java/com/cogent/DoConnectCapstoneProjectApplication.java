package com.cogent;



import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.cogent.entity.CustomUser;
import com.cogent.repository.UserRepository;

import jakarta.annotation.PostConstruct;

@SpringBootApplication
public class DoConnectCapstoneProjectApplication {
	

	@PostConstruct
	public void initDB() {
		Connection conn = null;
		final String url = "jdbc:h2:mem:dcbapp"; // /test_db will be the name of whatever database.
		final String username = "sa";
		final String password = "password";
	
		try {
			conn = DriverManager.getConnection(url,username,password);
			if (conn != null) {
				System.out.println("Connection established.");
			}
			Statement stmnt = conn.createStatement();
			stmnt.execute("CREATE TABLE IF NOT EXISTS USERS (USERNAME varchar(30),PASSWORD varchar(90), ENABLED boolean, ACCOUNTNONEXPIRED boolean, CREDENTIALSNONEXPIRED boolean, ACCOUNTNONLOCKED boolean)");//+ "(id int PRIMARY KEY, username varchar(30),"+ "password varchar(30), cDoB DATE)"
			stmnt.execute("CREATE TABLE IF NOT EXISTS AUTHORITIES (USERNAME varchar(30), AUTHORITY varchar(30))");
			stmnt.close();
			conn.close();
		} catch (SQLException e) {
			System.out.println("Connection failed.");
			e.printStackTrace();
		}
		
	}

	public static void main(String[] args) {
		SpringApplication.run(DoConnectCapstoneProjectApplication.class, args);
	}

}
