import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
export interface Booking {
    doctorInfo: DoctorInfo;
    patientInfo: PatientInfo;
    bookingInfo:BookingInfo
}
export interface DoctorInfo {
   doctorId:string,
   doctorName:string,
   speciality:string,
}
export interface PatientInfo {
    patientName:string,
    contactNumber:string,
    Age:string,
 }
 export interface BookingInfo {
    time:string
    status:string
 }
@Injectable({
    providedIn: 'root'
})

export class BookingService {
    savedBooking : Booking[] = [];
     
    constructor(private snackBar: MatSnackBar) { }
    addBooking(bookingInfo: Booking) {
        debugger
        this.savedBooking.push(bookingInfo)
        console.log(bookingInfo,this.savedBooking)
    }
    getBookings() {
        return this.savedBooking
    }
    getBookingByDoctorId(id:string){
        return this.savedBooking.filter((booking)=>booking.doctorInfo && booking.doctorInfo.doctorId === id)
    }
}

