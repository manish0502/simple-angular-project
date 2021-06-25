import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'
import { Login } from '../../models/login'
import { ProductListService } from '../../services/product-list.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {}
  loginform:NgForm

   public loginModel: Login
  constructor(private router: Router , private loginService:ProductListService) { }

  ngOnInit(): void {
  }
  
    
    

  

  loginUser(e:any,loginForm : NgForm){
   
   e.preventDefault();
    let newLogin={

          id: Math.floor(100000 + Math.random() * 900000),
          username:loginForm.value.username,
          password:loginForm.value.password, 
    
        }


      this.loginService.loginIn(newLogin).subscribe((data)=>{
        console.log(data)
      })
      loginForm.reset();
      this.router.navigate(['/datalist'])


  }

 

  

}
