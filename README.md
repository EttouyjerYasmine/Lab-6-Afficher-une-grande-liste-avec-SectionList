## Restaurant Menu App - Guide de Démonstration

### Objectif du TP

Créer une application mobile avec SectionList qui affiche un menu de restaurant organisé en catégories.

### Démonstrations Visuelles

#####  ÉCRAN 1 : INTERFACE PAR DÉFAUT

<img width="1919" height="939" alt="Lab6 1" src="https://github.com/user-attachments/assets/74dc3a12-082a-40ee-bdf3-c9f892d067dc" />

###### Points clés :

En-tête avec titre et boutons

Sections avec fond jaune et texte noir

Lignes de séparation fines entre items

Pied de page avec copyright

####  ÉCRAN 2 : MODE PROMO ACTIVÉ

<img width="959" height="449" alt="Lab6 Promo" src="https://github.com/user-attachments/assets/5707527e-f331-4c9e-8b74-ffa7b36b0f3a" />

###### Filtrage :

Montré : Plats < $8

Masqué : Plats ≥ $8

Sections vides sont retirées

Bouton "Promo" devient "Show All"

Couleur du bouton change (jaune → orange)


####  ÉCRAN 3 : DEVISES DIFFÉRENTES

<img width="959" height="474" alt="Lab6 Euro" src="https://github.com/user-attachments/assets/57de3ec5-20ba-43c7-82c2-1f46dce2ab30" />

<img width="959" height="478" alt="Lab6 Mad" src="https://github.com/user-attachments/assets/8f5af440-5e2e-4a34-8cc4-8d60b57eb2d0" />

<img width="959" height="473" alt="Lab6 2" src="https://github.com/user-attachments/assets/fa7a6c9e-ee3d-42f2-a06b-fdd8bb4e472b" />

###### Conversion :

USD → EUR : ×0.85

USD → MAD : ×9.5

Seule l'affichage change, pas les données

Footer indique la devise active


### Fonctionnalités techniques 

SectionList Props Utilisées
Prop-----	Valeur----------	--------Effet
sections	---menuItemsToDisplay	------Données structurées
renderItem---Fonction Item---------------	Affiche chaque plat
renderSectionHeader	Fonction Header	Affiche les titres
keyExtractor	item.id	Clés uniques
ItemSeparatorComponent	Separator	Ligne entre items
ListFooterComponent	ListFooter	Copyright
ListEmptyComponent	Message vide	État sans données

### Auteurs : 

Réalisé par : Ettouyjer Yasmine.

Encadré par : Pr.Mohammed Lechgar.

Date : Le 07-01-2026.


