<?php

namespace App\Http\Controllers\Api;

use App\Models\Newsletter;
use App\Mail\NewsletterSubscribed;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class NewsletterController extends Controller
{
     public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:newsletters,email',
        ]);

        $newsletter = Newsletter::create([
            'email' => $request->email,
        ]);

        
        Mail::to($newsletter->email)->send(new NewsletterSubscribed($newsletter));

        return response()->json([
            'message' => 'Inscription à la newsletter réussie.'
        ], 201);
    }
}
