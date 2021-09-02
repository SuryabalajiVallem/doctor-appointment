import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from '../shared/layout/layout.component'
import {DoctorSearchComponent} from './doctor-search/doctor-search/doctor-search.component';
import {DoctorListComponent} from './doctor-list/doctor-list/doctor-list.component';
import {DoctorPreviewComponent} from './doctor-preview/doctor-preview.component'

const routes: Routes = [
    {
      path: '',
      component: LayoutComponent,
      children: [
        { path: 'doctor-search', component: DoctorSearchComponent },
        { path: 'doctor-list', component: DoctorListComponent },
        { path: 'doctor-preview/:dId', component: DoctorPreviewComponent }
      ]
    }
  ];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class DoctorsRoutingModule { }
