package com.dao;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.CuratedCollection;
@Service
public class CurratedCollectionDao {
	@Autowired //dependency injection
	private CuratedColnRepo collectionRepo;
	
	public void register(CuratedCollection collection){
		collectionRepo.save(collection);
	}
	public List<CuratedCollection> getAllCollections(){
		return collectionRepo.findAll();
	}
	public Optional<CuratedCollection> getCollectionById(int id){
		return collectionRepo.findById(id);
	}
}
