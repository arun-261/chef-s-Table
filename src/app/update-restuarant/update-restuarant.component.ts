import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-update-restuarant',
  templateUrl: './update-restuarant.component.html',
  styleUrls: ['./update-restuarant.component.css']
})
export class UpdateRestuarantComponent implements OnInit {

  restId: any;
  restDetails: any;
  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService,private router:Router) { }
  ngOnInit(): void {
    //1. get restaurant id to be updated

    this.activatedRoute.params.subscribe((result: any) => {
      this.restId = result['id']
      console.log(this.restId);

    })
    // 2. fetch the details of restaurant by their corresponding id
    this.apiService.vieRestuarant(this.restId).subscribe((result) => {
      this.restDetails = result
      console.log(this.restDetails);

    })
  }
  // update Restaurant
  updateRestaurant(form:any){
    console.log(form.value);
    let updateRest = {
      id: form.value.id,
      name: form.value.name,
      neighborhood: form.value.neighbourhood,
      photograph: form.value.photograph,
      address: form.value.address,
      latlng: {
        lat: form.value.lat,
        lng: form.value.log
      },
      cuisine_type: form.value.cusine,
      operating_hours: {
        Monday: form.value.Monday,
        Tuesday: form.value.Tuesday,
        Wednesday: form.value.Wednesday,
        Thursday: form.value.Thursday,
        Friday: form.value.Friday,
        Saturday: form.value.Saturday,
        Sunday: form.value.Sunday
      },
      reviews: [
        {
          name: form.value.rvname,
          date: form.value.date,
          rating: form.value.rating,
          comments: form.value.comments
        }
      ]
    }


    this.apiService.updateRestaurant(this.restId,updateRest)
    .subscribe((data)=>{
      this.router.navigateByUrl('')
      alert('successfully updated')
    })
    
  }

}
