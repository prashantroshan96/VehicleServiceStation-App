import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: "",
    component: WelcomeComponent
  },
  {
    path: "customer",
    loadChildren: () => import('./customer/customer.module').then(x => x.CustomerModule)
  },
  {
    path: "vehicle",
    loadChildren: () => import('./vehicle/vehicle.module').then(x => x.VehicleModule)
  },
  {
    path: "jobCard",
    loadChildren: () => import('./job-card/job-card.module').then(x => x.JobCardModule)
  },
  {
    path: "employee",
    loadChildren: () => import('./employee/employee.module').then(x => x.EmployeeModule)
  },
  {
    path: "service",
    loadChildren: () => import('./service/service.module').then(x => x.ServiceModule)
  },
  {
    path: "bill",
    loadChildren: () => import('./bill/bill.module').then(x => x.BillModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
