<?php



namespace App;



use Illuminate\Database\Eloquent\Model;



class investrealperuoperaciones extends Model

{

    protected $table = 'investrealperu_operaciones';

    // aceptamos todas las columnas de la tabla para este modelo con un guarded vacio...
    protected $guarded = [];  

    public $timestamps = false;



}

