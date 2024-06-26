<?php



namespace App;



use Illuminate\Database\Eloquent\Model;



class investrealperuusers extends Model

{

    protected $table = 'investrealperuusers';

    // aceptamos todas las columnas de la tabla para este modelo con un guarded vacio...
    protected $guarded = [];  

    public $timestamps = false;



}

