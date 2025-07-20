<?php

namespace App\Http\Controllers\Api;

use App\Mail\ContactConfirmation;
use App\Mail\ContactMessageReceived;
use App\Models\Contact;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function sendContactMessage(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'type' => 'required|string',
            'message' => 'required|string',
        ]);

        $contact = Contact::create($validated);

        // Envoi de l'e-mail de notification à l'administrateur
        Mail::to('nanfackjospinduclair@gmail.com')->send(new ContactMessageReceived($contact));

        // Envoi de l'e-mail de confirmation à l'utilisateur
        Mail::to($contact->email)->send(new ContactConfirmation($contact));

        return response()->json(['message' => 'Message de contact envoyé avec succès'], 200);
    }
}
