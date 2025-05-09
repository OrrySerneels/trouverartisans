# Authentification Artisan (Next.js 13)

## Routes API
- `/api/register` — enregistre un artisan
- `/api/login` — connecte un artisan
- `/api/me` — retourne les données en session
- `/api/demandes` — affiche les demandes clients (protégé)

## Sécurité
- Basée sur `iron-session` (cookie sécurisée)
- Stocke `nom`, `email`, `zones`, etc. dans la session

## Configuration
Ajoutez un fichier `.env.local` avec:

```env
SESSION_PASSWORD=une_phrase_secrète_ultra_forte
```