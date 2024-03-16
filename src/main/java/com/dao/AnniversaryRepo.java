package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.model.Anniversary;



public interface AnniversaryRepo extends JpaRepository<Anniversary,Integer>{

}
