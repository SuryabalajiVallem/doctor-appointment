import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Router } from '@angular/router';
export interface City {
  name: string;
}
export interface Clinic {
  city:string
  clinicName: string;
}

@Component({
  selector: 'app-doctor-search',
  templateUrl: './doctor-search.component.html',
  styleUrls: ['./doctor-search.component.css']
})
export class DoctorSearchComponent implements OnInit {

  cityCtrl = new FormControl();
  clinicCtrl =  new FormControl();
  filteredOptions: Observable<City[]>;
  filteredClinicOptions:Observable<Clinic[]>;
  isSearchInValid:boolean;
  clinicOptions : Clinic[] = [
    {
      city: 'Hyderabad',
      clinicName: 'Appollo',
    },
    {
      city: 'Hyderabad',
      clinicName: 'Sri Sai Clinic',
    },
    {
      city:'Chennai',
      clinicName: 'Dr Prasad Clinic'
    },
    {
      city: 'Hyderabad',
      clinicName: 'Lucid Clinic'
    },
    {
      city:'Chennai',
      clinicName: 'Niims'
    }, 
    {
      city: 'Hyderabad',
      clinicName: 'Prathima Clinic'
    },
    {
      city: 'Bangalore',
      clinicName: 'GOVT Clinic'
    }
  ]
 
  
  cities:City[] = [
    {
      name: 'Hyderabad',
    },
    {
      name: 'Bangalore',
    },
    {
      name: 'Culcutta'
    },
    {
      name: 'Mumbai'
    },
    {
      name: 'Delhi'
    }, 
    {
      name: 'Ranchi'
    },
    {
      name: 'Chennai'
    }
  ];
  filteredClinics = []
  constructor(private router: Router,) {
   
   }
   displayFn(city?: City): string | undefined {
    return city ? city.name : undefined;
  }
  displayClinicFn(clinic?: Clinic): string | undefined {
    return clinic ? clinic.clinicName : undefined;
  }

  private _filter(name: string): City[] {
    const filterValue = name.toLowerCase();
    this.filteredClinics = this.clinicOptions.filter((clinic)=>clinic.city === name)
    return this.cities.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
  private _filterClinic(name: string): Clinic[] {
    const filterValue = name.toLowerCase();

    return this.clinicOptions.filter(option => option.clinicName.toLowerCase().indexOf(filterValue) === 0);
  }



  ngOnInit() {
    this.filteredOptions = this.cityCtrl.valueChanges
    .pipe(
      startWith<string | City>(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this._filter(name) : this.cities.slice())
    );
    this.filteredClinics = this.clinicOptions
    this.filteredClinicOptions = this.clinicCtrl.valueChanges
      .pipe(
        startWith<string | Clinic>(''),
        map(value => typeof value === 'string' ? value : value.clinicName),
        map(name => name ? this._filterClinic(name) : this.clinicOptions.slice())
      );
      console.log('filteredOptions',this.filteredClinicOptions)
  }
  searchDoctor() {
    if(!this.clinicCtrl.value || !this.cityCtrl.value){
      this.isSearchInValid = true
    }else{
      this.router.navigate(['/doctors/doctor-list']);
    }
    
}
}
