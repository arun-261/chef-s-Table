import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-add-restuarant',
  templateUrl: './add-restuarant.component.html',
  styleUrls: ['./add-restuarant.component.css']
})
export class AddRestuarantComponent implements OnInit {

  id: any;
  neighbourhood: any;
  photograph: any;
  Sunday: any;
  Monday: any;
  Tuesday: any;
  Wednesday: any;
  Thursday: any;
  Friday: any;
  Saturday: any;
  rname: any;
  address: any;
  cusine: any;
  rvname: any;
  date: any;
  rating: any;
  comments: any;
  lat: any;
  log: any;


  constructor(private api: ApiService, private router: Router) { }
  ngOnInit(): void {

  }
  addProduct() {
    let newRestuarant = {
      id: this.id,
      name: this.rname,
      neighborhood: this.neighbourhood,
      photograph: this.photograph,
      address: this.address,
      latlng: {
        lat: this.lat,
        lng: this.log
      },
      cuisine_type: this.cusine,
      operating_hours: {
        Monday: this.Monday,
        Tuesday: this.Tuesday,
        Wednesday: this.Wednesday,
        Thursday: this.Thursday,
        Friday: this.Friday,
        Saturday: this.Saturday,
        Sunday: this.Sunday
      },
      reviews: [
        {
          name: this.rvname,
          date: this.date,
          rating: this.rating,
          comments: this.comments
        }
      ]
    }
    console.log(newRestuarant);
    this.api.addRestuarant(newRestuarant)
      .subscribe(() => {
        alert("restaurant details added successfully!!")
        this.router.navigateByUrl('')
      })


  }
  changeId(event: any) {
    console.log(event.target.value);

  }
}
