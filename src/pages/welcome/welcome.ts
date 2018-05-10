import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  public nombre:string; 
  public email:string;
  public tel:number;

  constructor(public navCtrl: NavController, public params: NavParams) {
   console.log(params);
    this.nombre = this.params.data.nombre;
    this.email=this.params.data.email;
    this.tel=this.params.data.ph;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

}
