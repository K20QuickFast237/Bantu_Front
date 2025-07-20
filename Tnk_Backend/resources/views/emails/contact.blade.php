@component('mail::message')
# Nouvelle demande de contact

Vous avez reçu un nouveau message depuis le formulaire de contact de votre site web.

@component('mail::panel')
## Détails du contact
- **Nom :** {{ $contact->name }}
- **Email :** [{{ $contact->email }}](mailto:{{ $contact->email }})
- **Type de demande :** {{ $contact->type }}
@endcomponent

## Message
@component('mail::panel')
{{ $contact->message }}
@endcomponent

Cordialement,<br>
L'équipe {{ config('app.name') }}
@endcomponent