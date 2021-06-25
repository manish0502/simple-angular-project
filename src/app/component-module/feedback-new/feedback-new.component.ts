import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'
import { Contact } from '../../models/contact'
import { ProductListService } from '../../services/product-list.service'

@Component({
  selector: 'app-feedback-new',
  templateUrl: './feedback-new.component.html',
  styleUrls: ['./feedback-new.component.css']
})
export class FeedbackNewComponent implements OnInit {

  datasaved = false;
  massage: string;

  constructor(private feedbackService:ProductListService) { }

  ngOnInit(): void {
  }

  userFeedback(e:any,feedbackForm : NgForm){

    e.preventDefault();
    console.log(feedbackForm.value);

    let newContact={

      id: Math.floor(100000 + Math.random() * 900000),
      name:feedbackForm.value.name,
      email:feedbackForm.value.email,
      contact:feedbackForm.value.contact,
      message:feedbackForm.value.message

    }

    this.feedbackService.contactUs(newContact).subscribe((data) => {
      this.datasaved = true;
      this.massage = "feedback submitted";
      feedbackForm.reset();
      console.log(data)
    })

  }
}
