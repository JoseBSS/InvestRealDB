import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInput, IonModal } from '@ionic/angular';
import { VariosService } from '../service/varios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  @ViewChild('modalcontrasena') modalcontrasena: IonModal;
  @ViewChild('campocontrasenaanterior', {static: false}) campocontrasenaanterior: IonInput;

    // empieza el codigo de selector de pais
    countrynumber = {
      isoCode: '',
      dialCode: '',
      internationalNumber: '',
      nationalNumber: ''
    };
    // fallbackPlaceholder = 'as';
    country_code: any;
    defaultCountryIsoTest = '32';
    dialCodePrefix = '+';
    enableAutoCountrySelect = true;
    enablePlaceholder = true;
    fallbackPlaceholder = 'pe';
    inputPlaceholder = 'Teléfono';
    minLength = '8';
    modalTitle = 'Seleccione pais';
    modalCssClass = '';
    modalSearchPlaceholder = 'Ingrese un nombre de pais';
    modalCloseText = 'Cerrar';
    modalCloseButtonSlot = 'end';
    modalCanSearch = true;
    modalShouldFocusSearchbar = true;
    modalSearchFailText = 'No encontrados.';
  profileInfo: any;
    // termina el codigo de selector de pais
    contrasenaanterior:any;
    contrasenanueva:any;
    contrasenarepetir:any;

    loadingProfile: boolean = true

  constructor(
        public cd: ChangeDetectorRef,
    public varios: VariosService,
    private router: Router,

  ) { }

  ngOnInit() {
  }
  ionViewWillEnter(){

    this.varios.ConsultarUsuarioMayorANumero1().subscribe(async( res: any ) =>{
      console.log('res x service en vista', res);
      this.countrynumber = {
        isoCode: '',
        dialCode: '',
        internationalNumber: res.celular,
        nationalNumber: res.celular
      };
      const objeto= JSON.parse(JSON.stringify(res));
      this.profileInfo = objeto;

      this.loadingProfile = false
    });





  }

  showCountryName(event){
    console.log('event111',event);
    // var countrycode=document.getElementById('countrycode');
    // console.log('countrycode',countrycode);

    // document.getElementById('seven').innerHTML=countrycode;
  }
  codechangeeee(event){
    console.log('event2222',event);

    // console.log('event.target.value',event.target.value);
    // var temporal=  event.target.textContent.split("+")[0];
    // console.log('temporal',temporal);
    // this.updateusuario1.controls['celular'].setValue(event.target.value);

  }

cancelar(){
  this.router.navigate(['indash/operacion']);

}

abrirmodalcontrasena(){
this.modalcontrasena.present();
this.cd.detectChanges();
setTimeout(() => {
  this.campocontrasenaanterior.setFocus();
},300);



}

cerrarmodalcontrasena(){
  this.modalcontrasena.dismiss();

  }

  actualizarperfil(){
        // console.log('celular',this.countrynumber.dialCode+' '+this.countrynumber.nationalNumber);
        if(this.countrynumber.dialCode){
          this.profileInfo.celular=this.countrynumber.dialCode+' '+this.countrynumber.nationalNumber;
        }
        var datainvestrealperuactualizarperfil = {
          nombre_solicitud:'investrealperuactualizarperfil',
          id: this.profileInfo.id,
          profilInfo: this.profileInfo
        }
                console.log('datainvestrealperuactualizarperfil',datainvestrealperuactualizarperfil);
                this.varios.variasfunciones(datainvestrealperuactualizarperfil).subscribe(async( res: any ) =>{
                  console.log(' respuesta investrealperuactualizarcontrasena',res);
                  if(res&&res>0){
                    this.modalcontrasena.dismiss();
                    this.varios.presentToast('actualización exitosa!');
                  }
                  else{
                    this.varios.presentToast('Error: No hay cambios!');
                  }
                });



  }

  cambiarcontrasena(){
    if(this.contrasenanueva==this.contrasenarepetir){
      var datainvestrealperuactualizarcontrasena = {
        nombre_solicitud:'investrealperuactualizarcontrasena',
        id: this.profileInfo.id,
        contrasenaanterior:this.contrasenaanterior,
        contrasenanueva:this.contrasenanueva
      }

      this.varios.variasfunciones(datainvestrealperuactualizarcontrasena).subscribe(async( res: any ) =>{
        console.log(' respuesta investrealperuactualizarcontrasena',res);
        if(res&&res>0){
          this.modalcontrasena.dismiss();
          this.varios.presentToast('actualización exitosa!');
        }
        else{
          this.varios.presentToast('Error: La contraseña anterior es invalida!');

        }
      });
    }
    else{
      this.varios.presentToast('Error: Las contraseñas no coinciden');
    }


  }


}
