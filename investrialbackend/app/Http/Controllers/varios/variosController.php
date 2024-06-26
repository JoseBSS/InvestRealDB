<?php

namespace App\Http\Controllers\varios;

use Mail;

use App\Mail\MailAsuntoYContentHtml;
use App\Mail\InvestrealperuRecuperarCorreo;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\UploadedFile;
use Carbon\Carbon;
use Illuminate\Support\Str;

use App\investrealperuusers;
use App\investrealperuuserscuentas;
use App\investrealperuuserstarjetas;
use App\investrealperuoperaciones;
use App\investrealperuaumentocambio;
use App\investrealperu1promociones;
use App\investrealperucreditos;


class variosController extends Controller
{
    //


    public function subirimagenescargadasenvariasfunciones(Request $request)
    {
          $autor=$request->autor;
      //dd($request->all());
      if ($request->hasFile('image'))
      {
            $file      = $request->file('image');
            $filename  = $file->getClientOriginalName();
            $size  = $file->getSize();
            $extension = $file->getClientOriginalExtension();
            $picture   = $autor.time().substr(str_shuffle("123456789"), 0, 4).'.'.$extension;
              if($size<5254774){
                if($extension=='png'||$extension=='jpeg'||$extension=='jpg'||$extension=='webp'||$extension=='apng'||$extension=='gif'){
                  $file->move(public_path('/imagenescargadas/'), $picture);
                  // return response()->json(["message" => "Image Uploaded Succesfully"]);
                  $respuesta['url']='https://equipojotamar.com/backend/public/imagenescargadas/'.$picture;
                  $respuesta['status']=1;
                  return($respuesta);  
                }
                else{
                  $respuesta['url']=null;
                  $respuesta['status']=0;
                  return($respuesta);
                }
              }
              else{
                $respuesta['url']=null;
                $respuesta['status']=0;
                return($respuesta);
              }
      } 
      else
      {
        $respuesta['url']=null;
        $respuesta['status']=0;
        return($respuesta);
      }
    }


   public function variasfunciones(Request $data)
    {
        switch ($data->nombre_solicitud) {
            case 'prueba':
                $prueba = prueba::where('id_de_pruebas','=','1')->first();
                return ($prueba);
            break;


            case 'jotamarglobal_enviar_correo_global_desde_el_frontend_a_un_usuario':


              return (0);
            break;

            case 'jotamarglobal_enviar_correo_global_desde_el_frontend_a_varios_usuarios':


              return (0);

            break;


                      // investrealperu


                   case 'investrealperuactualizarperfil':


                    
                    break;

                 // investrealperu

                    
                    


    }

    }


}
