# Overdracht document
In dit document is alle informatie te vinden over het project en benodigdheden om het project op te zetten binnen een lokale en productieomgeving. Ook is er informatie te vinden over hoe de applicatie in elkaar zit en hoe hierop uit te breiden is. Tijdens de ontwikkeling zijn we tegen bepaalde obstakels en limitaties aangelopen, in dit document geven we hier uitleg over plus eventuele oplossingen.

## Omschrijving
We hebben van [Stichting Accessibility](https://www.accessibility.nl/) de opdracht gekregen om een virtual reality game maken voor mensen met een visuele beperking. Ze willen graag meer te weten komen over hoe virtual reality ingezet kan worden voor mensen met een beperking. Het doel van het spel is om binnen een virtual reality wereld op zoek te gaan naar een [cache](https://en.wikipedia.org/wiki/Geocaching#Geocaches) die ergens verstopt is.

De applicatie is gemaakt met behulp van het A-Frame framework. Dit is een virtual reality framework voor NodeJS om web gerelateerde games mee te ontwikkelen. A-Frame scenes worden volledig opgezet door middel van HTML en maakt gebruik van Three.js.

### Toegankelijkheid

#### Richter met "text-to-speech"
Als de richter over een object heen gaat zal deze een uitleg van het object afspelen.

#### Object heeft een grotere hitbox
![Object hitbox voorbeeld](/docs/Object_Hitbox.png)

Een object heeft een grotere cilinder of kubus er omheen waar de richter op reageert, hierdoor hoeft de gebruiker minder precies het object aan te wijzen om het geluid te activeren.

#### Sonar vibratie cache
Als de gebruiker op de trekker van de controller drukt dan zal de controller gaan vibreren. Hoe dichterbij de cache is hoe langer de trilling zal zijn, de pause tussen elke trilling is 2 seconden.

## Deployment

### Installatie
Om het project te installeren in je lokale omgeving zijn er een aantal benodigdheden vereist. 

#### Benodigdheden
De applicatie is geschreven met gebruik van [NodeJS v16.13.2](https://nodejs.org/en/), het is daarom vereist om deze te installeren. Om de code vervolgens samen te voegen tot 1 bundel maken we gebruik van [Webpack v5.66.0](https://webpack.js.org/) `npm install --save-dev webpack` en [Webpack Cli v4.9.1](https://webpack.js.org/) `npm install --save-dev webpack-cli`. Om de kwaliteit van de code te bewaken maken we gebruik van [ESLint v8.8.0](https://eslint.org/) `npm install eslint --save-dev`. ESLint zorgt ervoor dat er één vaste code standaard wordt aangehouden binnen het project.

#### Stappen
De volgende commando's zijn vereist om uitgevoerd te worden in de commandline om de applicatie op te starten binnen je lokale omgeving.
```
npm install
npm start
webpack --watch --progress --mode=development
```

### GitHub
VR Cache maakt gebruik van GitHub pages voor de hosting van het spel. Met GitHub pages is het heel eenvoudig om snel en in een gestructureerde manier met git om tijdens development gebruik te maken van continious deployment. In het onderstaande diagram is gevisualiseerd hoe de git workflow loopt van het begin van een feature naar uiteindelijke deployment via [GitHub pages](https://hu-ict-lab.github.io/VR-Cache/). 

Zodra er een idee is voor een nieuwe feature wordt hiervoor een nieuwe branch aangemaakt. Vervolgens wordt er voor elke aparte taak nog een extra branch aangemaakt die vervolgens weer merged met de feature branch. Zodra de feature voltooid is kan deze worden gemerged met de development branch. Bij het mergen naar de development zal ESLint eerst de code valideren via GitHub Actions. Wanneer je de development branch merged naar de demo branch zal er automatisch via GitHub pages een website worden opgezet waarop alle features getest kunnen worden door de opdrachtgever. Zodra de opdrachtgever hier akkoord op geeft kan de code uit de development gemerged worden naar de master branch.

![Git graph](/docs/Git_Graph.png)

## Structuur

### Mappenstructuur
In het diagram hieronder is de volledige mappenstructuur van het project gevisualiseerd.

```
.github/workflows/               GitHub Actions workflows
assets/                          Bestanden die in het spel worden gebruikt
docs/                            Documenten
documentatie/                    Alle documentatie voor het project in markdown
├── Bijlagen/                      
    ├── Lessen/                  Notities over besprekingen in de lessen
    ├── Overig/                  Overige notities
    └── Sprint Meetings/         Notities van de sprint meetings
├── Onderzoek/                   Alle documentatie met betrekking tot het onderzoeksrapport
├── Overdracht/                  Informatie voor de overdracht van het project
└── Wiki/                        Documentatie over het project
public/
src/                               
├── components/                  Alle Javascript webcomponenten
|   ├── menu/                      
|   ├── timer/                     
|   ├── world/                     
|   |   ├── cache/                 
|   |   └── player/              Verschillende soorten game devices
|   |       ├── oculus/
|   |       └── pc/
├── css/                         Alle styling files
├── images/                      Alle foto's die gebruikt worden op de website
└── utils/                       Herbruikbare Javascript code
```

### ESLint rules
ESLint zorgt ervoor dat de gehele codebase één code standaard aanhoudt. Deze regels hebben wij gedefiënneerd in het bestand [.eslintrc.json](https://github.com/HU-ICT-LAB/VR-Cache/blob/master/.eslintrc.json). Deze regels kunnen indien nodig aangepast worden.

## Limitaties
Tijdens de development van het project zijn er een aantal limitaties op ons pad gekomen, deze limitaties zitten vooral in A-Frame en de browsers van de Oculus Quest.

### A-Frame

#### Default richter (Laser)
De laser van A-Frame is niet aanpasbaar, ook is deze laser zeer precies en kan er maar één object tegelijkertijd uitgelezen worden. Deze laser kan ook niet verwisseld worden met een zelf bedacht alternatief omdat het niet mogelijk is objecten uit te lezen met iets anders dan de A-Frame laser.

#### Aantal objecten limiet
Bij gebruik van een groot aantal objecten daalt de framerate significant. Ook zijn er browsers die niks meer inladen zodra je over bepaalde limieten heen gaat, dit is browser specifiek. Dit heeft er voor gezorgd dat objecten zijn gegroepeerd op bestands niveau, dus de game ziet dit dan als één groot object.

#### Physics engine outdated
Om gebruik te maken van de [physics engine](https://github.com/n5ro/aframe-physics-system) moet er gebruik gemaakt worden van een oudere versie van A-Frame. Met het gebruik van een oudere versie is er geen ondersteuning en kan er geen gebruik gemaakt worden van nieuwe features. Hier is ook geen alternatief voor.

### Browser Oculus Quest

#### Text-to-speech niet ondersteund
De standaard browser van Oculus heeft geen ondersteuning voor het gebruik van text-to-speech, als alternatief is er gebruik gemaakt van audio bestanden.

#### Geen extensies
Screen readers zijn er niet voor de Oculus browser, de website (home & settings page) is hierdoor op de Oculus Quest niet accessible, dit zorgt ervoor dat mensen met een visuele beperking het spel niet zelf kunnen starten en aanpassen.

## Voortgang
We hebben tijdens het project verschillende milestones gepland. Hieronder is een overzicht te zien van welke milestones wel en niet behaald zijn.

### Milestones
- [x] [Basisfunctionaliteit geocaching](https://github.com/HU-ICT-LAB/VR-Cache/milestone/1)
- [x] [VR-Controller](https://github.com/HU-ICT-LAB/VR-Cache/milestone/4)
- [ ] [Six degrees of freedom](https://github.com/HU-ICT-LAB/VR-Cache/milestone/5)
- [ ] [Game score](https://github.com/HU-ICT-LAB/VR-Cache/milestone/6)
- [x] [Wereld: The Forest]()
- [ ] [Wereld: The Office]()

## Known bugs
1. [Audio Kraakt](https://github.com/HU-ICT-LAB/VR-Cache/issues/92)
