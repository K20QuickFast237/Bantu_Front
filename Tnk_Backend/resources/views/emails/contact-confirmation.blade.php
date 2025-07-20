@component('mail::message')
# Confirmation de votre demande

Bonjour {{ $contact->name }},

Nous vous remercions pour votre message. Nous avons bien reçu votre demande et nous vous contacterons dans les plus brefs délais.

**Voici un récapitulatif de votre message :**

@component('mail::panel')
{{ $contact->message }}
@endcomponent

Merci de votre confiance.

Cordialement,<br>
L'équipe {{ config('app.name') }}
@endcomponent