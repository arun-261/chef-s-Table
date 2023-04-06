import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-view-restuarant',
  templateUrl: './view-restuarant.component.html',
  styleUrls: ['./view-restuarant.component.css']
})
export class ViewRestuarantComponent implements OnInit{
restId:any;
restDetails:any;

 constructor(private activatedRoute:ActivatedRoute, private apiservice:ApiService){}

 ngOnInit(): void {
   this.activatedRoute.params.subscribe(result=>{
  // console.log(result['id']);
  this.restId=result['id']
    
   })

   this.apiservice.vieRestuarant(this.restId)
   .subscribe((result:any)=>{
      console.log(result);
      this.restDetails=result
      
   })
 }
}
