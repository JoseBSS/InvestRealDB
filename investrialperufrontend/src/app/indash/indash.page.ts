import { Component, OnInit } from '@angular/core';
import { VariosService } from './../service/varios.service';
import * as CryptoJS from 'crypto-js';
import {Router} from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-indash',
  templateUrl: './indash.page.html',
  styleUrls: ['./indash.page.scss'],
})
export class IndashPage implements OnInit {

  subscription: any;

  constructor(
    public alertController: AlertController,
    public varios: VariosService,
    private router: Router,
    private platform: Platform,
    
  ) 
  
  { 
    this.ActivarObservableDeBotonAtras();
  }

  ngOnInit() {
    this.ActivarObservableDeBotonAtras();
  }

  cerrarsesion(){
    this.varios.MostrarYOcultarAlertaMono2segundos();
    this.varios.logout();
  }




  ionViewWillEnter(){
    this.ActivarObservableDeBotonAtras();
  }


  ActivarObservableDeBotonAtras(){
    this.subscription = this.platform.backButton.subscribeWithPriority(9999, async () => {
      // do nothing
      const alert = await this.alertController.create({
        header: 'Esta seguro que quiere salir?',
        cssClass: 'cerrarsalir-alert',
        buttons: [
          {
            text: 'No',
            cssClass: 'alert-button-cancel',
            handler: () => {
               // do nothing
            },
          },
          {
            text: 'Si',
            cssClass: 'alert-button-confirm',
            handler: () => {
              this.router.navigate(['/login']);
  
            },
          },
        ],
      });
      await alert.present();
  
      
    });
    
  
  
  }

  ionViewWillLeave() {
    window.location.reload();
  }



}
