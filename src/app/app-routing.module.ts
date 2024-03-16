import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { PartiesComponent } from './parties/parties.component';
import { AniversaryComponent } from './aniversary/aniversary.component';
import { SameDayComponent } from './same-day/same-day.component';
import { WeddingFlowersComponent } from './wedding-flowers/wedding-flowers.component';
import { GiftHamperComponent } from './gift-hamper/gift-hamper.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path:'about',component:AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path:'birthday',component:BirthdayComponent},
  { path:'parties',component:PartiesComponent},
  { path:'aniversary',component:AniversaryComponent},
  { path:'same-day',component:SameDayComponent},
  { path:'wedding-flowers',component:WeddingFlowersComponent},
  { path:'gift-hamper',component:GiftHamperComponent},
  { path:'new-arrivals',component:NewArrivalsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
