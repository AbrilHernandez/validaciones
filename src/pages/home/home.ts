import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WelcomePage } from "../welcome/welcome";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public email:string;
  public name:string;
  public phone:number;
  public comment:string;
  

  validacion:FormGroup;
  terms: boolean = false;
  constructor(public navCtrl: NavController, public formBuilder:FormBuilder) {
    this.validacion = formBuilder.group({
      name: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z]*'),Validators.required])],
      email: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      telefono:['', Validators.compose([Validators.maxLength(10), Validators.pattern('[0-9]*')])],
      
    })
    
  }

  allowed(){
    this.navCtrl.push(WelcomePage, {nombre:this.name, email:this.email, ph:this.phone});
  }

}
import { FormControl } from '@angular/forms';

export class CheckboxValidator{

  static isChecked(control: FormControl) : any{

    if(control.value != true){
      return {
        "notChecked" : true
      };
    }

    return null;
  }

}

