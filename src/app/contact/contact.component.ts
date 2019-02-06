import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  firstName: string;
  constructor() {
    console.log("konstruktor")
  };

  ngOnInit() {
    console.log("onInit")
  }

  onSubmit = function () {
    console.log(this.firstName)
  }



}
