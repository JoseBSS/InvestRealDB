<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class DollarplusRecuperarCorreo extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * @var
     */
    public $password,$ignorarsi,$desdequeapp;
    /**
     * @var
     */


    /**
     * Create a new message instance.
     *
     * @return void
     */

    public function __construct($password,$ignorarsi,$desdequeapp)
    {
        $this->password = $password;
        $this->ignorarsi = $ignorarsi;
        $this->desdequeapp = $desdequeapp;

    }
     
    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('mails.investrealperu_recuperar')
        ->subject('Recuperación de contraseña'.' '.$this->desdequeapp);
        ;
    }
}
