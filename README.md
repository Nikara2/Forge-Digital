# Premium Portfolio & Redesign Proposal

Portfolio personnel ultra-premium pour développeur full-stack, présenté comme
une proposition de refonte de site web agence-grade. Thème Dark Luxury,
Next.js 15 (App Router, TypeScript), Tailwind CSS v4, Framer Motion.

## Prérequis

- Node.js 20+ et npm

## Lancer le site en local

```bash
npm install
npm run dev
```

Puis ouvrir [http://localhost:3000](http://localhost:3000).

## Autres commandes

```bash
npm run build   # build de production
npm run start   # lance le build de production (après npm run build)
npm run lint     # vérifie le code avec ESLint
```

## Structure du projet

```
src/
  app/                  # layout, page et styles globaux (App Router)
  components/
    sections/           # une section de la page par fichier (Hero, About, Audit, ...)
    ui/                  # petits composants réutilisables (Reveal, Counter)
  data/
    content.ts           # tout le contenu texte/images des sections
.superdesign/
  design-system.md        # spécification du design system (couleurs, polices, sections)
```

## Modifier le contenu

Le contenu affiché (projets, services, audit, testimonials, etc.) est
actuellement du contenu **placeholder**. Pour le remplacer par de vraies
informations, éditer `src/data/content.ts` — c'est le seul fichier à modifier
pour changer les textes, chiffres et images des sections.
