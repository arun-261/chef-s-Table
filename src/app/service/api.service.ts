import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private api: HttpClient) { }

  // userdefined function
  //1. to get all restaurant list api call - http://localhost:3000/restaurants
  getRestuarantList() {
    return this.api.get('http://localhost:3000/restaurants')
  }
  // 2. to get a single restaurant details from api
  vieRestuarant(restId: any) {
    return this.api.get('http://localhost:3000/restaurants/' + restId)

  }
  //3. to add new restaurant details
  addRestuarant(newRestuarant:any){
   return this.api.post('http://localhost:3000/restaurants/',newRestuarant)
  }
// 4. to update a particular restaurant
updateRestaurant(restId:any , updatedRestBody:any){
  return this.api.put('http://localhost:3000/restaurants/' + restId ,updatedRestBody )
}

// to delete particular restaurant
deleteRestaurant(restId:any){
  return this.api.delete('http://localhost:3000/restaurants/' + restId)
}
}
