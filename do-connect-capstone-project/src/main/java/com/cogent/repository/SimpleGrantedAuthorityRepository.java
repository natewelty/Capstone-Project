package com.cogent.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cogent.entity.SimpleGrantedAuthority;

public interface SimpleGrantedAuthorityRepository extends JpaRepository<SimpleGrantedAuthority,Integer>{

}
