<?php



namespace App;



use Illuminate\Database\Eloquent\Model;



class investrealperuaumentocambio extends Model

{

    protected $table = 'investrealperu_aumento_cambio';

    // aceptamos todas las columnas de la tabla para este modelo con un guarded vacio...
    protected $guarded = [];  

    public $timestamps = false;



}

