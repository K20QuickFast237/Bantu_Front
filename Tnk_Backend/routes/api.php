<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\NewsletterController;

    
Route::post('/contact', [ContactController::class, 'sendContactMessage']);
Route::post('/newsletter', [NewsletterController::class, 'store']);