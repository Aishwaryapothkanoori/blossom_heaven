package com.model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity

public class CuratedCollection {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;  
    private String image;
    private String name;
    public CuratedCollection(){
    	
    }
	public CuratedCollection(int id, String image,String name) {
		super();
		this.id = id;
		this.image = image;
		this.name=name;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	@Override
	public String toString() {
		return "CuratedCollection [id=" + id + ", image=" + image + ", name=" + name + "]";
	}
	

	

}
