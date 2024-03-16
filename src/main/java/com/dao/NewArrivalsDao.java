package com.dao;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.NewArrivals;

@Service
public class NewArrivalsDao {
	@Autowired //dependency injection
	private NewArrivalsRepo arrivalRepo;
	
	
	public void register(NewArrivals arrival){
		arrivalRepo.save(arrival);
	}
	public List<NewArrivals> getAllNewArrivals(){
		return arrivalRepo.findAll();
	}
	public Optional<NewArrivals> getNewArrivalsById(int id){
		return arrivalRepo.findById(id);
	}
}
