import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ReviewsComponent } from './reviews/reviews.component';

import { PrevDirective } from './prev.directive';
import { NextDirective } from './next.directive';
import { CustomerStoriesComponent } from './customer-stories/customer-stories.component';
import { MatIconModule } from '@angular/material/icon';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { BirthdayComponent } from './birthday/birthday.component';
import { PartiesComponent } from './parties/parties.component';
import { AniversaryComponent } from './aniversary/aniversary.component';
import { SameDayComponent } from './same-day/same-day.component';
import { WeddingFlowersComponent } from './wedding-flowers/wedding-flowers.component';
import { GiftHamperComponent } from './gift-hamper/gift-hamper.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ReviewsComponent,
    
    PrevDirective,
    NextDirective,
    CustomerStoriesComponent,
    ImageSliderComponent,
    AboutComponent,
    BirthdayComponent,
    PartiesComponent,
    AniversaryComponent,
    SameDayComponent,
    WeddingFlowersComponent,
    GiftHamperComponent,
    NewArrivalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    SlickCarouselModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
