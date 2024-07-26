import { Component, ViewChild } from '@angular/core'
import { VariosService } from './service/varios.service'
import * as CryptoJS from 'crypto-js'
import { NavigationEnd, Router } from '@angular/router'
import {
  AlertController,
  Platform,
  // IonSlides,
  MenuController,
} from '@ionic/angular'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // @ViewChild('eslaiderdelmenu') slides: IonicSlides

  // static mostrar_cabecera:boolean = true;
  // public classReference = AppComponent;

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      next: '.swiper-button-next',
      prev: '.swiper-button-prev',
    },
  }

  menuderechosuperior: boolean = false

  secretKey = '123456&Descryption'
  subscription: any
  menu_promociones: any
  profileInfo: any = null
  show_header: boolean
  public innerWidth: any
  constructor(
    public alertController: AlertController,
    public varios: VariosService,
    private router: Router,
    private platform: Platform,
    public menuCtrl: MenuController
  ) {
    this.initializeApp()
    this.ionViewWillEnter()
    this.verificar_si_el_eslash_despues_de_la_ruta_de_tabs_existe()
    // this.classReference.mostrar_cabecera = true;
    this.innerWidth = window.innerWidth
  }

  verificar_si_el_eslash_despues_de_la_ruta_de_tabs_existe() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        var despuesde_eslash_indash = this.router.url.substring(
          0,
          this.router.url.lastIndexOf('/indash') + 1
        )
        console.log('despues_del_eslash_indash', despuesde_eslash_indash)
        if (despuesde_eslash_indash != '/') {
          this.show_header = false
          this.menuCtrl.enable(false)
          // this.classReference.mostrar_cabecera=false;
        } else {
          this.show_header = true
          this.menuCtrl.enable(true)
          // this.classReference.mostrar_cabecera=true;
        }
      }
    })
  }

  ionViewWillEnter() {
    this.verificar_si_el_eslash_despues_de_la_ruta_de_tabs_existe()

    this.consultarpromociones()

    this.ConsultarCuenta()
  }

  ConsultarCuenta() {
    this.profileInfo = localStorage.getItem('profileInfo')
    if (this.profileInfo) {
      // se Cumplio: ProfileInfo existe en el cache
      this.profileInfo = this.decrypt(this.profileInfo)
      if (
        this.profileInfo != undefined &&
        this.profileInfo != null &&
        this.profileInfo != ''
      ) {
        // se Cumplio: ProfileInfo es diferente a (Vacio, null o indefinido)
        this.profileInfo = JSON.parse(this.profileInfo)
        if (
          this.profileInfo &&
          this.profileInfo.id &&
          this.profileInfo.id > 1 &&
          this.profileInfo.id < 1000000
        ) {
          // se Cumplio: ProfileInfo.id existe y es un rango adecuado)
          var datainvestrealperuappupdateporid = {
            nombre_solicitud: 'investrealperuappupdateporid',
            id: this.profileInfo.id,
          }
          this.varios
            .variasfunciones(datainvestrealperuappupdateporid)
            .subscribe(async (res: any) => {
              console.log(
                ' respuesta investrealperuappupdateporid In Service ',
                res
              )
              if (!res && !res.id && res.id < 1 && res.status != 'activo') {
                // se Cumplio o NO: que no hay respuesta, el id no vino o estatus no es activo
                // this.router.navigate(['login']);
              } else {
                // se Cumplio: el usuario existe y tiene cuenta activa
                localStorage.setItem(
                  'profileInfo',
                  this.encrypt(JSON.stringify(res))
                )
                if (res.tipo_cuenta < 1) {
                  // this.router.navigate(['login']);
                } else {
                  // se Cumplio: Es Mayor a 1
                }
              }
            })
        } else {
          // this.router.navigate(['login']);
        }
      } else {
        // this.router.navigate(['login']);
      }
    } else {
      // this.router.navigate(['login']);
    }
  }

  iramiscuentas() {
    this.router.navigate(['indash/cuentas'])
  }
  iraperfil() {
    this.router.navigate(['indash/perfil'])
  }

  consultarpromociones() {
    var datainvestrealperuusuariostraerpromociones = {
      nombre_solicitud: 'investrealperuusuariostraerpromociones1',
    }
    this.varios
      .variasfunciones(datainvestrealperuusuariostraerpromociones)
      .subscribe(async (res: any) => {
        console.log(' respuesta investrealperuusuariostraerpromociones', res)
        this.menu_promociones = res
      })
  }

  clickparaabrirmenusuperior() {
    if (this.menuderechosuperior == false) {
      this.menuderechosuperior = true
    } else {
      this.menuderechosuperior = false
    }
  }

  clickparacerrarmenusuperior() {
    this.menuderechosuperior = false
  }

  cerrarsesionmenusuperior() {
    this.menuderechosuperior = false
    this.varios.logout();
  }

  cerrarsesion_menusidebar(){
    this.varios.logout();

  }


  iramisbeneficios() {
    this.router.navigate(['/indash/misbeneficios'])
    this.menuderechosuperior = false
  }

  // slidePrev() {
  //   this.slides.slidePrev()
  // }
  // slideNext() {
  //   this.slides.slideNext()
  // }

  initializeApp() {
    this.platform.ready().then(() => {})
  }

  ionViewDidEnter() {
    this.ActivarObservableDeBotonAtras()
  }

  ActivarObservableDeBotonAtras() {
    this.subscription = this.platform.backButton.subscribeWithPriority(
      9999,
      async () => {
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
                this.router.navigate(['/login'])
              },
            },
          ],
        })
        await alert.present()
      }
    )
  }

  encrypt(value: string): string {
    if (value) {
      return CryptoJS.AES.encrypt(value, this.secretKey.trim()).toString()
    }
  }

  decrypt(textToDecrypt: string) {
    if (textToDecrypt) {
      return CryptoJS.AES.decrypt(
        textToDecrypt,
        this.secretKey.trim()
      ).toString(CryptoJS.enc.Utf8)
    }
  }

  SeClickeoEnLaApp() {
    console.log('event:', event)
    console.log('this.router.url=', this.router.url)
    console.log('activate')
    this.varios.BorrarHistorialNoBackButtonWPAExploradoresBrowser()
  }

  onActivateRoute(event) {
    this.verificar_si_el_eslash_despues_de_la_ruta_de_tabs_existe()
    // Ahora que sabemos a que ruta quiere ir, vamos a restringir las que requieran login pero a nivel Global.
    //para esto, agregemos el nombre de la ruta y si esta aparece en esta lista BLANCA "(no)" volvera a atras, ni se le mostrara
    //el modal el cual le indicara al usuario que debe iniciar sesion o regresar:
    this.varios.MostrarAlertaMonoOcultarEn80002segundos()
  }
}
