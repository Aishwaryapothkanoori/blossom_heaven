package com.dao;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Anniversary;

@Service
public class AnniversaryDao {
	@Autowired //dependency injection
	private AnniversaryRepo anniRepo;
	
	public void register(Anniversary ani){
		anniRepo.save(ani);
	}
	public List<Anniversary> getAllAniversary(){
		return anniRepo.findAll();
	}
	public Optional<Anniversary> getAniversaryById(int id){
		return anniRepo.findById(id);
	}
}
