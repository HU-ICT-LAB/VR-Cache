# Onderzoeksdocument

![Foto van VR Cache](/src/images/banner.png)

# Inhoudsopgave

1. [Inleiding](#inleiding)<br/>
2. [Organisatorische context](#organisatorische-context)<br/>
3. [Aanleiding](#aanleiding)<br/>
4. [Opdracht](#opdracht)<br/>
5. [Doelstelling](#doelstelling)<br/>
6. [Hoofdvraag](#hoofdvraag)
7. [Deelvragen](#deelvragen)<br/>
ㅤㅤ7.1. [Hoe pas je virtual reality toe op een toegankelijk manier voor mensen met een visuele beperking? (Robert)](#hoe-pas-je-virtual-reality-toe-op-een-toegankelijk-manier-voor-mensen-met-een-visuele-beperking-robert)<br/>
ㅤㅤ7.2. [Hoe ontwikkel je een virtual reality game in de browser door middel van A-Frame? (Misher)](#hoe-ontwikkel-je-een-virtual-reality-game-in-de-browser-door-middel-van-a-frame-misher)<br/>
ㅤㅤ7.3. [Wat is toegankelijkheid? (Jaimie)](#wat-is-toegankelijkheid-jaimie)<br/>
ㅤㅤ7.4. [Wat is een visuele beperking? (Samy)](#wat-is-een-visuele-beperking-samy)<br/>
ㅤㅤ7.5. [Op welke manier draagt toegankelijkheid in games bij aan minder ongelijkheden? (Thomas)](#op-welke-manier-draagt-toegankelijkheid-in-games-bij-aan-minder-ongelijkheid-thomas)
8. [Conclusie](#conclusie)
9. [Aanbevelingen](#aanbevelingen)
10. [Bronnen](#bronnen)

# Inleiding
VR is een begrip dat in deze tijd vaak naar boven komt. Elke keer als men over de toekomst praat dan wordt VR vaak als leidend voorbeeld genomen. Nu de metaverse op de horizon ligt en je ook steeds meer hoort over bedrijven die hun eigen vr brillen aan het ontwikkelen zijn is het dichterbij dan ooit. Dit klinkt natuurlijk allemaal heel gunstig in de oren, maar voor iemand die een visuele beperking heeft is dit een heel ander verhaal. Hoe zouden de visueel beperkte kunnen deelnemen aan deze toekomst?


# Organisatorische context
[Stichting Accessibility](https://www.accessibility.nl/), opgericht in 2001 als onderdeel van [Bartimeus](https://www.bartimeus.nl/), is een stichting die streeft naar een samenleving waarin iedereen zelfstandig mee kan doen in de maatschappij. [Bartimeus](https://www.bartimeus.nl/) richt zich op zorginstellingen en contact met cliënten, [Stichting Accessibility](https://www.accessibility.nl/) houdt zich bezig met onderzoek, ontwikkeling en voorlichtingen voor en met klanten zoals bedrijven en scholen. Binnen de [Stichting Accessibility](https://www.accessibility.nl/) wordt er [Agile](https://wikipedia.org/wiki/Agile-softwareontwikkeling) gewerkt met vier verschillende teams, één team als front office met daarnaast drie uitvoeringsteams. Deze teams zijn opgedeeld in twee verschillende categorieën, twee verantwoordelijk voor klanten en één verantwoordelijk voor projecten bij bedrijven en scholen.

![Organogram Stichting Accessibility](/docs/organogram-stichting-a11y.png)

## Betrokkenen

### [Veron Wormeester (opdrachtgever)](https://www.accessibility.nl/persoon/veron-wormeester)
Veron maakt deel uit van het projectteam binnen [Stichting Accessibility](https://www.accessibility.nl/) als projectleider en gebruikersonderzoeker. Hij is gespecialiseerd in het doen van onderzoek onder eindgebruikers. Veron is betrokken bij projecten op het gebied van educatie en projecten op het gebied van toegankelijke games.

### Mike Schipper en Nicolien van Rooijen
Mike en Nicolien zijn lid van een panel binnen [Stichting Accessibility](https://www.accessibility.nl/). Dit panel wordt ingezet om gebruiksonderzoeken te doen naar toegankelijkheid. Eén van Mike en Nicolien hun hobby's is gamen en zij kunnen helpen bij het testen van games.

# Aanleiding
Virtual reality wordt steeds populairder en ontwikkeld zich razendsnel, [Hogeschool Utrecht](https://www.hu.nl/) is hier al een langere tijd mee aan het experimenteren en de mogelijkheden aan het ontdekken. De [Hogeschool Utrecht](https://www.hu.nl/) werkt regelmatig samen met [Stichting Accessibility](https://www.accessibility.nl/) binnen de opleiding en vroegen zich af hoe kan virtual reality ingezet worden voor mensen met een visuele beperking. Hierdoor is [Hogeschool Utrecht](https://www.hu.nl/) in gesprek gegaan met [Stichting Accessibility](https://www.accessibility.nl/) om een project te ontwikkelen voor studenten van [Hogeschool Utrecht](https://www.hu.nl/).

# Opdracht
Binnen dit onderzoek willen wij erachter komen in hoeverre virtual reality ingezet kan worden voor mensen met een visuele beperking, zodat ze in de toekomst meer gebruik kunnen maken van virtual reality in het dagelijkse leven. Om deze reden gaan wij een [geocaching](https://wikipedia.org/wiki/Geocaching) spel ontwikkelen voor de browser door middel van het [A-Frame framework](https://aframe.io/). Deze kan gespeeld worden met virtual reality headsets met nadruk voor de Oculus Quest 2.

## Scope van het onderzoek
Wij gaan ons bezighouden met toegankelijkheid binnen virtual reality. Toegankelijkheid is een heel breed begrip, wij gaan ons in het specifiek focussen op mensen met een visuele beperking. Voor dit onderzoek gebruiken we [A-Frame](https://aframe.io/) als framework om een virtual reality geocaching spel mee te ontwikkelen, waarin de speler opzoek gaat naar een cache.

# Doelstelling
Het doel van dit onderzoek is om uit te vinden wat er allemaal mogelijk is in virtual reality voor mensen met een visuele beperking en hoe dit in de toekomst ingezet kan worden op verschillende manieren. Op dit moment is er nog heel weinig bekend over toegankelijkheid binnen virtual reality. We hopen met dit onderzoek bij te dragen aan de toegankelijkheid binnen virtual reality en dat dit ingezet kan worden in het dagelijks leven.


# Hoofdvraag
Wat is een geschikte manier om een virtual reality geocaching spel te ontwikkelen in de browser op basis van [A-Frame](https://aframe.io/) zodat mensen met een visuele beperking het ook kunnen spelen?

# Deelvragen

## Hoe pas je virtual reality toe op een toegankelijk manier voor mensen met een visuele beperking? (Robert)

### Aanpak
Hoe je virtual reality toegankelijk maakt voor mensen met een visuele beperking kunnen we op twee manieren onderzoeken. Onze eerste informatiebron is ons contactpersoon Mike, hij heeft zelf een visuele beperking en interesse in videogames. Door middel van [interviews](https://ictresearchmethods.nl/Interview) kunnen we een goed perspectief krijgen op wat slechte en goede hulpmiddelen zijn voor visueel beperkte spelers in videogames, zodat we dit kunnen toepassen in virtual reality. Onze tweede informatiebron zal door middel van [community research](https://ictresearchmethods.nl/Community_research) zijn. Er zijn veel communities op het internet die ervaring hebben op het gebied van visueel beperkte videogames, zij kunnen helpen het perspectief wat we met Mike hebben te verbreden naar een grotere doelgroep.

### Resultaten
<details>
  <summary>Interview met Mike</summary>
  Op 6 april hadden we onze eerste meeting met Mike. In deze meeting hebben we hem geïnterviewd over het toegankelijk maken van games.

  #### Interview:

  ##### *Heb je zelf een paar voorbeelden van games die goed toegankelijk zijn?*
  - Horizon Zero Dawn
  - The Last Of Us II
  - [Swamp](https://www.youtube.com/watch?v=4YVvvPGKsA0)
  - [AudioGames.net](https://audiogames.net/list-games/)

  Er zijn eigenlijk twee manieren hoe games voor visueel beperkte worden gemaakt. De eerste manier is als de game gericht is op inclusiviteit dit betekent dat de game  gedeeltelijk te spelen is voor visueel beperkte, maar dat er sommige punten zijn die worden overgeslagen of de speler wordt geholpen. De tweede manier is als een      game op toegankelijkheid is gericht, dit betekent dat de game in zijn volledigheid te spelen is door iemand met een visuele beperking.


  ##### *Hoe maak je geluiden duidelijk en onderscheidbaar?*
  Zorg ervoor dat objecten een realistisch natuurlijk geluid hebben, zoals als je op hout klopt dat het ook echt klinkt alsof je op hout klopt.

  ##### *In de game is er een kompas, hoe maak je die het beste toegankelijk?*
  Het liefst zou je willen dat je iets van een knop ingedrukt houdt die ervoor zorgt dat er een 3D sound wordt afgespeeld van waar de cache zich bevindt. Als alternatief zou je ook kunnen toepassen dat er een geluid afspeelt als je de goede kant op kijkt.

  ##### *Hoe zou het aangegeven moeten worden als je tegen een muur aanloopt?*
  Je zou dan net zoals eerder beschreven een natuurlijk bonk geluid moeten horen van het materiaal waar je tegen aan loopt.

  ##### *Wat maakt een menu goed of slecht?*
  Het is belangrijk om het menu goed te ordenen en een goede logische plaatsing te hebben van de knoppen. Veel games hebben in de menu's dezelfde knop posities voor de verschillende opties, zoals dat de verdergaan knop altijd bovenaan staat. Dit zorgt er voor de een menu natuurlijk aanvoelt.

  ##### *Ambient sounds, zijn ze storend of helpen ze?*
  Ambient sounds zijn heel belangrijk voor het schetsen van de omgeving. Een tekst omschrijving van de omgeving kan ook van grote toegevoegde waarde zijn.
  Geluid van wind als er een opening links of rechts is 
  Geluid van takjes of grond waar je op loopt

  ##### *Is een tutorial handig (Interactief of tekst)?*
  Interactief is de beste manier om het spel uit te leggen, de speler kan zelf kiezen hoeveel die er mee doet.

  ##### *Qua map design, wat wel en niet?*
  Als je een bos als voorbeeld zou nemen. Dan is het erg belangrijk dat je ook daadwerkelijk merkt dat je in een bos staat. Een tekst omschrijving van waar de speler  zich begeeft zou handig kunnen zijn. Ook is het belangrijk dat de correcte omgevingsgeluiden toegepast worden zoals vogeltjes die zingen, wind door de bomen horen gaan en takjes die je hoort kraken als je erop loopt.
</details>

<details>
  <summary>Testen met Nicolien</summary>
  
  Nicolien is een vriendin van Mike, en ze is onderdeel van het panel binnen Stichting Accessibility. Ze heeft last van een tunnel visie, dit betekent dat ze alleen     goed zicht heeft op het midden van haar gezichtsveld. Op het gebied van virtual reality heeft ze nog geen ervaring, dus ze was erg enthousiast om het spel uit te testen. We hebben haar een aantal opties gegeven tijdens de test:
  
  ##### *Optie 1: automatisch uitlezen van objecten*
  Tijdens de eerste test run had ze nog een beetje moeite met de besturing van de game, desondanks had ze wel al een paar opmerkingen over het spel. Door het automatisch oplezen had ze het gevoel alsof ze overladen werd met informatie. 
  
  ##### *Optie 2: vibratie collision en automatisch uitlezen van objecten*
  In de tweede test run ging het al een stuk beter. Ze was erg enthousiast over de vibratie, omdat ze echt het gevoel kreeg dat ze de objecten aanraakte.
  
  ##### *Optie 3: vibratie collision en uitlezen van objecten verbonden aan een knop*
  Deze test run vond Nicolien het best. Ze kreeg eigenlijk het beste van optie 1 en optie 2 gecombineerd. Zelf omschreef ze dat de vibratie haar goed hielp met het navigeren, en dat ze tegelijkertijd niet overladen werd met informatie.
  
  ##### *Opmerkingen*
  - Een kleine uitleg aan het begin van het spel.
  - Geluid van de cache mag harder.
  - De cache mag van verder weg te horen zijn.
  
</details>

<details>
  <summary>Testen met Mike</summary>
  
  Mike is ons contactpersoon in dit onderzoek, en hij is ook onderdeel van het panel binnen Stichting Accessibility. Hij is in zijn jongere jaren blind geworden. Integendeel van Nicolien heeft Mike wel al ervaring in virtual reality, ook heeft hij veel videogame ervaring met zijn eigen YouTube kanaal. We hebben niet alle opties aan Mike voorgelegd, omdat we na het testen met Nicolien opties hadden gewijzigd of hebben weggehaald.
  
  ##### *Optie 1: automatisch uitlezen van objecten*
  Bij de eerste test run had Mike net als bij Nicolien nog een beetje moeite met het oriënteren van zichzelf in de map. Met een klein beetje hulp kon hij de cache vinden. Hij vond het automatisch oplezen ook net als Nicolien te veel informatie tegelijkertijd.
  
  ##### *Optie 2: vibratie collision en uitlezen van objecten verbonden aan een knop*
  Nu Mike een beeld had van het spel kon hij de cache een stuk sneller vinden, hij vond de vibratie behulpzaam. Het geluid van de cache was voor Mike wel een leidend middel om de cache te vinden.
  
  ##### *Opmerkingen*
  - Meer geplaatste omgevingsgeluiden.
  - Duidelijke aanduiding als je tegen de wereldborder aanloopt.
  
  
</details>
  
#### Community research:
In de game accessibility(IGDA-GASIG) groep op discord werd ons door een van de members een [pagina](https://whitethorngames.com/accessibility) doorgestuurd als hulpmiddel voor ons project. De [pagina](https://whitethorngames.com/accessibility) is van een indie game uitgever [Whitethorn Games](https://whitethorngames.com/#about-1-section). Hun doel als een indie game uitgever is om games te maken die simpel zijn en gespeeld kunnen worden door iedereen. Op de [pagina](https://whitethorngames.com/accessibility) die ons was doorgestuurd werd uitgebreid uitgelegd welke strategieën ze hebben gebruikt om hun games accesible te maken. Om een voorbeeld te geven hebben ze in de game [APICO](https://whitethorngames.com/apico) een functie toegevoegd die de optie geeft om door bomen heen te kunnen lopen in het spel, waardoor je geen rekening meer hoeft te houden of de speler ergens achter zou kunnen blijven haken en niet meer zou kunnen bewegen. Ook hebben ze aan functies gedacht die niet alleen voor mensen met een beperking handig zijn maar voor iedereen, zoals de functie dat je elke button kan herpositioneren op een andere button.

### Deelconclusie
In het interview kwam naar voren dat het belangrijk is om geluid op een functionele manier toe te passen. De voorbeelden die Mike gaf met de 3d sound van de cache en de ambient geluiden in de omgeving zijn erg belangrijk om je te kunnen oriënteren in de map. Ook kwam naar voren dat hoe dichter de geluiden bij de werkelijkheid komen hoe makkelijker het is om een beeld te schetsen van je omgeving, bijvoorbeeld dat je in een bos de wind door bomen hoort gaan en dat je vogels hoort zingen. Maar ook dat je objecten logische natuurlijke geluiden geeft om de speler te laten weten waar die mee interacteert.

Uit de testen konden we concluderen dat we op het gebied van geluiden goed onderweg waren, maar er waren wel nog een paar andere tekortkomingen. Een tutorial is erg belangrijk aan het begin van het spel zodat de speler gelijk begrijpt wat alle geluiden en knoppen betekenen, Ook moet je rekening houden met de hoeveelheid aan informatie die je geeft aan de speler. Te veel of te weinig informatie kunnen beide de speler in verwarring brengen, daarom is het belangrijk om veel te testen met de doelgroep. 

Verder in het onderzoek is ook naar voren gekomen dat het erg belangrijk is om de speler vrijheid te geven. Je kan wel handige functies toevoegen aan je game die je zelf erg toepasselijk vindt, maar uiteindelijk is het de speler die bepaald of de functies daadwerkelijk van toepassing zijn. Ook hebben we gezien dat in accessibility er niet alleen gedacht wordt aan de mensen met een beperking, maar dat er ook aandacht gegeven wordt aan de mensen zonder een beperking met universele functies die voor iedereen handig zijn zoals het kunnen herpositioneren van je input knoppen.

## Hoe ontwikkel je een virtual reality game in de browser door middel van A-Frame? (Misher)

### Aanpak
Om te leren hoe je een virtual reality spel kan maken op basis van A-Frame hebben we besloten om twee onderzoeksmethodes te gebruiken. De eerste is [literature study](https://ictresearchmethods.nl/Literature_study). Op de website van A-Frame staat de documentatie die we kunnen gebruiken om A-Frame goed te kunnen begrijpen.

Ook kunnen we Stackoverflow raadplegen voor meer specifieke vragen die we zullen hebben. De tweede onderzoeksmethode die zeker belangrijk is voor ons is [best good and bad practices](https://ictresearchmethods.nl/Best_good_and_bad_practices), dit betekent namelijk dat wij gaan kijken hoe andere projecten bepaalde functionaliteiten op een goede manier hebben toegepast, daarna kunnen wij die ook toepassen in ons project. A-Frame is een nieuw concept voor ons, dus als we kunnen gebruiken wat anderen al hebben ontdekt zou dat ideaal zijn.

### Resultaten
Met ons onderzoek hebben we het volgende gevonden: <br>
#### De map
In onze map hebben we boomstammen, bomen, kaart randen, een cache die in deze spel in de vorm van een klein kist komt en een kampvuur.
We hebben gebruikt gemaakt van [gltf](https://www.khronos.org/gltf/) bestanden om deze objecten in de map te krijgen. Wij hebben de hele map in [Blender](https://www.blender.org/about/) gemaakt, wij hebben de gltf bestanden van de objecten in Blender geïmporteerd, alles behalve de cache op een positie gezet en opgeslagen dus onze hele map is 1 gltf bestand zoals u hier kunt zien: <br>    ```<a-entity id="world" gltf-model="assets/world.gltf" scale="0.3 0.3 0.3"></a-entity>```

Voor de cache hebben wij iets anders gedaan, als de user deze spel meerdere keren wilt gaan spelen en de cache op dezelfde positie zit is de spel niet meer leuk dus we hebben het volgende gedaan voor de positie van de cache: <br>
In de cache.js file hebben wij een lijst van mogelijke posities gedefineerd.
```  
const positions = [{position: "-13.43007 -0.00483 -5.78539", rotation: "0 37.83 0"}, 
   {position: "-6.52414 -0.00483 -9.61352", rotation: "0 37.83 0"}, 
   {position: "0.97651 -0.00483 -11.41705", rotation: "0 0 0"}, 
   {position: "9.16316 -0.00483 -12.47704", rotation: "0 -36.94 0"}, 
   {position: "13.40126 -0.00483 -7.60519", rotation: "0 -60.94 0"}, 
   {position: "12.07774 -0.00483 8.65857", rotation: "0 -127.14 0"}, 
   {position: "5.349 -0.00483 8.002", rotation: "0 -127.140 0"}, 
   {position: "-7.877 -0.00483 11.000", rotation: "0 -216.710 0"}]; 
``` 
Daarnaast wordt er in de [registerComponent](https://aframe.io/docs/1.3.0/core/component.html#aframe-registercomponent-name-definition) methode een willekeurige positie gekozen.
``` 
const random = Math.floor(Math.random() * positions.length); 
this.el.setAttribute("position", positions[random].position); 
``` 


Omdat de raycaster alleen met [primitieve objecten](https://aframe.io/docs/1.3.0/introduction/html-and-primitives.html#primitives) kan interageren hebben we hotboxen in de positie van de bomen, boomstammen gezet in de vorm van cilinders en hotboxen in de vorm van box voor de map randen dus je kunt de boom gewoon zien maar er zit nog een cilinder in de positie van de boom puur voor interactie een voorbeeld hiervan is het volgende: <br>
``` 
<a-cylinder class="interactable" id="tree29" tree position="28.5246 0 -32.9995"></a-cylinder> 
``` 
#### Interactie met de cache
De doel van de spel is om de cache te vinden daarvoor moesten wij een manier bedenken waarbij je met de cache kan interacteren.
Je moet wel binnen een bepaalde afstand van de cache zijn om met de cache te kunnen inerageren en daarvoor hebben wij de klasse "Vector3D" in deze klasse kan de afstand tussen de speler en een bepaalde positie berekend worden als de positie van de cache in deze klasse meegegeven wordt kunnen wij de afstand tussen de speler en de cache weten.
En nu dat we het afstand van de cache en de speler kan weten kunnen wij dit berekening doen wanneer een bepaalde knop ingedrukt wordt en dit doen we in het interact methode van het "keyboard-input-handler.js" file.

``` 
if (e.key === "e") { 
  const playerPosition = document.querySelector("[camera]").object3D.position; 
  const cachePosition = document.getElementById("cache").object3D.position; 
 
  const result = new Vector3D( 
   cachePosition.x - playerPosition.x, 
   cachePosition.y - playerPosition.y, 
   cachePosition.z - playerPosition.z 
   ); 
 
  if (result.magnitude() <= 3) { 
    window.location.href = "./succes.html"; 
  } 
} 
 
``` 

Zoals u in de code voorbeeld kunt zien als de knop "e" gedrukt wordt, wordt de positie van de speler en de cache meegegeven aan de Vector3D daarna wordt er gecontroleerd als de uitkomst van de berekening gelijk aan 3 of minder dan 3 is, als dat waar is heb je een succesvol interactie gehad met de cache en je wordt naar een andere pagina gestuurd.

#### Geluid
Voor de geluid in de spel hebben wij [MP3](https://nl.wikipedia.org/wiki/MP3#:~:text=MP3%20-%20Wikipedia%20MP3%20MP3%20%28officieel%20MPEG-1%20Audio,Group%29%20uit%201992%2C%20waarvan%20implementaties%20bestaan%20sinds%201994.) files van de benodigde geluiden gedownload en in de project gezet.
In deze project hebben wij geluid gebruikt in de volgende manieren:
1. Om de object de object die met de [raycaster](https://github.com/aframevr/aframe/blob/master/docs/components/raycaster.md) botst te benoemen. Er is voor iedere object een mp3 file waarin de naam van de object uitgesproken wordt. How we dit hebben geregeld is als de raycaster een botsing heeft met een object wordt een event gegooid genaamd "raycaster-intersected", elke object heeft een event listener die naar de genoemde event luistert, in de event listener wordt de naam van die object opgeslagen in de [sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage), de volgende is een code voorbeeld van de tree.js file.
``` 
this.el.addEventListener("raycaster-intersected", function () { 
         sessionStorage.setItem("object", "boom"); 
         document.getElementById("right").components.haptics.pulse(0.5, 50); 
      }); 
``` 

En in de "object-sound-handler" component wordt er gekeken naar welke object naam opgeslagen is in de sessionStorage en die naam spreekt het spel uit.
``` 
switch (sessionStorage.getItem("object")) { 
         case "boom": 
            document.getElementById("boomSoundAsset").components.sound.playSound(); 
            break; 
         case "kleineBoomstam": 
            document.getElementById("kleineBoomstamSoundAsset").components.sound.playSound(); 
            break; 
         case "kampvuur": 
            document.getElementById("kampvuurSoundAsset").components.sound.playSound(); 
            break; 
         case "wereldborder": 
            document.getElementById("wereldborderSoundAsset").components.sound.playSound(); 
            break; 
         default: 
            break; 
         } 
``` 
2. Om een indicatie van de locatie van de cache te kunnen krijgen vanuit een bepaalde afstand. Er is een vaste afstand van de cache vastgelegd waarbij de geluid van de cache hoorbaar is.

``` 
const DISTANCE_TO_HEAR = 10; 
``` 

De cache krijgt een mp3 file toegewezen in zijn registerComponent methode.
``` 
this.el.setAttribute("sound", "src: assets/CacheGeluid.mp3; autoplay: true; loop: true; maxDistance: 10000; rolloffFactor: 3; volume: 1;"); 
``` 
Na elke frame wordt er gecontroleerd als de afstand klein genoeg is om de cache te kunnen horen. Om de afstand tussen de speler en cache te berekenen gebruiken we de klasse Vector3D.
``` 
const playerPosition = document.getElementById("rig").object3D.position; 
const cachePosition = document.getElementById("cache").object3D.position; 
 
const result = new Vector3D( 
   cachePosition.x - playerPosition.x, 
   cachePosition.y - playerPosition.y, 
   cachePosition.z - playerPosition.z 
); 
 
this.inSoundDistance = result.magnitude() <= DISTANCE_TO_HEAR; 
``` 

Als inSoundDistance true is en als de geluid niet al aan het spelen is dan wordt de cache geluid gespeeld anders niet.
``` 
if (this.inSoundDistance && !this.inSoundDistanceTriggered) { 
         document.querySelector("#cache").components.sound.playSound(); 
         this.inSoundDistanceTriggered = true; 
      } else if (!this.inSoundDistance) { 
         document.querySelector("#cache").components.sound.stopSound(); 
         this.inSoundDistanceTriggered = false; 
      } 
``` 
En omdat de geluid direct van de cache komt kan je een indicatie krijgen van waar de cache is.

3. Er wordt constant een achtergrond geluid gespeeld, die mp3 file is direct toegewezen naar de scene.
``` 
<a-sound id="backgroundnoise" sound="positional: false" src="assets/forest.mp3" autoplay="true" loop="true" volume="0.1"></a-sound> 
``` 
4. Elke keer dat de user een stap doet in het spel wordt een stap geluid uitgespeeld. Als de user de thumbstick in een bepaalde richting beweegt wordt er een event gegooid genaamd "thumbstickmoved", in de "player-sound" component is er een event listener die luister naar de genoemde event van de beweging van de thumbstick, in deze functie wordt het geluid van de toegewezen mp3 file afgespeeld.

``` 
if (this.walking && !this.alreadyWalking) { 
         document.getElementById("playerWalkingsoundAsset").components.sound.playSound(); 
         this.alreadyWalking = true; 
      } else if (!this.walking) { 
         document.getElementById("playerWalkingsoundAsset").components.sound.stopSound(); 
         this.alreadyWalking = false; 
      } 
``` 
Als de speler aan het lopen is en als het geluid niet al gespeeld werd wordt het lopen geluid afgespeeld anders niet.
#### Vibratie
Om vibratie in de spel te hebben wij [aframe-haptics-component](https://www.npmjs.com/package/aframe-haptics-component) geimporteerd.
Met hulp van het aframe haptics component kunnen we de volgende stuk code runnen en vibratie krijgen bij de controller: <br>
``` 
this.el.components.haptics.pulse(force, duration); 
``` 

Deze vibratie was zeer hulpvaardig in het aantonen van een botsing tussen de raycaster en een andere object en onze sonar functie.

##### Sonar
Deze functionaliteit was bedacht met de bedoeling om de user een indicatie te geven van de afstand tussen de speler en de cache in de vorm van vibratie.
In deze functie wordt de positie van de cache en de speler gegeven aan de Vector3D om de afstand tussen de speler en cache te berekenen.


``` 
const cachePosition = document.getElementById("rig").object3D.position; 
const playerPosition = document.getElementById("cache").object3D.position; 
 
const result = new Vector3D( 
   cachePosition.x - playerPosition.x, 
   cachePosition.y - playerPosition.y, 
   cachePosition.z - playerPosition.z 
); 
 
pulse = 1300 - result.magnitude() * 65; 
   if (pulse > 0) { 
      this.el.components.haptics.pulse(0.5, pulse); 
   } 
``` 
Met de antwoord van de Vector3D berekening wordt de pulse berekend en daarna wordt het pulse gebruikt om de tijdsduur van de vibratie te bepalen dus hoe groter de afstand hoe langer de vibratie.

#### Hosting
Om een applicatie op de internet te hebben moet het natuurlijk ook gehost worden. Voor de [hosting](https://www.techopedia.com/definition/29023/web-hosting) hebben wij gekozen voor [Github Pages](https://pages.github.com/). Github Pages is van [Github](https://github.com/) zelf, is gratis en makkelijk om te gebruiken.
Omdat wij github gebruikt voor de versiebeheer van onze applicatie heeft github onze code al dus als wij later iets pusht wordt de gehoste applicatie meteen bijgewerkt.

### Deelconclusie
In dit onderzoek is gezocht naar een antwoord op de vraag: ‘Hoe ontwikkel je een virtual reality game in de browser door middel van A-Frame?’. Uit het onderzoek is gebleken dat A-Frame gebaseerd is op HTML en Javascript. Je kan ook je eigen componenten maken met hun eigen unieke gedrag die ook met elkaar kunnen communiceren, geluid was al ingebouwd en makkelijk aanpasbaar.
Je kan ook aparte componenten importeren bijvorbeeld aframe-haptics-component en veel anderen.
Dus we konden zien dat het ontwikkelen van een virtual reality game in de browser door middel van A-Frame mogelijk is en vrij eenvoudig.


## Wat is toegankelijkheid? (Jaimie)

### Aanpak
Om erachter te komen hoe je een virtual reality spel toegankelijk maakt is het noodzakelijk om goed in kaart te hebben wat er precies onder die term valt en ook juist wat hier niet onder valt. Om dit te onderzoeken zal er voornamelijk [literature study](https://ictresearchmethods.nl/Literature_study) gedaan worden om goed in kaart te brengen wat deze term inhoudt. Er zijn ook verschillende organisaties die hier veel mee bezig zijn die we kunnen [interviewen](https://ictresearchmethods.nl/Expert_interview) om hier meer informatie over te vergaren.

### Resultaten
Wanneer je op zoekt gaat naar de term 'toegankelijkheid' kom je veel verschillende pagina's tegen die omschrijven wat dit precies inhoudt, ook zal je veel tegen de term 'inclusiviteit' aanlopen. Wat houden deze twee termen precies in? Bij het onderzoeken hiervan hebben we verschillende bronnen geraadpleegd die vrij te verkrijgen zijn op het internet. We hebben ook gesproken met verschillende experts in het gebied van toegankelijkheid en inclusiviteit zodat we een beter beeld konden krijgen wat deze termen nou precies inhouden.

Toegankelijkheid houdt in dat ongeacht je lichaam, beperking of geen beperking, je gebruik kan maken van hetgeen dat je wilt gebruiken. De term toegankelijkheid komt voor in verschillende vormen:

**Digitale toegankelijkheid**<br/>
Bij deze term gaat het erom dat iedereen gebruik kan maken van het internet, websites, apps, telefoons en dergelijk. Een blind persoon kan wanneer een website niet toegankelijk is deze niet navigeren. Wanneer een website digitaal toegankelijk is betekent dit dus dat iedereen deze kan navigeren ongeacht je lichaam en eventuele beperkingen.

**Fysieke toegankelijkheid**<br/>
Mensen maken in het dagelijks leven gebruik van woningen, openbaar vervoer, winkels en dergelijk. Hier is waar fysieke toegankelijkheid komt kijken. Een fysiek toegankelijke winkel is bijvoorbeeld volledig ingericht dat deze te bezoeken is voor mensen met een rolstoel, zodat zij ook zelf zonder ondersteuning van anderen in deze winkel kunnen gaan winkelen. 

**Sociale toegankelijkheid**<br/>
Buiten digitale en fysieke toegankelijkheid heb je ook nog de term sociale toegankelijkheid. In Nederland alleen al hebben 1 op de 6 mensen last van laaggeletterdheid, deze mensen hebben moeite met lezen en schrijven. Wanneer een website, handleiding of dergelijk erg moeilijke woorden of zinnen gebruikt kan dit erg lastig te begrijpen zijn voor deze mensen. Hier spreken we dan over sociale toegankelijkheid. Bij sociale toegankelijkheid gaat het er om dat de juiste woorden worden gebruikt en deze ook makkelijk te begrijpen zijn.

Een andere term die vaak samen wordt gebruikt met toegankelijkheid is 'inclusiviteit'. Bij inclusiviteit houd je rekening met de diversiteit aan doelgroepen. Een digitale dienst die volledig toegankelijk is gemaakt volgens de richtlijnen betekent niet dat het voor alle doelgroepen automatisch ook toegankelijk is. Een voorbeeld hiervan is wanneer een inschrijfformulier op een website volledig is gemaakt volgens de digitale richtlijnen, maar bij de optie geslacht alleen 'Man' en 'Vrouw' weergeeft. In dit geval spreek je van een toegankelijk formulier maar niet inclusief. Om dit formulier ook inclusief te maken kan je in plaats van vragen om het geslacht ook vragen om de aanspreekvormen of je kan extra opties aanbieden waarbij de persoon een vrijere invoer kan ingeven.

### Deelconclusie
Uit alle bronnen en gesprekken met deskundigen is het gelukt om een duidelijke definitie van het woord 'toegankelijkheid' te vinden en dit duidelijk te onderscheiden van inclusiviteit. Toegankelijkheid houdt in dat ongeacht je lichaam, beperking of geen beperking, je gebruik kan maken van hetgeen dat je wilt gebruiken alleen dit is niet gericht op het individu. Wanneer je meer gaat kijken naar het individu heb je het dus over inclusiviteit.

## Wat is een visuele beperking? (Samy)

### Aanpak
Wij gaan een game maken voor mensen met een visuele beperking, maar wat is visuele beperking? Om erachter te komen wat dat inhoudt, kunnen we daarvoor [literature study](https://ictresearchmethods.nl/Literature_study) gebruiken. Bij het gebruiken van die methode worden er allerlei bronnen verzameld en vervolgens een samenvatting gemaakt van belangrijke stukken. Ook kunnen we de [Survey](https://ictresearchmethods.nl/Survey) methode gebruiken om deze deelvraag te beantwoorden. Bij deze methode gaan we dan de doelgroep (Mike en Nicoline) ondervragen om informatie te vergaren en proberen in te beelden hoe het is om visueel beperkt te zijn.
### Resultaten
Er bestaan veel verschillende beperkingen, maar de beperking die bij onze doelgroep het meest voorkomt is slechtziend en blindheid. Bij het opzoeken van wat visuele beperking precies inhoudt, komt je vier verschillende soorten visuele beperkingen tegen.

- **Kleurenblind** <br/>
Mensen die kleurenblind zijn, hebben problemen met het onderscheiden van verschillen tussen kleuren en soms het ontbreken van kleurwaarneming. Dus kleurenblindheid is eigenlijk een verkeerde naam. Daarom wordt vaak de term kleurenzienstoornis gebruikt, want blind in kleuren zijn ze niet. Kleurenblindheid komt veel voor. 8% van de mannen in Nederland lijdt aan enige vorm van kleurenblindheid. Bij vrouwen ligt het cijfer veel lager: 0,5%. Kleurenblindheid is genetisch gerelateerd aan seks. Dit betekent dat het kind het via de moeder van de grootvader kan erven. Oorzaak kleurenblind zijn is dat er een fout zit in de kegeltjes (kleine cellen op het netvlies). Deze kegeltjes schakelen niet goed, waardoor je de kleuren niet ziet zoals ze in werkelijkheid zijn. Kleurenblindheid is niet te genezen.

- **Slechtziend** <br/>
Mensen die slechtziend zijn, kunnen minder dan 30% zien of heeft een gezichtsveld dat kleiner is dan 30 graden. Ze hebben een onscherp zicht, kokervisie en verlies van het centrale zien. Een normaal gezichtsveld is 140 graden. De visuele beperking kan niet worden gecorrigeerd door het dragen van een bril of contactlenzen. De meest voorkomende oorzaken van slechtziendheid zijn maculadegeneratie, diabetische retinopathie en glaucoom.

- **Blind** <br/>
Mensen die blind zijn, kunnen minder dan 5% zien, dat is ongeveer het kunnen tellen van vingers op 1 meter afstand. Of hun gezichtsveld is beperkt tot minder dan 10 graden; dat noemen we ook wel maatschappelijk blind. Een normaal gezichtsveld is 140 graden. Blindheid kan bij geboorte al gekregen zijn of in de loop van het leven door een ziekte of ongeval.

- **Doofblind** <br/>
Mensen die doofblind zijn, horen en zien niet goed, dus een combinatie van blind-/slechtziendheid. Dit heeft grote invloed op hun leven, want het belemmert mensen in hun communicatie, het vergaren van informatie en bewegelijkheid. De meeste met deze aandoening kunnen nog wel wat zien horen, een klein aantal zijn compleet doof en blind. Bij het zien is hun gezichtsveld kleiner dan 30 graden, en bij het horen is er sprake van 35 decibel verlies aan gehoor. Doof blindheid kan verschillende oorzaken hebben: door syndroom van Usher, trauma, hersenvliesontsteking, ziekte, vroeggeboorte en congenitale rebellavirus.

![Foto van tabel visuele beperking in NL](https://i.ibb.co/tcJK1g6/overzicht-visulebeperking-nl-new.png) <br/>
*Overzicht van visuele beperking in Nederland*

### Deelconclusie
Na het bestuderen en ondervragen over visuele beperking in het groot, ben ik tot conclusie gekomen dat het vier verschillende soorten bevat (kleurenblind, blind, slechtziend en doofblind). Alle vier hebben verschillen, maar ook overeenkomsten in oorzaken. Visueel beperkt zijn houdt in dat het zicht van een persoon enigermate beperkt is. Mensen kunnen ook gedeeltelijk beperkt zijn, dat betekent dat zij meer zien dan een volledig beperking. Ook is er naar voren gekomen dat niet alle soorten ongeneesbaar zijn, want tegen slechtziendheid is er wel een behandeling het zicht wordt gedeeltelijk verbeterd door chirurgische procedures. Aan de hand van de foto hierboven kan ik concluderen, dat kleurenblinden het meest voorkomen in Nederland.

## Op welke manier draagt toegankelijkheid in games bij aan minder ongelijkheid? (Thomas)

### Aanpak

Om erachter te komen hoe toegankelijkheid in games bijdraagt aan minder ongelijkheid gaan wij op twee manieren onderzoeken. Om dit te onderzoeken zal er een [survey](https://ictresearchmethods.nl/Survey) gedaan worden onder visueel beperkten die gamen, in deze enquête ligt de nadruk vooral op ongelijkheid. Dit is op meerdere platforms en communities geplaatst, waaronder Discord, Reddit en Facebook. 

### Resultaten

**Enquête "Zorgt toegankelijkheid in games voor minder ongelijkheid?".**

De [enquête](https://forms.gle/og7QvZFB7WMh2ZuJ8) is gemaakt in [google formulieren](https://www.google.nl/intl/nl/forms/about/). In totaal hebben wij 21 antwoorden binnengekregen. De gemiddelde leeftijd van de ondervraagden was 26 jaar, daarvan was de oudste 41 en de jongste 16. 

#### Heb je een beperking?

De twee meest gegeven antwoorden zijn visuele beperking en blindheid.

<details>
  <summary>Grafiek</summary><br/>
  <img src="/docs/google_form/1_Do_you_have_any_kind_of_disability.png" alt="Grafiek vraag 1"/>
</details>

#### Wat voor spellen speel je?

Het meest gegeven antwoorden is audio spellen, daarna platformer en role-playing.

<details>
  <summary>Grafiek</summary><br/>
  <img src="/docs/google_form/2_What_kind_of_games_do_you_play.png" alt="Grafiek vraag 2"/>
</details>

#### Waarom speel je spellen?

De drie meest gegeven antwoorden zijn "Om te relaxen", "Uit verveling" en "Spelen met vrienden".

<details>
  <summary>Grafiek</summary><br/>
  <img src="/docs/google_form/3_What_makes_you_want_to_play_a_game.png" alt="Grafiek vraag 3"/>
</details>

#### Wanner ik een spel niet kan spelen vanwege slechte toegankelijkheid dan voel ik mij buitengesloten.

De meerderheid is het hier mee eens.

<details>
  <summary>Grafiek</summary><br/>
  <img src="/docs/google_form/4_When_I_cant_play_a_game_due_to_bad_accessiblity_this_make_me_feel_left_out.png" alt="Grafiek vraag 4"/>
  <p> 1 = Oneens | 5 = Eens </p>
</details>

#### Wanneer mijn vrienden over spellen praten die ik niet kan spelen vanwege slechte toegankelijkheid dan voel ik mij buitengesloten.

De meerderheid is het hier mee eens.

<details>
  <summary>Grafiek</summary><br/>
  <img src="/docs/google_form/5_When_my_friends_talk_about_games_that_I_cant_play_due_to_bad_accessiblity_it_makes_me_feel_left_out.png" alt="Grafiek vraag 5"/>
  <p> 1 = Oneens | 5 = Eens </p>
</details>

#### Ik zou willen dat meer spellen toegankelijk waren.

De meerderheid is het hier mee eens.

<details>
  <summary>Grafiek</summary><br/>
  <img src="/docs/google_form/6_I_wish_more_games_would_be_accessible.png" alt="Grafiek vraag 6"/>
  <p> 1 = Oneens | 5 = Eens </p>
</details>

#### Wanneer een spel toegankelijk is voel ik mij meer geaccepteerd door de "Gaming community".

De meerderheid is het hier mee eens.

<details>
  <summary>Grafiek</summary><br/>
  <img src="/docs/google_form/7_When_a_game_is_accessible_I_feel_more_included_in_the_gaming_community.png" alt="Grafiek vraag 7"/>
  <p> 1 = Oneens | 5 = Eens </p>
</details>

#### Wanneer een spel maar gedeeltelijk toegankelijk is dan speel ik het liever niet.

De meerderheid is het hier mee eens.

<details>
  <summary>Grafiek</summary><br/>
  <img src="/docs/google_form/8_When_a_game_is_only_partially_accessible_I_would_rather_not_play_it.png" alt="Grafiek vraag 8"/>
  <p> 1 = Oneens | 5 = Eens </p>
</details>

#### Wanneer een spel geadverteerd wordt als toegankelijk ben ik nog steeds sceptisch over de speelbaarheid.

De meerderheid is het hier mee eens.

<details>
  <summary>Grafiek</summary><br/>
  <img src="/docs/google_form/9_When_a_game_is_advertised_as_accessible_Im_still_doubtful_about_the_playability.png" alt="Grafiek vraag 9"/>
  <p> 1 = Oneens | 5 = Eens </p>
</details>

#### Wanneer ik spellen gekocht had die geadverteerd waren als toegankelijkheid dan was ik vaak teleurgesteld over de speelbaarheid.

De meerderheid is hier neutraal over.

<details>
  <summary>Grafiek</summary><br/>
  <img src="/docs/google_form/10_When_I_bought_games_that_were_advertised_as_accessible_often_I_was_dissapointed_about_the_playability.png" alt="Grafiek vraag 10"/>
  <p> 1 = Oneens | 5 = Eens </p>
</details>

#### Als virtual reality toegankelijk was dan zou ik het willen proberen.

De meerderheid is het hier mee eens.

<details>
  <summary>Grafiek</summary><br/>
  <img src="/docs/google_form/11_If_virtual_reality_was_accessible_I_would_like_to_try_it_out.png" alt="Grafiek vraag 11"/>
  <p> 1 = Oneens | 5 = Eens </p>
</details>

### Deelconclusie
Uit de enquête kwam duidelijk naar boven dat er een wel degelijk een verband is tussen ongelijkheid en toegankelijkheid. De ondervraagden geven aan dat het voor hen belangrijk is dat meer spellen toegankelijk worden, dit geeft het gevoel dat ze meer betrokken worden in de "Gaming community", als een spel maar gedeeltelijk toegankelijk is beginnen ze er liever niet aan. Toegankelijkheid is vaak een dwarsboom als het op gamen met vrienden aankomt, ondervraagden geven aan dat ze zich buitengesloten voelen als zij een game niet kunnen spelen en vrienden wel. Negen van de tien ondervraagden is enthousiast en wil graag de mogelijkheden van virtual reality zien.

# Conclusie
In dit onderzoek is gezocht naar een antwoord op de vraag ‘Wat is een geschikte manier om een virtual reality geocaching spel te ontwikkelen in de browser op basis van A-Frame zodat mensen met een visuele beperking het ook kunnen spelen?’ 

Om ervoor te zorgen dat mensen met een visuele beperking gebruik kunnen maken van het spel is er gekeken naar wat een visuele beperking is en hoe we hier mee omgaan. Hier zagen we dat er vier verschillende soorten visuele beperkingen zijn, het project is vooral gefocust op slechtzienden en blinden. Hiervoor moeten we de applicatie toegankelijk maken. Toegankelijkheid houdt in dat je met of zonder beperking, gebruik kan maken van hetgeen dat je wilt gebruiken. Dus het is belangrijk dat de speler zo veel mogelijk vrijheid in opties heeft, maar dat alle opties van tevoren goed worden uitgelegd aan de gebruiker. Verder is gebleken dat geluid en vibratie de beste manieren zijn om de speler te voorzien van informatie, het is hierbij wel belangrijk dat niet te veel informatie tegelijkertijd op de speler wordt afgestuurd. dit kan zorgen voor een overbelasting van de zintuigen, waardoor de speler gedesoriënteerd raakt. Omdat A-Frame gebaseerd is op HTML en Javascript is het erg eenvoudig om een simpel virtual reality spel te ontwikkelen voor de browser.

# Aanbevelingen
Bij al onze tegenslagen was er één motief dat steeds terug naar boven kwam, en dat is dat A-Frame niet geschikt is om virtual reality games te maken voor mensen met een visuele beperking. Omdat A-Frame nog erg jong in ontwikkeling is, loop je al snel tegen limitaties aan. Voorbeelden hiervan zijn dat de raycaster niet aanpasbaar is, de inspector erg veel bugs bevat, er geen gebruik gemaakt kan worden van text to speech en six degrees of freedom niet toegepast kan worden, omdat de informatie van de guardian niet op te halen is.

We raden aan om in plaats van A-Frame gebruik te maken van een al verder ontwikkelde engine of framework die meer functionaliteiten bevat.

# Bronnen
Wat is Een Visuele Handicap? ZEISS Netherlands. (n.d.). Retrieved June 26, 2022, from https://www.zeiss.nl/vision-care/beter-zien/zicht-inzichtelijk-gemaakt/wat-is-een-visuele-handicap-.html

Visuele beperking. Accessibility.nl. (n.d.). Retrieved June 26, 2022, from https://www.accessibility.nl/verschillende-beperkingen/visuele-beperking

Wat is Een Visuele Handicap? ZEISS Netherlands. (n.d.). Retrieved June 26, 2022, from https://www.zeiss.nl/vision-care/beter-zien/zicht-inzichtelijk-gemaakt/wat-is-een-visuele-handicap-.html

Kleurenblind. Oogfonds. (2022, June 16). Retrieved June 26, 2022, from https://oogfonds.nl/oogklacht/kleurenblind

Blindheid. Oogfonds. (2022, January 7). Retrieved June 26, 2022, from https://oogfonds.nl/visuele-beperkingen/blindheid

Slechtziendheid. Oogfonds. (2022, January 10). Retrieved June 26, 2022, from https://oogfonds.nl/visuele-beperkingen/slechtziend/

Teylingen, M. van. (2019, October 28). Toegankelijkheid, Inclusiviteit &amp; Diversiteit. LinkedIn. Retrieved June 26, 2022, from https://www.linkedin.com/pulse/toegankelijkheid-inclusiviteit-diversiteit-martin-van-teylingen

Wat is toegankelijkheid? Accessibility.nl. (n.d.). Retrieved June 26, 2022, from https://www.accessibility.nl/over-toegankelijkheid/wat-is-toegankelijkheid  

Informatie over Laaggeletterdheid in Nederland. https://www.lezenenschrijven.nl/. (n.d.). Retrieved June 26, 2022, from https://www.lezenenschrijven.nl/informatie-over-laaggeletterdheid-nederland 

Whitethorn games. Whitethorn Games. (n.d.). Retrieved June 26, 2022, from https://whitethorngames.com/ 

Pietroszek, K. (2018). Raycasting in Virtual Reality. SpringerLink. Geraadpleegd op 3 juli 2022, van https://link.springer.com/referenceworkentry/10.1007/978-3-319-08234-9_180-1?error=cookies_not_supported&code=6b1ad02a-1e08-44e5-b57a-9afd81231b0f
