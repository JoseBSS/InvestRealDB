<?php



namespace App;



use Illuminate\Database\Eloquent\Model;



class investrealperucreditos extends Model

{

    protected $table = 'investrealperu_creditos';

    // aceptamos todas las columnas de la tabla para este modelo con un guarded vacio...
    protected $guarded = [];  

    public $timestamps = false;



}

