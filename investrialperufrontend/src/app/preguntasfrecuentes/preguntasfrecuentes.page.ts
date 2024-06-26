import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController } from "@ionic/angular";
import { VariosService } from '../service/varios.service';
import {Router} from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-preguntasfrecuentes',
  templateUrl: './preguntasfrecuentes.page.html',
  styleUrls: ['./preguntasfrecuentes.page.scss'],
})
export class PreguntasfrecuentesPage implements OnInit {
  ValorSegmento: any = '1';


  step: any;

  constructor(
    private menu: MenuController,
    private router: Router,
    private variosservicios: VariosService,
    private loadingController: LoadingController,
  ) 
  {
    this.menu.enable(true);
   }
   

  ngOnInit() {
    this.menu.enable(true);
  }

  ionViewWillEnter(){
    this.menu.enable(true);
  }

  async segmentChanged(event){
      this.ValorSegmento=event.detail.value;
      // console.log('event',event);
      // this.step='1';
      const actualizando = await this.loadingController.create({
      message: 'Actualizando...',spinner: 'bubbles',duration: 15000,
      });
      console.log(this.ValorSegmento);
      actualizando.dismiss();

  }

  iraregistro(){
    var data = {step:this.variosservicios.ir_a_registro };
    this.router.navigate(["/login",data]);

  }

    


}
