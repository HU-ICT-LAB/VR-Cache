# Overdrachtsdocument
Dit document bevat alle informatie en benodigdheden over het project om het op te zetten binnen een lokale- en productieomgeving. Ook is er informatie te vinden over hoe de applicatie in elkaar zit en hoe hierop uit te breiden is. Tijdens de ontwikkeling zijn we tegen bepaalde obstakels en limitaties aangelopen, hier geven wij uitleg over plus eventuele oplossingen.

## Inhoudsopgave
1. [Omschrijving](#omschrijving)<br/>
1.1. [Oculus Quest 2](#oculus-quest-2)<br/>
1.2. [Controls](#controls)<br/>
1.3. [Toegankelijkheid](#toegankelijkheid)
2. [Deployment](#deployment)<br/>
2.1. [Installatie](#installatie)<br/>
2.2. [GitHub](#github)<br/>
2.3. [Deployment diagram](#deployment-diagram)
3. [Structuur](#structuur)<br/>
3.1. [Mappenstructuur](#mappenstructuur)<br/>
3.2. [ESLint rules](#eslint-rules)<br/>
3.3. [Componenten](#componenten)
4. [Voortgang](#voortgang)<br/>
4.1. [Milestones](#milestones)
4. [Verder ontwikkelen](#verder-ontwikkelen)<br/>
5.1. [Lokaal ontwikkelen](#lokaal-ontwikkelen)<br/>
5.2. [Componenten toevoegen](#components-toevoegen)<br/>
5.3. [Objecten toevoegen](#objecten-toevoegen)<br/>
5.4. [Geluid toevoegen](#geluid-toevoegen)<br/>
5.4. [Limitaties](#limitaties)<br/>
5.5. [Tools](#tools)
6. [Bekende bugs](#bekende-bugs)

## Omschrijving
We hebben van [Stichting Accessibility](https://www.accessibility.nl/) de opdracht gekregen om een virtual reality game maken voor mensen met een visuele beperking. Ze willen graag meer te weten komen over hoe virtual reality ingezet kan worden voor mensen met een beperking. Het doel van het spel is om binnen een virtual reality wereld op zoek te gaan naar een [cache](https://en.wikipedia.org/wiki/Geocaching#Geocaches) die ergens verstopt is.

De applicatie is gemaakt met behulp van het [A-Frame](https://aframe.io/) framework. Dit is een virtual reality framework voor NodeJS om web gerelateerde games mee te ontwikkelen. [A-Frame](https://aframe.io/) scenes worden volledig opgezet door middel van HTML en maakt gebruik van Three.js.

### Oculus Quest 2
Ons gekozen platform voor dit project is de Oculus Quest 2, de Oculus Quest 2 maakt gebruik van een virtual reality bril en 2 controllers die beide vibratie ondersteunen. De Oculus Quest 2 bevat een eigen standaard browser. Deze gebruikt de [Chromium rendering engine](https://www.chromium.org/chromium-projects/) en heeft daardoor compatibiliteit met alle normale sites en sites die gebruik maken van web based virtual reality. 

### Controls
| Knop     | Actie                       |
|----------|-----------------------------|
| A        | Cache loggen                |
| Trigger  | Informatie uitlezen richter |
| Sidegrip | Sonar vibratie              |
| Joystick | Rondlopen                   |

### Toegankelijkheid

#### Object heeft een grotere hitbox
Een object is een primitieve vorm in [A-Frame](https://aframe.io/) die als hitbox om het visuele object heen gaat, hierdoor hoeft de gebruiker minder precies het object aan te wijzen om te kunnen interacteren. 

<img src="/docs/Object_Hitbox.png" alt="Object hitbox voorbeeld" height="250" />

*Hitbox van een object in het spel*

#### Richter als herkenningsstok met "text-to-speech"
Als de richter in aanraking komt met een object dan zal de controller een kleine vibratie geven dat een aanraking nabootst. Vervolgens kan de **Trigger** ingedrukt worden, dit zorgt er voor dat er een geluid met de uitleg van het object wordt afgespeeld.  

#### Sonar vibratie cache
Als de gebruiker op de **Sidegrip** van de controller drukt dan zal de controller gaan vibreren. Hoe dichterbij de cache is hoe langer de trilling zal zijn, de pauze tussen elke trilling is 2 seconden.

## Deployment

### Installatie
Om het project te installeren in je lokale omgeving zijn er een aantal benodigdheden vereist. 

#### Benodigdheden
De applicatie is geschreven met gebruik van [NodeJS v16.13.2](https://nodejs.org/en/), het is daarom vereist om deze te installeren. Om de code vervolgens samen te voegen tot 1 bundel maken we gebruik van [Webpack v5.66.0](https://webpack.js.org/) ``npm install --save-dev webpack`` en [Webpack Cli v4.9.1](https://webpack.js.org/) ``npm install --save-dev webpack-cli``. Om de kwaliteit van de code te bewaken maken we gebruik van [ESLint v8.8.0](https://eslint.org/) ``npm install eslint --save-dev``. [ESLint](https://eslint.org/) zorgt ervoor dat er één vaste code standaard wordt aangehouden binnen het project.

#### Stappen
De volgende commando's zijn vereist om uitgevoerd te worden in de commandline om de applicatie op te starten binnen je lokale omgeving.
```
npm install
npm start
webpack --watch --progress --mode=development
```

### GitHub
VR Cache maakt gebruik van GitHub pages voor de hosting van het spel. Met [GitHub pages](https://hu-ict-lab.github.io/VR-Cache/) is het heel eenvoudig om snel en gestructureerd tijdens development gebruik te maken van continuous deployment. In het onderstaande diagram is gevisualiseerd hoe de git workflow loopt van het begin van een feature naar uiteindelijke deployment via [GitHub pages](https://hu-ict-lab.github.io/VR-Cache/). 

Zodra er een idee is voor een nieuwe feature wordt hiervoor een nieuwe branch aangemaakt. Vervolgens wordt er voor elke aparte taak nog een extra branch aangemaakt die weer merged met de feature branch. Zodra de feature voltooid is kan deze worden gemerged met de development branch. Bij het mergen naar de development zal [ESLint](https://eslint.org/) eerst de code valideren via GitHub Actions. Wanneer je de development branch merged naar de demo branch zal er automatisch via [GitHub pages](https://hu-ict-lab.github.io/VR-Cache/) een website worden opgezet waarop alle features getest kunnen worden door de opdrachtgever. Zodra de opdrachtgever hier akkoord op geeft kan de code uit de development gemerged worden naar de master branch.

![Git graph](/docs/Git_Graph.png)

*Github branches diagram*

### Deployment diagram
![Deployment diagram](/docs/Deployment_diagram.png)

*Deployment diagram*

## Structuur

### Mappenstructuur
In het diagram hieronder is de volledige mappenstructuur van het project gevisualiseerd.

```
.github/workflows/               GitHub Actions workflows
assets/                          Bestanden die in het spel worden gebruikt
docs/                            Documenten
documentatie/                    Alle documentatie voor het project in markdown
└── Bijlagen/                      
    ├── Lessen/                  Notities over besprekingen in de lessen
    ├── Overig/                  Overige notities
    └── Sprint Meetings/         Notities van de sprint meetings
public/
src/                               
├── components/                  Alle A-Frame componenten
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
[ESLint](https://eslint.org/) zorgt ervoor dat de gehele codebase één code standaard aanhoudt. Deze regels hebben wij gedefinieerd in het bestand [.eslintrc.json](https://github.com/HU-ICT-LAB/VR-Cache/blob/master/.eslintrc.json). Deze regels kunnen indien nodig aangepast worden.

### Componenten
Componenten zijn herbruikbare modules of data-containers die aan entiteiten kunnen worden gekoppeld om uiterlijk, gedrag en/of functionaliteit toe te voegen. Alle logica wordt geïmplementeerd via componenten en we definiëren verschillende soorten objecten door deze te mixen, matchen en configureren.

Registreer een A-Frame component via ``window.AFRAME.registerComponent (name, definition)``, componenten moeten worden geregistreerd voordat ze ergens in de scene gebruikt kunnen worden.

Dit is anders dan een Web Component, een Web Component is echt een nieuwe HTML tag. Dat zou dan bijvoorbeeld ``<tree></tree>`` kunnen zijn, dit zou via een A-Frame component ``<a-entity tree></a-entity>`` zijn.

| Component              | Omschrijving                                                   |
|------------------------|----------------------------------------------------------------|
| player                 | Zorgt voor alle input en player movement                       |
| keyboard-input-handler | Zorgt voor het cachen op pc modus                              |
| oculus-input-handler   | Zorgt voor het cachen op de oculus quest                       |
| sonar-vibration        | Zorgt voor een sonar vibratie op de oculus quest               |
| cache                  | Geeft de attributes die de cache nodig heeft                   |
| cache-sound            | Speelt geluid af wanneer de speler in bereik van de cache komt |
| tree                   | Geeft de attributes die een boom object nodig heeft            |
| log                    | Geeft de attributes die een log object nodig heeft             |
| campfire               | Geeft de attributes die een campfire object nodig heeft        |
| border                 | Geeft de attributes die een border object nodig heeft          |

## Voortgang
We hebben tijdens het project verschillende milestones gepland. Hieronder is een overzicht te zien van welke milestones wel en niet behaald zijn.

### Milestones
- [x] [Basisfunctionaliteit geocaching](https://github.com/HU-ICT-LAB/VR-Cache/milestone/1)
- [x] [VR-Controller](https://github.com/HU-ICT-LAB/VR-Cache/milestone/4)
- [ ] [Six degrees of freedom](https://github.com/HU-ICT-LAB/VR-Cache/milestone/5)
- [ ] [Game score](https://github.com/HU-ICT-LAB/VR-Cache/milestone/6)
- [x] [Wereld: The Forest]()
- [ ] [Wereld: The Office]()

## Verder ontwikkelen

### Lokaal ontwikkelen
Om de applicatie lokaal verder te ontwikkelen en testen zonder iedere keer via GitHub pages de applicatie op te zetten kan je gebruik maken van [ngrok](https://ngrok.com/). Deze tool zorgt ervoor dat je lokale server vanaf andere devices geopend kan worden. Installeer de tool, loop door de installatie stappen van de applicatie en run de server met ``npm start``. Open een nieuwe commandline en voer het commando ``ngrok http 8000`` uit. Je zal vervolgens een 'Forwarding' url te zien krijgen die te bezoeken is via je Oculus Quest 2.

Als je tijdens het ontwikkelen gebruik wilt maken van de developer console is dit mogelijk door middel van [Chrome remote debugging](https://developer.chrome.com/docs/devtools/remote-debugging/). Wanneer je de Oculus Quest 2 met een USB naar USB-C kabel verbindt en vervolgens toestemming geeft dat deze uitgelezen mag worden, dan kan je via de url  ``chrome://inspect#devices`` in Google Chrome je device aanklikken en de developer console openen.

### Componenten toevoegen
Na het schrijven van nieuwe code moet het bestand toegevoegd worden als import in de [components.js](https://github.com/HU-ICT-LAB/VR-Cache/blob/development/src/components/components.js), deze staat als import in [index.js](https://github.com/HU-ICT-LAB/VR-Cache/blob/development/src/index.js).
Hieronder kan je zien waar die twee bestanden zich in de github-repository bevinden.
```
src/                    
├── components/                      
|   └── components.js
└── index.js 
```

### Objecten toevoegen

Om dit het beste te kunnen doen heb je de software [blender](https://www.blender.org/) nodig.

#### Stap 1:
Download een object van een site zoals [Free3d](https://free3d.com).

#### Stap 2:
Importeer het object in [blender](https://www.blender.org/).

<img src="/docs/import.png" alt="importeren voorbeeld" data-canonical-src="" height="400" />

*Blender importeren voorbeeld*

#### Stap 3:
In [blender](https://www.blender.org/) kan je het object aanpassen naar eigen voorkeur, en het vervolgens exporteren als een ``.gltf`` bestand. Hierbij is het belangrijk dat de format embedded is.

<img src="/docs/export.png" alt="exporteren voorbeeld" data-canonical-src="" height="250" />

*Blender exporteren voorbeeld*

#### Stap 4:
Zet het bestand in de ``/assets`` map, vervolgens kan je dit bestand aanroepen in de html code met het ``gltf-model`` attribuut:
```
<a-entity gltf-model="assets/{bestand-naam}.gltf"></a-entity>
```

#### Onze wereld
De stappen hierboven beschrijven hoe je een apart object in je wereld zet, maar dit is niet de methode die wij hebben gebruikt. Je zou onze wereld eigenlijk kunnen opsplitsen in een visuele kant en een interactieve kant. De visuele kant is de wereld die de speler kan zien, zoals de bomen, bergen en het kampvuur. Al die objecten bij elkaar bestaan uit één groot ``.gltf`` bestand die van tevoren is opgezet in [blender](https://www.blender.org/). De interactieve kant is wat de richter van de speler ziet, hiervoor gebruiken we de primitieve objecten die in [A-Frame](https://aframe.io/) beschikbaar zijn om als het ware een hitbox om het object heen te zetten. Om een [voorbeeld](#object-heeft-een-grotere-hitbox) te geven hebben we om een boomstronk een cilinder gezet. Vanuit de blender software lezen wij de coördinaten van elk object in de wereld, en vervolgens passen wij die toe op de primitieve objecten in de html code zodat ze op de goede positie staan. Tot slot hebben wij van elk primitief object de opacity op nul gezet zodat ze onzichtbaar zijn voor de speler.

### Geluid toevoegen
Allereerst is het nodig om het mp3-bestanden toe te voegen in de assets met daarin de url naar het mp3-bestand, vervolgens kan je geluid op twee verschillende manieren toevoegen.

#### Opties:
    
##### Optie 1
```
<a-sound src="url(click.mp3)"></a-sound>
```
Deze optie wordt vooral gebruikt als het geluid niet gebonden is aan een object, zoals fluitende vogels in de achtergrond of de stem die de objecten opnoemt.

Attributen:
- autoplay: Automatisch laten afspelen van het geluid, default ``false``.
- loop: Herhaling van het geluid, default ``false``.
- src: Bron van het geluid, dit moet de link zijn naar de mp3.
- volume: Volume van het geluid, default is ``1``.

Als het geluid positioneel wil gebruiken, dan moet je een ``position="x z y"`` attribuut meegeven. Om het geluid niet positioneel te maken moet  ``positional="false"`` toegevoegd worden, dit zorgt er voor dat het geluid over de hele map even duidelijk te horen is. 

##### Optie 2
```
<a-entity sound="src: url(click.mp3);"><a-entity>
```
Deze optie is handig als je de positie van het geluid wil binden aan een object, bijvoorbeeld in onze applicatie waar het kampvuur een knisperend geluid maakt.

### Limitaties
Tijdens de development van het project zijn er een aantal limitaties op ons pad gekomen, deze limitaties zitten vooral in [A-Frame](https://aframe.io/) en de browsers van de Oculus Quest 2.

#### A-Frame

##### Default richter (Laser)
De laser van [A-Frame](https://aframe.io/) is niet aanpasbaar, ook is deze laser zeer precies en kan er maar één object tegelijkertijd uitgelezen worden. Deze laser kan ook niet verwisseld worden met een zelf bedacht alternatief omdat het niet mogelijk is objecten uit te lezen met iets anders dan de [A-Frame](https://aframe.io/) laser.

##### Aantal objecten limiet
Bij gebruik van een groot aantal objecten daalt de framerate significant. Ook zijn er browsers die niks meer inladen zodra je over bepaalde limieten heen gaat, dit is browser specifiek. Dit heeft er voor gezorgd dat objecten zijn gegroepeerd op bestands niveau, dus de game ziet dit dan als één groot object.

##### Physics engine outdated
Om gebruik te maken van de [physics engine](https://github.com/n5ro/aframe-physics-system) moet er gebruik gemaakt worden van een oudere versie van [A-Frame](https://aframe.io/). Met het gebruik van een oudere versie is er geen ondersteuning en kan er geen gebruik gemaakt worden van nieuwe features. Hier is ook geen alternatief voor.

#### Browser Oculus Quest

##### Text-to-speech niet ondersteund
De standaard browser van Oculus heeft geen ondersteuning voor het gebruik van text-to-speech, als alternatief is er gebruik gemaakt van audio bestanden.

##### Geen extensies
Screen readers zijn er niet voor de Oculus browser, de website (home & settings page) is hierdoor op de Oculus Quest niet toegankelijk, dit zorgt ervoor dat mensen met een visuele beperking het spel niet zelf kunnen starten en aanpassen.

### Tools
- [Text-To-Speech](https://ttsmp3.com/text-to-speech/Dutch/) met als stem "Dutch / Lotte": Genereren van mp3 files voor het oplezen van de objecten.
- [draw.io](https://app.diagrams.net/): Maken van diagrammen.
- [Adobe Photoshop](https://www.adobe.com/nl/products/photoshop.html): Aanpassen/maken van afbeeldingen en een aantal assets.
- [blender](https://www.blender.org/): Aanpassen/converteren van 3D modellen.

## Bekende bugs
- [Timer UI gaat door objecten](https://github.com/HU-ICT-LAB/VR-Cache/issues/32)
- [Colliders krijgen een aparte offset bij het verplaatsen of draaien van objecten](https://github.com/HU-ICT-LAB/VR-Cache/issues/31)
- [Geluid van de cache kraakt]()
