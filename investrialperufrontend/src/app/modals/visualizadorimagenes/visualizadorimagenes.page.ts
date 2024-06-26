import { Component, OnInit } from '@angular/core';

import { NavParams,ModalController, LoadingController  } from '@ionic/angular';

@Component({
  selector: 'app-visualizadorimagenes',
  templateUrl: './visualizadorimagenes.page.html',
  styleUrls: ['./visualizadorimagenes.page.scss'],
})
export class VisualizadorimagenesPage implements OnInit {
  traidopormodalparams: any;
  dataparaelmodal;
  constructor(    public loadingController: LoadingController,
    navParams: NavParams,
    public modalController: ModalController,) 

    {
      this.traidopormodalparamsFuction();
     }
  
    ngOnInit() {
      this.traidopormodalparamsFuction();
      this.loadinginicial();
  
    }
  
    traidopormodalparamsFuction(){
      // this.traidopormodalparams=navParams.get('dataparaelmodal');
      console.log('recibido por modalparams', this.dataparaelmodal);
    }
  
    dismiss() {
      // using the injected ModalController this page
      // can "dismiss" itself and optionally pass back data
      this.modalController.dismiss({
        'dismissed': false
      });
    }
  
    async loadinginicial(){
      const actualizando = await this.loadingController.create({
        message: 'Cargando imagen, porfavor espere...',spinner: 'bubbles',duration: 3500,
        });
        actualizando.present();
  
    }
  
}
