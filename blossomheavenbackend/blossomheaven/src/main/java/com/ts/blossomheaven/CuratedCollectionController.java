package com.ts.blossomheaven;



import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.dao.AnniversaryDao;
import com.dao.BirthdayCardDao;
import com.dao.CurratedCollectionDao;
import com.dao.GiftHamperDao;
import com.dao.NewArrivalsDao;
import com.dao.PartiesDao;
import com.dao.WeddingFlowersDao;
import com.model.Anniversary;
import com.model.BirthdayCard;
import com.model.CuratedCollection;
import com.model.GiftHamper;
import com.model.NewArrivals;
import com.model.Parties;
import com.model.WeddingFlowers;
@CrossOrigin(origins="*")

@RestController

public class CuratedCollectionController {
	@Autowired
	private CurratedCollectionDao collectionDao;
	@Autowired
	private BirthdayCardDao birthdayDao;
	@Autowired
	private PartiesDao partyDao;
	@Autowired
	private AnniversaryDao anniDao;
	@Autowired
	private WeddingFlowersDao weddingDao;
	@Autowired
	private GiftHamperDao giftDao;
	@Autowired
	private NewArrivalsDao arrivalDao;
	
	
	@PostMapping("register")
	public void register(@RequestBody CuratedCollection collection){
		System.out.println("data received: "+collection);
		collectionDao.register(collection);
	}
	@RequestMapping("showAllCollections")
	public List<CuratedCollection> showAllCollections(){
		return collectionDao.getAllCollections();
	}
	@PostMapping("birthdayregister")
	public void birthdayRegister(@RequestBody BirthdayCard birthdayCard){
		System.out.println("data received: "+birthdayCard);
		birthdayDao.register(birthdayCard);
	}
	@RequestMapping("showAllBirthdayCards")
	public List<BirthdayCard> showAllBirthdayCards(){
		return birthdayDao.getAllBirthdayCards();
	}
	@PostMapping("partyregister")
	public void partyRegister(@RequestBody Parties party){
		System.out.println("data received: "+party);
		partyDao.register(party);
	}
	@RequestMapping("showAllParties")
	public List<Parties> showAllParties(){
		return partyDao.getAllParties();
	}
	@PostMapping("anniversaryregister")
	public void anniversaryRegister(@RequestBody Anniversary anni){
		System.out.println("data received: "+anni);
		anniDao.register(anni);
	}
	@RequestMapping("showAllAniversary")
	public List<Anniversary> showAllAniversary(){
		return anniDao.getAllAniversary();
	}
	@PostMapping("weddingregister")
	public void weddingRegister(@RequestBody WeddingFlowers wed){
		System.out.println("data received: "+wed);
		weddingDao.register(wed);
	}
	@RequestMapping("showAllWeddingFlowers")
	public List<WeddingFlowers> showAllWeddingFlowers(){
		return weddingDao.getAllWeddingFlowers();
	}
	@PostMapping("giftHamperregister")
	public void giftHamperRegister(@RequestBody GiftHamper gif){
		System.out.println("data received: "+gif);
		giftDao.register(gif);
	}
	@RequestMapping("showAllGiftHamper")
	public List<GiftHamper> showAllGiftHamper(){
		return giftDao.getAllGiftHamper();
	}
	@PostMapping("newArrivalregister")
	public void newArrivalRegister(@RequestBody NewArrivals arri){
		System.out.println("data received: "+arri);
		arrivalDao.register(arri);
	}
	@RequestMapping("showAllNewArrivals")
	public List<NewArrivals> showAllnewArrivals(){
		return arrivalDao.getAllNewArrivals();
	}
	
}
