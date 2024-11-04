import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { BookingComponent } from './booking/booking.component';
import { TravelComponent } from './travel/travel.component';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { breadcrumb: 'Home' } },
  { path: 'about', component: AboutComponent, data: { breadcrumb: 'About Us' } },
  { path: 'about-us', redirectTo: 'about', pathMatch: 'full' }, 
  { path: 'contact', component: ContactComponent, data: { breadcrumb: 'Contact' } },
  { path: 'register', component: RegisterComponent, data: { breadcrumb: 'Register'}},
  { path: 'booking', component: BookingComponent, data: { breadcrumb: 'Booking' } },
  { path: 'travel', component: TravelComponent, data: { breadcrumb: 'Travel' } },
  { path: 'city/:id', component: CityDetailComponent },
  { path: '**', component: ErrorComponent, data: { breadcrumb: 'Error' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

