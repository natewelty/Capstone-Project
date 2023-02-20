package com.cogent.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cogent.entity.CustomUser;

public interface UserRepository extends JpaRepository<CustomUser,Integer> {
    Optional<CustomUser> findByUsername(String username);
    Optional<CustomUser> findByName(String name);
}