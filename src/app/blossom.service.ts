import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BlossomService {

  constructor(private httpclient : HttpClient) { }

  getAllCurratedCollections():any{
    return this.httpclient.get("http://localhost:8080/showAllCollections");

  }
  getAllBirthdayCard():any{
    return this.httpclient.get("http://localhost:8080/showAllBirthdayCards");
  }
  getAllParties():any{
    return this.httpclient.get("http://localhost:8080/showAllParties");
  }
  getAllAniversary():any{
    return this.httpclient.get("http://localhost:8080/showAllAniversary");
  }
  getAllWeddingFlowers():any{
    return this.httpclient.get(" http://localhost:8080/showAllWeddingFlowers");
  }
  getAllGiftHamper():any{
    return this.httpclient.get("http://localhost:8080/showAllGiftHamper");
  }
  getAllNewArrivals():any{
    return this.httpclient.get("http://localhost:8080/showAllNewArrivals");
  }
 
}
