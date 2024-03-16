package com.dao;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.WeddingFlowers;



@Service
public class WeddingFlowersDao {
	@Autowired //dependency injection
	private WeddingFlowersRepo weddingRepo;
	
	public void register(WeddingFlowers party){
		weddingRepo.save(party);
	}
	public List<WeddingFlowers> getAllWeddingFlowers(){
		return weddingRepo.findAll();
	}
	public Optional<WeddingFlowers> getWeddingFlowersById(int id){
		return weddingRepo.findById(id);
	}
}
