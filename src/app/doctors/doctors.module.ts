import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorSearchComponent } from './doctor-search/doctor-search/doctor-search.component';
import {DoctorListComponent} from './doctor-list/doctor-list/doctor-list.component'
import {DoctorsRoutingModule} from './doctors-routings.module'
import { SharedModule } from '../shared/shared.module';
import {MatGridListModule} from '@angular/material';
import { DoctorPreviewComponent } from './doctor-preview/doctor-preview.component';

@NgModule({
  declarations: [DoctorSearchComponent,DoctorListComponent, DoctorPreviewComponent],
  imports: [
    CommonModule,
    DoctorsRoutingModule,
    SharedModule,
    MatGridListModule,
  ]
})
export class DoctorsModule { }
