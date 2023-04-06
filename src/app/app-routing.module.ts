import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestuarantComponent } from './add-restuarant/add-restuarant.component';
import { DeleteRestuarantComponent } from './delete-restuarant/delete-restuarant.component';
import { RestuarantsListComponent } from './restuarants-list/restuarants-list.component';
import { UpdateRestuarantComponent } from './update-restuarant/update-restuarant.component';
import { ViewRestuarantComponent } from './view-restuarant/view-restuarant.component';

const routes: Routes = [
  {
    path: '', component:RestuarantsListComponent
  },
  {
    path: 'view/:id', component:ViewRestuarantComponent
  },
  {
    path: 'add', component:AddRestuarantComponent
  },
  {
    path: 'delete/:id', component:DeleteRestuarantComponent
  },
  {
    path: 'update/:id', component:UpdateRestuarantComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
