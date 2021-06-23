import { FeedbackComponent } from './feedback/feedback.component';
import { DataListComponent } from './data-list/data-list.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '' , redirectTo:'/cmodule/login' , pathMatch:'full'},
  { path: 'login', component:LoginComponent},
  { path: 'datalist', component:DataListComponent},
  { path: 'feedback', component: FeedbackComponent },
  { path:'productlist' , component:ProductlistComponent},
  { path:'**' , component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentModuleRoutingModule { }
