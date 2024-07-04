import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, NavParams } from '@ionic/angular';
import { VariosService } from 'src/app/service/varios.service';

@Component({
  selector: 'app-modalcrearmoderador',
  templateUrl: './modalcrearmoderador.page.html',
  styleUrls: ['./modalcrearmoderador.page.scss'],
})
export class ModalcrearmoderadorPage implements OnInit {
email_moderador: any;
clave_moderador: any;
clave_moderador_repetir: any;
  profileInfo: any;

  constructor(public loadingController: LoadingController,
    navParams: NavParams,
    public varios: VariosService,

    public modalController: ModalController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.varios.ConsultarUsuarioADMIN999().subscribe(async (res: any) => {
      console.log('res x service en vista', res);
      this.profileInfo = res;
    });


  }


  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': false
    });
  }

  dismiss_exitoso() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  crear_moderador(){

    if(this.clave_moderador!=this.clave_moderador_repetir){
      this.varios.presentToast('ambas contraseñas deben ser iguales')
    }
    else{

      this.varios.MostrarAlertaMonoOcultarEn8000('present');
      var datainvestrealperuadmincrearmoderador = {
        nombre_solicitud: 'investrealperuadmincrearmoderador',
        datav2: this.profileInfo,
        email: this.email_moderador,
        username: this.email_moderador,
        password: this.clave_moderador,
      }
      this.varios.variasfunciones(datainvestrealperuadmincrearmoderador).subscribe(async (res: any) => {
        this.varios.MostrarAlertaMonoOcultarEn8000('dismiss');
        console.log(' respuesta datainvestrealperuadmincrearmoderador', res);
        if(res&&res.id>0){
          this.varios.presentToast('Creación exitosa!');
          this.dismiss_exitoso();

        }
        else{
          this.varios.presentToast('¡ERROR!');
        }
      },
  
        (error) => {
          this.varios.MostrarAlertaMonoOcultarEn8000('dismiss');
          this.varios.presentToast('¡ERROR!');
          console.log('Errores', error);
          this.varios.presentToast('Error al crear este moderador, verifique!');
  
        }
  
      );
  

    }


  }
}
