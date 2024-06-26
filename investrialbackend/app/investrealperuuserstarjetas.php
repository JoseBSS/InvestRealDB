<?php



namespace App;



use Illuminate\Database\Eloquent\Model;



class investrealperuuserstarjetas extends Model

{

    protected $table = 'investrealperu_users_tarjetas';

    // aceptamos todas las columnas de la tabla para este modelo con un guarded vacio...
    protected $guarded = [];  

    public $timestamps = false;



}

