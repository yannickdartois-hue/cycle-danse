# Cycle Danse · CA3 · Seconde · Lycée Georges Pompidou

Cycle de danse de 8 séances de 75 min, sur tatamis, groupes affinitaires de 3 à 5, 33 à 35 élèves. Entrée par les porters et les figures dynamiques d'acrosport (à deux, puis à 3 ou 4) pour arriver aux procédés de composition. Tirage au sort d'un thème et de contraintes à partir de S4. Évaluation en S7 et S8.

## Contenu du dépôt
| Fichier | Rôle |
|---|---|
| `index.html` | l'écran de cours (fabriqué par `mon-eps/atelier/ecran-de-cours/construire.py danse` : ne pas modifier à la main) |
| `outils.html` | l'outil complet (bouton « Préparer ») : séances détaillées, porters, procédés, leviers, **tirage au sort**, passages, échauffements, sécurité, banque, différenciation, évaluation, **saisie des notes** (export CSV), sources, impression |
| `danse-donnees.js` | séances, porters, procédés, leviers, thèmes, contraintes, évaluation et schémas, partagés par les deux pages |
| `pdf/` | une fiche par séance, le cycle complet et les documents à imprimer |
| `sw.js`, `manifest.webmanifest`, `icon-*.png`, `polices/` | hors ligne et installation |

## Installation
1. Créer le dépôt `cycle-danse`, y déposer tout le contenu (garder `pdf/` et `polices/`), puis *Settings → Pages → Deploy from a branch → main / (root)*.
2. iPad : ouvrir l'adresse en Wi-Fi, puis **Ajouter à l'écran d'accueil**.

## Données
Les tirages au sort et les notes restent sur l'appareil (localStorage). Aucun nom n'est envoyé en ligne.
