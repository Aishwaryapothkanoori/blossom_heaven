package com.ts.blossomheaven;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dao.CustomerDao;
import com.model.CustomerRegis;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CustomerController {
	@Autowired
	private CustomerDao custDao;
	
	@PostMapping("customerregister")
	public void register(@RequestBody CustomerRegis cust){
		
		System.out.println("data received: "+cust);
		custDao.register(cust);
	}
	@RequestMapping("showAllCustomers")
	public List<CustomerRegis> showAllCustomers(){
		return custDao.getAllCustomers();
    }
	
	@RequestMapping("/findByEmail")
	public CustomerRegis findByEmail(@RequestParam String email){
		return custDao.findByEmail(email);
	}
	
	@PutMapping("update/{name}")
    public CustomerRegis updateByName(@PathVariable String name, @RequestBody CustomerRegis updatedHotel) {
        return custDao.updateByName(name, updatedHotel);
    }
	@DeleteMapping("delete/{id}")
	public CustomerRegis deleteById(@PathVariable("id") int id) {
	    System.out.println("data received:" +id);
	    return custDao.deleteById(id);
	}
	@GetMapping("/login/{email}/{password}")
	public CustomerRegis login(@PathVariable("email") String email,@PathVariable("password") String password){
		return custDao.login(email,password);
	}
}
