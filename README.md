# vanessanoizet

Site personnel de Vanessa Noizet — chercheuse en histoire de l'art.

## Stack

- [Astro](https://astro.build) 5
- [Panda CSS](https://panda-css.com)
- TypeScript

## Commandes

| Commande       | Description                        |
| -------------- | ---------------------------------- |
| `pnpm install` | Installer les dépendances          |
| `pnpm dev`     | Lancer le serveur de développement |
| `pnpm build`   | Vérifier les types et build        |
| `pnpm preview` | Prévisualiser le build             |
| `pnpm format`  | Formater le code avec Prettier     |

## Structure

```
src/
├── components/        # Composants réutilisables (Button, Dropdown, Prose…)
├── features/          # Fonctionnalités (navigation desktop/mobile)
├── layouts/           # Layout principal
├── pages/             # Routes (file-based routing)
└── utils/             # Utilitaires

content/               # Collections de contenu (articles, expositions, hommages…)
styled-system/         # Sortie Panda CSS (généré, non commité)
```

## Sitemap

```mermaid
graph TD
    A["/"] --> B(("a-propos"))
    A --> C(("ecrits"))
    A --> D["expositions"]
    A --> E["hommages"]
    A --> F(("recherche"))

    B --> B1["biographie"]
    B --> B2["cv"]

    C --> C1["articles"]
    C --> C2["publications"]
    C --> C3["bibliographie"]
    C1 --> C1b{{"article"}}
    C2 --> C2b{{"publication"}}

    D --> D2{{"exposition"}}

    E --> E2{{"hommage"}}
    E --> E3["livre-d-or"]

    F --> F1["colloques"]
    F --> F2["memoires"]
    F --> F3["projet-de-these"]
    F1 --> F1b{{"colloque"}}
    F2 --> F2b{{"memoire"}}
```
