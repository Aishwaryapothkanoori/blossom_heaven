import { Router } from '@angular/router';
import { Component,OnInit} from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
interface Review {
  id: number;
  rating: number;
  name: string;
  email: string;
  review: string;
}
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{
  items: any[] = [];
  updateForm: FormGroup;
  selectedItem: any;
  showUpdateForm: boolean = false;

  // feedbackForm: FormGroup;
  // feedbacks: Review[] = [];
  // submitted = false;
  customers:any;

  constructor(private http: HttpClient, private formBuilder: FormBuilder,private loginService:LoginService,private router:Router) {
    this.updateForm = this.formBuilder.group({
      name: [''],
      email: [''],
      gender: [''],
      password: ['']
    });

  //   this.feedbackForm = this.formBuilder.group({
  //     rating: ['', Validators.required],
  //     name: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     review: ['', Validators.required]
  //   });
  }

  ngOnInit(): void {
    this.loadItems();
    // this.getFeedbacks();
    
  }

  loadItems() {
    this.http.get<any[]>('http://localhost:8080/showAllCustomers').subscribe(data => {
      this.items = data;
    });
  }

  deleteItem(name: string) {
    this.loginService.deletecustomerByName(name).subscribe(() => {
      console.log('Customer deleted successfully');
      this.loadItems(); 
    }, (error:any) => {
      console.error('Delete failed:', error);
    });
  }
  

  updateItem(item: any) {
    this.selectedItem = item;
    this.updateForm.setValue({
      name: item.name,
      email: item.email,
      gender: item.gender,
      password: item.password
    });
    this.showUpdateForm = true;
  }

  submitUpdate() {
    const updatedItem = {
      id: this.selectedItem.id,
      ...this.updateForm.value
    };

    this.http.put(`http://localhost:8080/update/${updatedItem.id}`, updatedItem).subscribe(() => {
      this.loadItems();
      this.showUpdateForm = false;
    }, error => {
      console.error('Update failed:', error);
    });
  }

  logout() {
    // Perform logout logic
    this.loginService.logout();
    // Redirect to the login page after logout
    this.router.navigate(['/login']);
  }

}
