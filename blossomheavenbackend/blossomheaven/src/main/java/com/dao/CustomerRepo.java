package com.dao;

import org.springframework.stereotype.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.model.CustomerRegis;



@Repository
public interface CustomerRepo extends JpaRepository<CustomerRegis,Integer>{
	 CustomerRegis findByEmail(String email);
	 Optional<CustomerRegis> findByName(String name);
	 CustomerRegis findByEmailAndPassword(String email, String password);
}
