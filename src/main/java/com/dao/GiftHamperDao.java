package com.dao;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.GiftHamper;



@Service
public class GiftHamperDao {
	@Autowired //dependency injection
	private GiftHamperRepo giftRepo;
	
	public void register(GiftHamper gift){
		giftRepo.save(gift);
	}
	public List<GiftHamper> getAllGiftHamper(){
		return giftRepo.findAll();
	}
	public Optional<GiftHamper> getGiftHamperById(int id){
		return giftRepo.findById(id);
	}
}
