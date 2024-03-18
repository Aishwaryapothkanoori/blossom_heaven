package com.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.model.CustomerRegis;
@Service
public class CustomerDao {
	@Autowired //dependency injection
	private CustomerRepo custRepo;
	
	public void register(CustomerRegis cust){
		custRepo.save(cust);
	}
	public CustomerRegis findByEmail(String email) {
	        return custRepo.findByEmail(email);
	}
	public List<CustomerRegis> getAllCustomers() {
	        return custRepo.findAll();
	}
	public CustomerRegis deleteById(int id) {
		Optional<CustomerRegis> optionalHotel = custRepo.findById(id);

		if (optionalHotel.isPresent()) {
			CustomerRegis customer = optionalHotel.get();
			custRepo.delete(customer);
			return customer;
		} else {
			return null;
		}
	}
	public CustomerRegis updateByName(String name, CustomerRegis updatedCustomer) {
        Optional<CustomerRegis> optionalcustomer = custRepo.findByName(name);
        return custRepo.save(updatedCustomer);
    }
	 public CustomerRegis login(String email, String password) {
	        return custRepo.findByEmailAndPassword(email, password);
	    }
	
}
