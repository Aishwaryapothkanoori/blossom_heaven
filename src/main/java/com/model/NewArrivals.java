package com.model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class NewArrivals {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
private int id;
private String image;
private String description;
private int price;
public NewArrivals(){
	
}
public NewArrivals(int id, String image, String description, int price) {
	super();
	this.id = id;
	this.image = image;
	this.description = description;
	this.price = price;
}
public String getImage() {
	return image;
}
public void setImage(String image) {
	this.image = image;
}
public String getDescription() {
	return description;
}
public void setDescription(String description) {
	this.description = description;
}
public float getPrice() {
	return price;
}
public void setPrice(int price) {
	this.price = price;
}
@Override
public String toString() {
	return "BirthdayCard [id=" + id + ", image=" + image + ", description=" + description + ", price=" + price + "]";
}

}
