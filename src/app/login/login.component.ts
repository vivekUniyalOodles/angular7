import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private http :HttpClient,public router :Router) { }

  public baseUrl="http://localhost:3000/";
  public username;
  public password;

  registerUser(form){
    if(form.valid){

      localStorage.setItem('user', form.form.controls.username.value);


      this.router.navigateByUrl("/dashboard");
    }
    // console.log(form.form.controls.username.value  );
    // console.log(form.form.controls.password.value  );
  }

  connectToUser(){
    console.log(this.baseUrl+"user?username="+this.username);
    return this.http.get(this.baseUrl+"user?username="+this.username);
  }

  ngOnInit() {
  }

}
