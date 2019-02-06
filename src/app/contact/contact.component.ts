import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  firstName: string;
  constructor() {
   
  };

  ngOnInit() {
    
  }

  onSubmit = function () {
    console.log(this.firstName)
  }



}
