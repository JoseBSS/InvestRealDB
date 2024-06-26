<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ReservationEmail as ReservationEmail;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {

  //  return $request->user();
// });



// comandos por ruta
// Run config:clear in Shared Hosting Server
Route::get('/limpiar1', function() {
    Artisan::call('config:clear');
    // Do whatever you want either a print a message or exit
});

// config cache
Route::get('/limpiar2', function() {
    Artisan::call('config:cache');
    // Do whatever you want either a print a message or exit
});

// limpiar cache
Route::get('/limpiar3', function() {
    Artisan::call('cache:clear');
    // Do whatever you want either print a message or exit
});

// limpiar vistas
Route::get('/limpiar4', function() {
    Artisan::call('view:clear');
    // Do whatever you want either print a message or exit
});

Route::get('/limpiar5', function() {
    Artisan::call('optimize:clear');
    // Do whatever you want either print a message or exit
});


Route::get('/limpiar6', function() {
    Artisan::call('storage:link');
    // Do whatever you want either print a message or exit
});


// crear un controlador
Route::get('/creacontrolador', function() {
    Artisan::call('make:controller varios/variosControllerOFFFFFF');
    // Do whatever you want either print a message or exit
});

// crear una clase tipo mail:
Route::get('/creaemailOFFFFFFFFF', function() {
    Artisan::call('make:mail BeoboxNuevoTicketSoporte');
    // Do whatever you want either print a message or exit
});


//Route::get('/prueba', 'Controller@prueba');
Route::get('/pruebaa', 'App\Http\Controllers\prueba\pruebaController@pruebaa');

//ruta del actualizador de tipo_cuenta segun el correo de usuario entrante
Route::post('/tipocuentacambio', 'App\Http\Controllers\tipocuentacambio\tipocuentacambioController@tipocuentacambio');

//ruta del actualizador de escalon 3 completa registro segun el correo de usuario entrante
Route::post('/perfilcambioescalon2', 'App\Http\Controllers\tipocuentacambio\tipocuentacambioController@perfilcambioescalon2');

//edicion de perfil controlatuequipo:
Route::post('/cambiarimagen', 'App\Http\Controllers\varios\variosController@cambiarimagen');

Route::post('/variasfunciones', 'App\Http\Controllers\varios\variosController@variasfunciones');

Route::post('/subirimagenescargadasenvariasfunciones', 'App\Http\Controllers\varios\variosController@subirimagenescargadasenvariasfunciones');


//Route::post('/', function()
//{
//    return 'Hello';
//});

