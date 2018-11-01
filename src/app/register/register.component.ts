import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router ) { 
    this.createForm();
  }

  public profileForm :FormGroup;

  createForm(){
    this.profileForm = new FormGroup({
      username: new FormControl('',[ Validators.required, Validators.minLength(2),Validators.pattern('[a-zA-Z ]*')]),
      email: new FormControl('',[ Validators.required,Validators.pattern('^[a-zA-Z0-9]\.?([a-zA-Z0-9!_.-])*@([a-zA-Z0-9-])+\.([a-zA-Z0-9-])+\.?([a-zA-Z0-9]{2})$')]),
      password: new FormControl('',[ Validators.required, Validators.minLength(5),Validators.pattern('^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[.#?!@$%^&*-]).{5,}$')]),
      confirmPassword: new FormControl('',[ Validators.required]),
    },{
      validators: this.validateConfirmPassword
    });
  }

  validateConfirmPassword(abstractControl : AbstractControl) {
    if( abstractControl.get('password').value == abstractControl.get('confirmPassword').value){
      return null;
    }else{
      abstractControl.get('confirmPassword').setErrors( {'MatchPassword': true} );
    }          
    
  }



  onSubmit() {
    // console.warn(this.profileForm);
    this.router.navigate(['/s']);
  }

  ngOnInit() {  
    
  }

}
