import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openNav = function () {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  };

//function closeNav() {
//  document.getElementById("mySidenav").style.width = "0";
//  document.getElementById("main").style.marginLeft = "0";
//  document.body.style.backgroundColor = "white";
//}

// When the user scrolls the page, execute myFunction 
//window.onscroll = function () { myFunction() };

// Get the navbar
//var topnav = document.getElementById("topnav");

// Get the offset position of the navbar
//var sticky = topnav.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
//function myFunction() {
//  if (window.pageYOffset >= sticky) {
//    topnav.classList.add("sticky")
//  } else {
//    topnav.classList.remove("sticky");
//  }
//}

//}
}
