import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import * as $ from "jquery";
import {Router} from '@angular/router';
@Component({
  selector: 'loginn',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 functionn() {
  $(".info-item .btn").click(function() {
    $(".container").toggleClass("log-in");
  });
  $(".container-form .btn").click(function() {
    $(".container").addClass("active");
  });}
constructor ( private router: Router){}

public Nav(){
this.router.navigateByUrl('/profilpat')
}


  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

}
