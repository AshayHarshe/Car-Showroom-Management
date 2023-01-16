import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingComponent } from './billing/billing.component';
import { CarsComponent } from './cars/cars.component';
import { PartsComponent } from './parts/parts.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  {
    path:'cars',
    component:CarsComponent
  },
  {
    path:'parts',
    component:PartsComponent
  },
  {
    path:'staff',
    component:StaffComponent
  },
  {
    path:'bill',
    component:BillingComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

