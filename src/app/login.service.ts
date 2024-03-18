import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isUserLoggedIn: boolean = false;
  private baseUrl = 'http://localhost:8080';
  // private apiUrl="http://localhost:8080";
  constructor(private http: HttpClient) {
    this.isUserLoggedIn=false;
  }

  setUserLoggedIn() {
    this.isUserLoggedIn = true;
  }

  getUserLoggedStatus():boolean {
    return this.isUserLoggedIn;
  }
  setUserLogout(){
    this.isUserLoggedIn=false;
  }
  registerCustomer(customerData:any):any{
    return this.http.post("http://localhost:8080/register",customerData);
  }
  getAllCustomers():any{
    return this.http.get("http://localhost:8080/showAllCustomers")
  }
  getCustomerByEmailAndPassword(email: string, password: string): any {
    // Assuming your backend expects email and password as query parameters
    return this.http.post(`${this.baseUrl}/login`, { email, password });
  }
  deletecustomer(id:any):any{
    const url = `http://localhost:8080/delete/${id}`
    return this.http.delete(url);
  }
  registerUser(data: any) {
    return this.http.post(`${this.baseUrl}/customerregister`,data);
   }
   getAllCountries(){
    return this.http.get("https://restcountries.com/v3.1/all");
   }
   getAllFeedbacks(): Observable<any> {
    return this.http.get(`${this.baseUrl}/feedbacks`);
  }
}
