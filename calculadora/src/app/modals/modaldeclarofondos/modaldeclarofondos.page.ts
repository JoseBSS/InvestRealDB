import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, NavParams } from '@ionic/angular';
import { VariosService } from 'src/app/service/varios.service';

@Component({
  selector: 'app-modaldeclarofondos',
  templateUrl: './modaldeclarofondos.page.html',
  styleUrls: ['./modaldeclarofondos.page.scss'],
})
export class ModaldeclarofondosPage implements OnInit {

  origen_de_fondos:string = 'Seleccionar';
  declaro_ocupacion:string = 'Seleccionar';
  declaro_pep:string = 'No He Sido';

  constructor(

    public loadingController: LoadingController,
    navParams: NavParams,
    public varios: VariosService,

    public modalController: ModalController

  ) { }

  ngOnInit() {
  }


  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'origen_de_fondos': this.origen_de_fondos,
      'declaro_ocupacion':this.declaro_ocupacion,
      'declaro_pep': this.declaro_pep
    });
  }


}
