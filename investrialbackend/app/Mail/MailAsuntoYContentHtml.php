<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class MailAsuntoYContentHtml extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * @var
     */
    public $temporal_subjects,$temporal_content;

     /**
     * @var
     */

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($temporal_subjects,$temporal_content)
    {
        $this->temporal_subjects = $temporal_subjects;
        $this->temporal_content = $temporal_content;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        // return $this->view('view.name');
        // return $this->view('mails.mail-asunto-content-html-jeje');

        return $this->view('mails.mail-asunto-content-html-jeje', ['content' => $this->temporal_content])
        ->subject($this->temporal_subjects);

    }




}