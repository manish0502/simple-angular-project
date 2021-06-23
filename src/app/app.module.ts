import { ProductListService } from './services/product-list.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  { ComponentModuleModule } from './component-module/component-module.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentModuleModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
