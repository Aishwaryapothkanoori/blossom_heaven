package com.dao;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.BirthdayCard;
import com.model.CuratedCollection;
@Service
public class BirthdayCardDao {
	@Autowired //dependency injection
	private BirthdayCardRepo birthdayRepo;
	
	
	public void register(BirthdayCard birthday){
		birthdayRepo.save(birthday);
	}
	public List<BirthdayCard> getAllBirthdayCards(){
		return birthdayRepo.findAll();
	}
	public Optional<BirthdayCard> getBirthdayCardById(int id){
		return birthdayRepo.findById(id);
	}
}
