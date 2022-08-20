import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-signup',
  templateUrl: './event-signup.component.html',
  styleUrls: ['./event-signup.component.css']
})
export class EventSignupComponent implements OnInit {

  signUpMail: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit():void {

    console.log("Form gesendet...");
    
  }

  firstName:string = "Lars";

}
