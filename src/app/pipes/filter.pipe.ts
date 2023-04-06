import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(restuarantsList: any[],filterString:string, propName:string): any[] {
    const result:any=[]
    if(!restuarantsList || filterString=='' || propName==''){
      return restuarantsList
    }
   restuarantsList.forEach((restaurant:any)=>{
    if(restaurant.propName.trim().toLowerCase().includes(filterString.toLowerCase)){
      result.push(restaurant)
      console.log(result);
      
    }
   })
   return result
  }

}
