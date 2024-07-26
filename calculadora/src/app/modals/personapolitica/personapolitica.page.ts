import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-personapolitica',
  templateUrl: './personapolitica.page.html',
  styleUrls: ['./personapolitica.page.scss'],
})
export class PersonapoliticaPage implements OnInit {
  nombre_politico:string = undefined;
  institucion_politica:string = undefined
  cargo_politico:string = undefined

  constructor(
    private modalController: ModalController,

  ) { }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': false
    });
  }



  dismissyactualiza() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'nombre_politico': this.nombre_politico,
      'institucion_politica':this.institucion_politica,
      'cargo_politico':this.cargo_politico

    });
  }


}
