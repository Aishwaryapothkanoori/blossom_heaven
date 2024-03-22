package com.dao;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.model.Parties;
@Service
public class PartiesDao {
	@Autowired //dependency injection
	private PartiesRepo partiesRepo;
	
	public void register(Parties party){
		partiesRepo.save(party);
	}
	public List<Parties> getAllParties(){
		return partiesRepo.findAll();
	}
	public Optional<Parties> getPartiesById(int id){
		return partiesRepo.findById(id);
	}
}
