import { Injectable, EventEmitter  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isUserLoggedIn: boolean = false;
  isLoggedIn: EventEmitter<boolean> = new EventEmitter<boolean>();
 
  private baseUrl = 'http://localhost:8080';
  // private apiUrl="http://localhost:8080";
  private userTokenKey = 'user_token';
  constructor(private http: HttpClient) {
    this.isUserLoggedIn = !!localStorage.getItem('token');
  }
  loginSuccess(isAdmin: boolean) {
    this.isUserLoggedIn = true;
    this.isLoggedIn.emit(true);
    localStorage.setItem(this.userTokenKey,'user_token');
  }

  logout() {
    this.isUserLoggedIn = false;
    this.isLoggedIn.emit(false);
    localStorage.removeItem(this.userTokenKey);
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
  deletecustomerByName(name:string):Observable<any>{
    const url = `http://localhost:8080/delete/${name}`
    return this.http.delete(url);
  }
  registerUser(data: any) {
    return this.http.post(`${this.baseUrl}/custregister`,data);
   }
   getAllCountries(){
    return this.http.get("https://restcountries.com/v3.1/all");
   }
   getAllFeedbacks(): Observable<any> {
    return this.http.get(`${this.baseUrl}/feedbacks`);
  }
  isAuthenticated(): boolean {
    // Logic to check if the user is authenticated
    // For example, you could check if there is a token in localStorage
    return !!localStorage.getItem(this.userTokenKey);
  }
  isAdmin():boolean{
    return localStorage.getItem(this.userTokenKey)==='admin_token';
  }
 
}
