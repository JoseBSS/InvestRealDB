import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-erroresformularios',
  templateUrl: './erroresformularios.page.html',
  styleUrls: ['./erroresformularios.page.scss'],
})
export class ErroresformulariosPage implements OnInit {

  constructor(
    public modalController: ModalController,

  ) { }

  ngOnInit() {
  }


  dismiss() {
    // using the injected this.varios.SacarAlLogin();Controller this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': false
    });
  }


}
