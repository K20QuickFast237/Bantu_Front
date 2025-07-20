@component('mail::message')
# Inscription à la newsletter confirmée

Bonjour,

Merci de vous être abonné à notre newsletter avec l'adresse e-mail **{{ $newsletter->email }}**. Vous êtes maintenant inscrit pour recevoir nos dernières actualités, offres et mises à jour.

Nous sommes ravis de vous compter parmi nous !

@component('mail::button', ['url' => url('/')])
Visiter notre site
@endcomponent

Cordialement,<br>
L'équipe {{ config('app.name') }}
@endcomponent