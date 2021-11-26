import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import {Router} from '@angular/router';
@Component({
  selector: 'login3',
  templateUrl: './login3.component.html',
  styleUrls: ['./login3.component.css']
})
export class Login3Component {

  functionn() {
    $(".info-item .btn").click(function() {
      $(".container").toggleClass("log-in");
    });
    $(".container-form .btn").click(function() {
      $(".container").addClass("active");
    });}
  constructor ( private router: Router){}

  public Nav(){
  this.router.navigateByUrl('/profiladmin')
  }



}
