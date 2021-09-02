import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {FormControl,Validators, FormGroup} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import { DatePipe } from '@angular/common'
import { Booking, BookingService } from '../../core/services/booking.service'
export interface Disease {
  diseaseName: string;
}
@Component({
  selector: 'app-doctor-preview',
  templateUrl: './doctor-preview.component.html',
  styleUrls: ['./doctor-preview.component.css']
})

export class DoctorPreviewComponent implements OnInit {
  patientForm: FormGroup;
  stringifiedDoctorInfo =  localStorage.getItem('selectedDoctorInfo')
  doctorInfo = JSON.parse(this.stringifiedDoctorInfo)
  diseaseCtl = new FormControl();
  filteredOptions:Observable<Disease[]>;
  todayDate = new Date().toISOString().split('T')[0];
  latestDate = ''
  diseaseOptions : Disease[] = [
    {
      diseaseName: 'Fever',
    },
    {
      diseaseName: 'Headache',
    },
    {
      diseaseName: 'Cold & Caugh',
    },
    {
      diseaseName: 'ENT',
    },
    {
      diseaseName: 'Dentist',
    }, 
    {
      diseaseName: 'Skin Related',
    },
    {
      diseaseName: 'Heart Diseases',
    }
  ]
  slotSessions = [
    {time:'9.00 A.M'},
    {time:'9.20 A.M'},
    {time:'9.40 A.M'},
    {time:'10.00 A.M'},
    {time:'10.40 A.M'},
    {time:'11.00 A.M'},
    {time:'11.20 A.M'},
    {time:'11.40 A.M'},
    {time:'2.00 P.M'},
    {time:'2.20 P.M'},
    {time:'2.40 P.M'},
    {time:'3.00 P.M'},
    {time:'3.40 P.M'},
    {time:'4.00 P.M'},
    {time:'4.20 P.M'},
    {time:'4.40 P.M'},
  ]
 
  selectedBookingTime:''
  bookedAppointments = []
  isBookinsAvailable:boolean
  bookedAppointmentTimings :string [] = []
  displayedColumns: string[] = ['No', 'doctor_name', 'speciality' ,'patient_name', 'slot'];
  constructor(private bookingService: BookingService) {

  }

  ngOnInit() {
    this.filteredOptions = this.diseaseCtl.valueChanges
    
    .pipe(
      startWith<string | Disease>(''),
      map(value => typeof value === 'string' ? value : value.diseaseName),
      map(diseaseName => diseaseName ? this._filter(diseaseName) : this.diseaseOptions.slice())
    );
    this.bookedAppointments = this.bookingService.getBookingByDoctorId(this.doctorInfo.id)
    this.bookedAppointmentTimings = this.bookedAppointments.map((time)=>time.bookingInfo && time.bookingInfo.time)
    console.log(this.bookedAppointmentTimings,'bookedAppointmentTimings')
    if(this.bookedAppointmentTimings.length === (this.slotSessions.length)){
      this.isBookinsAvailable = false
    }else{
      this.isBookinsAvailable = true
    }
    this.createForm();
    // this.latestDate=this.datepipe.transform(this.todayDate, 'yyyy-MM-dd');
  }
  private createForm() {
    this.patientForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        contactNumber: new FormControl('', Validators.required),
        age: new FormControl('', Validators.required)
    });
}

  displayFn(disease?: Disease): string | undefined {
    return disease ? disease.diseaseName : undefined;
  }
  private _filter(diseaseName: string): Disease[] {
    const filterValue = diseaseName.toLowerCase();

    return this.diseaseOptions.filter(option => option.diseaseName.toLowerCase().indexOf(filterValue) === 0);
  }
  selectAppointMentTime(bookingTime){
    this.selectedBookingTime = bookingTime.time
  }
  bookAppointMent(){
    let payload : Booking = {
      patientInfo: {
        patientName: this.patientForm.get('name').value,
        contactNumber: this.patientForm.get('contactNumber').value,
        Age: this.patientForm.get('age').value,
      },
      doctorInfo:{
        doctorId:this.doctorInfo.id,
        doctorName:this.doctorInfo.name,
        speciality:this.doctorInfo.designation,
      },
      bookingInfo:{
        time:this.selectedBookingTime,
        status:'Booked'
      }
    }
    this.bookingService.addBooking(payload)
    this.bookedAppointments = this.bookingService.getBookingByDoctorId(this.doctorInfo.id)
    this.bookedAppointmentTimings = this.bookedAppointments.map((time)=>time.bookingInfo && time.bookingInfo.time)
  }

}
