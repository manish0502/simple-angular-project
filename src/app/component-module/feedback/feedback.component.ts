import { Component, OnInit } from '@angular/core';
import { FormGroup ,Validators ,FormControl , FormBuilder} from '@angular/forms';
import { ProductListService } from '../../services/product-list.service'
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {


  contactForm:FormGroup ;
  datasaved = false;
  massage: string;

  constructor(private formbuilder: FormBuilder, private productService:ProductListService) { }

  ngOnInit(): void {
    this.setFormState();

  }

  setFormState(): void {
    this.contactForm = this.formbuilder.group({
      Name: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      phone:['', [Validators.required]],
      Message: ['', [Validators.required]],
    });
  }


  postData(contactForm:any){

    let newContact={

      id: Math.floor(100000 + Math.random() * 900000),
      Name:contactForm.value.Name,
      Email:contactForm.value.Email,
      phone:contactForm.value.Contact,
      Message:contactForm.value.Message

    }
   this.createContact(newContact);
    console.log('form is submitted successfully')

  }
  createContact(newContact:any){
    debugger
    this.productService.contactUs(newContact).subscribe(
      ()=>{
        this.datasaved = true;
        this.massage = "User Created";
       this.contactForm.reset();
      }
    )

  }

}
