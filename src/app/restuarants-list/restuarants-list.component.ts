import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-restuarants-list',
  templateUrl: './restuarants-list.component.html',
  styleUrls: ['./restuarants-list.component.css']
})
export class RestuarantsListComponent implements OnInit {
  // property
  restname="List Of Restaurants"
  restuarantList: any = []

  constructor(private apiservice: ApiService) { }
  ngOnInit(): void {
    // apiservice all - toget all restuarant list- asynchronous function call

    this.apiservice.getRestuarantList()
      .subscribe((result) => {
        this.restuarantList = result
        console.log(this.restuarantList);

      })


  }
}

