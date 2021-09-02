import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  @ViewChild('theContainer',{static:false}) theContainer:ElementRef;
  defaultImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAKlBMVEXKysz9/f3////k5OXHx8nIyMrz8/P+/v7JycvV1dfGxsjDw8Xc3N3t7e1H7rm8AAACiElEQVR4nO2asW6EMBAFfTZw4Lv8/+8mxWHjdFEoZmG2iqwtZhSk+DkvpTbT8nx8Jpd5P123/GjHNd7yowvGgdZQQz60hhryoTW8neHU5rXkNqXup3Xrp/kVcDktfd5bm9JPv/rpFnE5PdvkbV4/M5XcTpe6n641x1teU/9g87buH/Jc2of8XKb21dccbzlpSITWUEM+tIa3Mzzcb7Zp/kwt/XSp++n8Crg8p3L1SV22DrfY/XQarrwBlw/fa5hAZD7UkA+toYZ8aA1/GfYHjZ+/nu2ho0z76bwdXkVqvOVnOrxKffXHqtJP34eXrYjLw827Pzgeb7GH18mAy9MN0pOGQGgNNeRDa6ghH/ofr4l1n9dwP+jHAZdr6j8O/zHuK8MjV8Dlw28zTCAyH2rIh9ZQQz60hrcz7E82ccp4Nvds7iV6IDIfasiH1lBDPrSGNveuNjb3iIHIfKghH1pDDfnQGtrcO60yB1m2uUcMROZDDfnQGmrIh9bwdobD/SBGGc/mns09PrSGGvKhNdSQD62hzb3TKnOQZZt7xEBkPtSQD62hhnxoDW3uXW1s7hEDkflQQz60hhryoTW0uXdaZQ6ybHOPGIjMhxryoTXUkA+t4e0Mh/tBjDKezT2be3xoDTXkQ2uoIR9aQ5t7p1XmIMs294iByHyoIR9aQw350Bra3Lva2NwjBiLzoYZ8aA015ENraHPvtMocZNnmHjEQmQ815ENrqCEfWsPbGQ73gxhlPJt7Nvf40BpqyIfWUEM+tIY2906rzEGWbe4RA5H5UEM+tIYa8qE1tLl3tbG5RwxE5kMN+dAaasiH1tDm3mmVOciyzT1iIDIfasiH1lBDPrSGGvKh/2b4DfYn7/HH4UO8AAAAAElFTkSuQmCC';
  doctorsList: Array<{ name: string,id:number,price:string,designation:string,address:string,description:string,rating:number,current_location:string}>=[
    {name:'Dr. Mark Addy' ,id:1,price:'1000',designation:'PRIMARY CARE DOCTOR',address:'Mount Sinai Doctors - East 34th Street 55 E 34th St, 1st Floor, New York, NY 10016',description:'Doctor was detailed and thorough: answered to all my questions, checked my history, gave good recommendations',rating:4,current_location:'In-network • 1199SEIU'},
    {name:'Dr. Joan Barry',id:2,price:'2000',designation:'GENERAL PHYSICIAN',address:'Mount Sinai Doctors - East 34th Street 55 E 34th St, 1st Floor, New York, NY 10016',description:'Doctor was detailed and thorough: answered to all my questions, checked my history, gave good recommendations',rating:4,current_location:'In-network • 1199SEIU'},
    {name:'Dr. Caroline Aherne',id:3,price:'3000',designation:'ENT SPECIALIST',address:'Mount Sinai Doctors - East 34th Street 55 E 34th St, 1st Floor, New York, NY 10016',description:'Doctor was detailed and thorough: answered to all my questions, checked my history, gave good recommendations',rating:4,current_location:'In-network • 1199SEIU'},
    {name:'Dr. Maggie Dirrane',id:4,price:'4000',designation:'CARDIOLOGIST',address:'Mount Sinai Doctors - East 34th Street 55 E 34th St, 1st Floor, New York, NY 10016',description:'Doctor was detailed and thorough: answered to all my questions, checked my history, gave good recommendations',rating:4,current_location:'In-network • 1199SEIU'},
    {name:'Dr.  Elsa Lanchester',id:5,price:'5000',designation:'  NEUROLOGIST',address:'Mount Sinai Doctors - East 34th Street 55 E 34th St, 1st Floor, New York, NY 10016',description:'Doctor was detailed and thorough: answered to all my questions, checked my history, gave good recommendations',rating:4,current_location:'In-network • 1199SEIU'},
    {name:'Dr.  Madeleine Carroll',id:6,price:'6000',designation:'DERMATOLOGIST',address:'Mount Sinai Doctors - East 34th Street 55 E 34th St, 1st Floor, New York, NY 10016',description:'Doctor was detailed and thorough: answered to all my questions, checked my history, gave good recommendations',rating:4,current_location:'In-network • 1199SEIU'},
    {name:'Dr. Mark Addy',id:7,price:'1000',designation:'PRIMARY CARE DOCTOR',address:'Mount Sinai Doctors - East 34th Street 55 E 34th St, 1st Floor, New York, NY 10016',description:'Doctor was detailed and thorough: answered to all my questions, checked my history, gave good recommendations',rating:4,current_location:'In-network • 1199SEIU'},
    {name:'Dr. Joan Barry',id:8,price:'2000',designation:'GENERAL PHYSICIAN',address:'Mount Sinai Doctors - East 34th Street 55 E 34th St, 1st Floor, New York, NY 10016',description:'Doctor was detailed and thorough: answered to all my questions, checked my history, gave good recommendations',rating:4,current_location:'In-network • 1199SEIU'},
    {name:'Dr. Caroline Aherne',id:9,price:'3000',designation:'ENT SPECIALIST',address:'Mount Sinai Doctors - East 34th Street 55 E 34th St, 1st Floor, New York, NY 10016',description:'Doctor was detailed and thorough: answered to all my questions, checked my history, gave good recommendations',rating:4,current_location:'In-network • 1199SEIU'},
    {name:'Dr. Maggie Dirrane',id:10,price:'4000',designation:'CARDIOLOGIST',address:'Mount Sinai Doctors - East 34th Street 55 E 34th St, 1st Floor, New York, NY 10016',description:'Doctor was detailed and thorough: answered to all my questions, checked my history, gave good recommendations',rating:4,current_location:'In-network • 1199SEIU'},
    {name:'Dr.  Elsa Lanchester',id:11,price:'5000',designation:'NEUROLOGIST',address:'Mount Sinai Doctors - East 34th Street 55 E 34th St, 1st Floor, New York, NY 10016',description:'Doctor was detailed and thorough: answered to all my questions, checked my history, gave good recommendations',rating:4,current_location:'In-network • 1199SEIU'},
    {name:'Dr.  Madeleine Carroll',id:12,price:'6000',designation:'DERMATOLOGIST',address:'Mount Sinai Doctors - East 34th Street 55 E 34th St, 1st Floor, New York, NY 10016',description:'Doctor was detailed and thorough: answered to all my questions, checked my history, gave good recommendations',rating:4,current_location:'In-network • 1199SEIU'},
  ]
  columnNum = 4; //initial count
  tileSize = 10; //one tile should have this width
  sum=15
  // DoctorImg = this.cardBackgroundName();
  // cardBackgroundName(){
  //   let random = Math.floor(Math.random() * 25 + 1);
  //   return `${random}.png`;
  // };
  constructor(private router: Router) { }
  imagePath(imageIndex){
    return `/assets/doctors/${imageIndex+1}.png`
  }
  setColNum(){
    let width = this.theContainer.nativeElement.offsetWidth;
    this.columnNum = Math.trunc(width/this.tileSize);
  }
  ngOnInit() {
    this.appendItems(1,this.sum)
  }
  appendItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'push');
  }
  addItems(startIndex, endIndex, _method) {
    let index = 0
    for(let slide of this.doctorsList){
      index++
      slide['doct_img'] = `/assets/doctors/${index}.png`
    }
  }
  previewDoctor(doctorInfo){
    let docInfo = JSON.stringify(doctorInfo)
    console.log('doctorInfo',docInfo)
    localStorage.setItem('selectedDoctorInfo',docInfo)
    this.router.navigate([`/doctors/doctor-preview/${doctorInfo.id}`]);
  }

}
