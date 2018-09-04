import { Component } from "@angular/core";
import { NavController, ModalController, ModalOptions } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {}

  showLoginModal() {
    const modalOptions: ModalOptions = {
      cssClass: "signInModal"
    };
    const modal = this.modalCtrl.create("LoginPage", {}, modalOptions);
    modal.present();
  }
}
