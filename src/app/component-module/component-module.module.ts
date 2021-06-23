import { ProductListService } from './../services/product-list.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { ComponentModuleRoutingModule } from './component-module-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';
import { LoginComponent } from './login/login.component';

import { FeedbackComponent } from './feedback/feedback.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { DataListComponent } from './data-list/data-list.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
    LoginComponent,
    
    FeedbackComponent,
    PageNotFoundComponent,
    ProductlistComponent,
    DataListComponent
  ],
  imports: [
    CommonModule,
    ComponentModuleRoutingModule,
    FormsModule , 
    HttpClientModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([])
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
    LoginComponent,
    DataListComponent,
    
    FeedbackComponent,
    PageNotFoundComponent
  ],
  providers: [ProductListService],


})
export class ComponentModuleModule { }
