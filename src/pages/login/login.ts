import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
email:any;
password:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
  }

 validateUser():boolean{
   return this.email=="developerslearnit@gmail.com" && this.password=="password";
 }

 signIn(){
   if(this.validateUser()){
     this.navCtrl.setRoot('DashboardPage');
   }else{
     this.showAlert("Wrong email or password");
   }
 }

 showAlert(err) {
  let alert = this.alertCtrl.create({
    title: "Error!",
    subTitle: err,
    buttons: ["OK"]
  });
  alert.present();
}

}
