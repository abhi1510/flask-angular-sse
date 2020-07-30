import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ControllerComponent } from './controller/controller.component';
import { MonitorComponent } from './monitor/monitor.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'controller', component: ControllerComponent },
  { path: 'monitor', component: MonitorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
