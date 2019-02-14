import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
    var dropdown = document.getElementsByClassName("dropbtn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }


    //var sidenav = document.getElementById('mySidenav');
    //window.onclick = function (event) {
    //  if (event.target == sidenav) {
    //    sidenav.style.display = "none";

    //  }
    //}
 
    }
    openNav = function () {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    };
    closeNav = function () {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
      document.body.style.backgroundColor = "white";
    };
  
 
    /*TOP BUTTON*/

    @HostListener("window:scroll", []) onWindowscroll() {

      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("myTopBtn").style.display = "block";
      } else {
        document.getElementById("myTopBtn").style.display = "none";
      }
    }

    topFunction = function () {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

}
