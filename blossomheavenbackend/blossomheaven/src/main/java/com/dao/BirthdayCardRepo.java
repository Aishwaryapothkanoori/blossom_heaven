package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.model.BirthdayCard;


public interface BirthdayCardRepo extends JpaRepository<BirthdayCard,Integer> {

}
