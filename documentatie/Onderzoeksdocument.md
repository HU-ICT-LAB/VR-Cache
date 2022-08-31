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
ㅤㅤ7.3. [Welke vorm van geocaching is het best te gebruiken in een virtual reality spel voor mensen met een visuele beperking? (Jaimie)](#welke-vorm-van-geocaching-is-het-best-te-gebruiken-in-een-virtual-reality-spel-voor-mensen-met-een-visuele-beperking-jaimie)<br/>
ㅤㅤ7.4. [Hoe maak je een virtual reality wereld in A-Frame? (Samy)](#hoe-maak-je-een-virtual-reality-wereld-in-a-frame-samy)<br/>
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

Om deze vraag te beantwoorden begint ons onderzoek bij ons contactpersoon Mike, hij heeft een visuele beperking en interesse in videogames.
Door middel van een [interview](https://ictresearchmethods.nl/Interview) kunnen we een goed perspectief krijgen op wat
slechte en goede hulpmiddelen zijn voor visueel beperkte spelers in videogames, zodat we dit kunnen toepassen in virtual
reality. 

Op 6 april hadden we onze eerste meeting met Mike. In deze meeting hebben we hem geïnterviewd over het toegankelijk maken van games.

<details>
  <summary>Interview met Mike</summary>

##### *Heb je zelf een paar voorbeelden van games die goed toegankelijk zijn?*

- Horizon Zero Dawn
- The Last Of Us II
- [Swamp](https://www.youtube.com/watch?v=4YVvvPGKsA0)
- [AudioGames.net](https://audiogames.net/list-games/)

Er zijn eigenlijk twee manieren hoe games voor visueel beperkte worden gemaakt. De eerste manier is als de game gericht
is op inclusiviteit dit betekent dat de game gedeeltelijk te spelen is voor visueel beperkte, maar dat er sommige punten
zijn die worden overgeslagen of de speler wordt geholpen. De tweede manier is als een game op toegankelijkheid is
gericht, dit betekent dat de game in zijn volledigheid te spelen is door iemand met een visuele beperking.

##### *Hoe maak je geluiden duidelijk en onderscheidbaar?*

Zorg ervoor dat objecten een realistisch natuurlijk geluid hebben, zoals als je op hout klopt dat het ook echt klinkt
alsof je op hout klopt.

##### *In de game is er een kompas, hoe maak je die het beste toegankelijk?*

Het liefst zou je willen dat je iets van een knop ingedrukt houdt die ervoor zorgt dat er een 3D sound wordt afgespeeld
van waar de cache zich bevindt. Als alternatief zou je ook kunnen toepassen dat er een geluid afspeelt als je de goede
kant op kijkt.

##### *Hoe zou het aangegeven moeten worden als je tegen een muur aanloopt?*

Je zou dan net zoals eerder beschreven een natuurlijk bonk geluid moeten horen van het materiaal waar je tegen aan
loopt.

##### *Wat maakt een menu goed of slecht?*

Het is belangrijk om het menu goed te ordenen en een goede logische plaatsing te hebben van de knoppen. Veel games
hebben in de menu's dezelfde knop posities voor de verschillende opties, zoals dat de verdergaan knop altijd bovenaan
staat. Dit zorgt er voor de een menu natuurlijk aanvoelt.

##### *Ambient sounds, zijn ze storend of helpen ze?*

Ambient sounds zijn heel belangrijk voor het schetsen van de omgeving. Een tekst omschrijving van de omgeving kan ook
van grote toegevoegde waarde zijn. Geluid van wind als er een opening links of rechts is Geluid van takjes of grond waar
je op loopt

##### *Is een tutorial handig (Interactief of tekst)?*

Interactief is de beste manier om het spel uit te leggen, de speler kan zelf kiezen hoeveel die er mee doet.

##### *Qua map design, wat wel en niet?*

Als je een bos als voorbeeld zou nemen. Dan is het erg belangrijk dat je ook daadwerkelijk merkt dat je in een bos
staat. Een tekst omschrijving van waar de speler zich begeeft zou handig kunnen zijn. Ook is het belangrijk dat de
correcte omgevingsgeluiden toegepast worden zoals vogeltjes die zingen, wind door de bomen horen gaan en takjes die je
hoort kraken als je erop loopt.
</details>

Na het interview hebben we ook community research geraadpleegd, hiermee hebben we gekeken naar wat er allemaal voor mogelijkheden er nog meer bestaan om deze problemen aan te pakken.

In de game accessibility(IGDA-GASIG) groep op discord werd ons door een member
een [pagina](https://whitethorngames.com/accessibility) doorgestuurd van de indie game
uitgever [Whitethorn Games](https://whitethorngames.com/#about-1-section). Hun doel als een indie game uitgever is om
games te maken die simpel zijn en gespeeld kunnen worden door iedereen. Op
de [pagina](https://whitethorngames.com/accessibility) die ons was doorgestuurd werd uitgebreid uitgelegd welke
strategieën ze hebben gebruikt om hun games accesible te maken. Om een voorbeeld te geven hebben ze in de
game [APICO](https://whitethorngames.com/apico) een functie toegevoegd die de optie geeft om door bomen heen te kunnen
lopen in het spel, waardoor je geen rekening meer hoeft te houden of de speler ergens achter zou kunnen blijven haken en
niet meer zou kunnen bewegen. Ook hebben ze aan functies gedacht die niet alleen voor mensen met een beperking handig
zijn maar voor iedereen, zoals de functie dat je elke button kan herpositioneren op een andere button.

*(Whitethorn Games, 2022)*  

Met het interview van Mike en de [pagina](https://whitethorngames.com/accessibility)
van [Whitethorn Games](https://whitethorngames.com/#about-1-section) als referentiepunt hebben wij zelf een lijst
gemaakt van opties die de accessibility zouden kunnen verbeteren in ons eigen spel.

| Optie | Onderbouwing | Beperking |
|-------|--------------|:---------:|
| Herpositionering van alle buttons mogelijk maken.| Dit kan behulpzaam zijn voor spelers die bijvoorbeeld een hand missen om ze de vrijheid te geven hoe ze zelf het liefst spelen.| Lichaamelijk |
| De cache een herkenbaar opvallend geluid geven. | Voor blinde spelers kan dit behulpzaam zijn door ze een duidelijk leidend geluid te geven waar ze naar toe moeten gaan.| Blind of slechtziend |
| Omgevings geluiden toepassen. | Visueel beperkte spelers zouden via de geluiden kunnen opvatten waar ze zich begeven zoals rijdende auto's of wind die door de bomen gaat.| Blind of slechtziend |
| Objecten natuurlijke geluiden geven als je met ze interacteerd. | Dit helpt blinde spelers om ze te laten weten wat ze vast hebben of aanraken in het spel.| Blind of slechtziend |
| Een geluid toepassen als je ergens tegen aan loopt. | Als een blinde speler tegen een muur aan loopt en niet meer verder kan is het handig om hem te laten weten dat hij niet meer door kan lopen.| Blind of slechtziend |
| Een geluid toepassen als je richting de cache kijkt. | Door een klein geluidje af te spelen als de blinde speler de goede kant op kijkt weet hij gelijk waar hij heen zal moeten gaan. | Blind of slechtziend |
| Een geluid toepassen als je te dicht bij de rand van de Guardian komt in de oculus quest. | De blinde speler hoeft hierdoor minder bang te zijn dat die tegen iets aanloopt in de echte wereld, omdat hij dan een waarschuwing krijgt als die te ver weg loopt.| Blind of slechtziend |
| Een geluid toepassen als je te dicht bij de wereld border in de game komt. | Als de blinde speler dicht bij de wereld border komt is het handig om hem te informeren dat hij terug moet gaan. | Blind of slechtziend |
| Een verteller toepassen in het menu. | Dit kan blinde spelers helpen om het menu makkelijker te navigeren door te op te lezen wat ze selecteren. | Blind of slechtziend |
| Een verteller toepassen in het spel. | Door op te lezen waar blinde spelers naar kijken in het spel hebben ze een beter beeld van waar ze zich begeven. | Blind of slechtziend |
| Het volume harder en zachter kunnen zetten. | Als een speler minder goed kan horen zou hij het geluid harder kunnen zetten.| Slechthorend |
| Geluiden apart van elkaar harder of zachter zetten. | Blinde spelers zouden hierdoor de belangrijkere geluiden harder kunnen zetten. | Blind of slechtziend |
| Ondertiteling toepassen. | Als een speler doof is kan die nog steeds geinformeerd worden over het spel.| Doof of slechthorend |
| Een zachtere of hardere vibratie geven hoe verder of dichterbij je bij de cache bent. | Dit kan de blinde speler een indicatie geven of hij de goede kant op loopt als hij de vibratie harder voelt worden. | Blind of slechtziend | 
| Een zachtere of hardere vibratie geven hoe verder of dichterbij je bij de world border bent. | Dit kan de blinde speler een indicatie geven dat hij een andere richting op moet lopen als hij de vibratie voelt. | Blind of slechtziend | 
| Een vibratie geven als je ergens tegenaan loopt. | Door de vibratie weten blinde spelers of ze ergens tegen aan zijn gelopen of niet meer door kunnen lopen.| Blind of slechtziend |
| Een vibratie geven als je iets aanraakt in het spel. | Dit kan een realistich effect geven aan blinde mensen omdat ze dan kunnen voelen of ze iets aanraken in het spel. | Blind of slechtziend |
| Een tutorial aan het begin van het spel. | Dit helpt de speler om de besturing onder de knie te krijgen en het spel beter te snappen. | Voor iedereen |

In ons onderzoek focussen we ons op blinde en slechtziende spelers. Met deze reden negeren wij we de opties die niet
gefocust zijn op deze beperking. Hieronder zie je een lijst van de overgebleven opties waar we kijken of het mogelijk is om deze opties te implementeren in ons project.

| Optie | Implementatie mogelijkheid | Onderbouwing | Onderzoeksmethode |
|-------|:--------------------------:|--------------|:-----------------:|
| De cache een herkenbaar opvallend geluid geven. | Ja | A-frame biedt de mogelijk om geluiden vast te zetten aan objecten. | Document analysis |
| Omgevings geluiden toepassen. | Ja | A-frame ondersteund het gerbuik van geluiden | Document analysis |
| Objecten natuurlijke geluiden geven als je met ze interacteerd. | Nee | Objecten oppakken en bewegen is nog gelimiteerd in aframe. door objecten op te pakken zou je wel de positie kunnen veranderen maar niet de rotatie.| literature research | 
| Een geluid toepassen als je ergens tegen aan loopt. | Nee | Het zou heel moeilijk zijn om te kunnen bepalen of een speler daadwerekelijk niet meer door zou kunnen lopen. Als de speler schuin op een muur in loopt en heel langzaam tegen de muur opzij beweegt zou het spel het nog steeds kunnen zien als lopen. | Problem analysis |
| Een geluid toepassen als je richting de cache kijkt. | Nee | A-frame biedt op dit moment geen mogelijkheid om te kunnen kijken wat er binnen het gezichtsveld van de speler bevindt. | Document analysis |
| Een geluid toepassen als je te dicht bij de rand van de Guardian komt in de oculus quest. | Nee | De enige engine die hier toegang tot heeft is Unity. A-frame heeft geen toegang tot de data van de guardian.| literature research | 
| Een geluid toepassen als je te dicht bij de wereld border in de game komt. | Ja | A-frame biedt de mogelijkheid om de afstand te berekenen tussen de speler en een object. | Document analysis |
| Een verteller toepassen in het menu. | Ja | A-frame ondersteund het gerbuik van geluiden op een event. | Document analysis |
| Een verteller toepassen in het spel. | Ja | A-frame ondersteund het gerbuik van geluiden op een event. | Document analysis |
| Geluiden apart van elkaar harder of zachter zetten. | Ja | Elk geluid in A-frame kan apart harde of zachter gezet worden.| Document analysis |
| Een zachtere of hardere vibratie geven hoe verder of dichterbij je bij de cache bent. | Ja | A-frame biedt de mogelijkheid om de afstand te berekenen tussen de speler en een object.| Document analysis |
| Een zachtere of hardere vibratie geven hoe verder of dichterbij je bij de world border bent. | Ja | A-frame biedt de mogelijkheid om de afstand te berekenen tussen de speler en een object.| Document analysis |
| Een vibratie geven als je ergens tegenaan loopt. | Nee | Het zou heel moeilijk zijn om te kunnen bepalen of een speler daadwerekelijk niet meer door zou kunnen lopen. Als de speler schuin op een muur in loopt en heel langzaam tegen de muur opzij beweegt zou het spel het nog steeds kunnen zien als lopen. | Problem analysis |
| Een vibratie geven als je iets aanraakt in het spel. | Ja | Met de ingebouwde richter van A-frame zou je kunnen bepalen wanneer die door een object heen gaat. | Document analysis | 
| Een tutorial aan het begin van het spel. | Ja | Met een oplezende stem zou je de speler kunnen informeren over het spel, en zelfs met toepassing van events zou je de controls langs kunnen gaan. | Document analysis |

*(Unity 1.40 Reference Guide, 2022)*, *(Introduction – A-frame, 2022)*

Omdat het uitzoeken van de implementatie mogelijkheid bij elke optie veel tijd kostte. is het ons niet gelukt om elke optie toe te passen in de code. hieronder zie je een tabel met een overzicht van welke opties wel en niet toegepast zijn.

| Optie | Toegepast in code|
|-------|:----------------:|
| De cache een herkenbaar opvallend geluid geven. |Ja|
| Omgevings geluiden toepassen. |Ja|
| Een geluid toepassen als je te dicht bij de wereld border in de game komt. |Nee|
| Een verteller toepassen in het menu. |Nee|
| Een verteller toepassen in het spel. |Ja|
| Geluiden apart van elkaar harder of zachter zetten. |Nee|
| Een zachtere of hardere vibratie geven hoe verder of dichterbij je bij de cache bent. |Ja|
| Een zachtere of hardere vibratie geven hoe verder of dichterbij je bij de world border bent. |Nee|
| Een vibratie geven als je iets aanraakt in het spel. |Ja|
| Een tutorial aan het begin van het spel. |Nee|

Nu we de opties gerealiseerd hebben, willen we er achter komen hoeveel impact deze hebben op de speelervaring van de gebruiker. We hebben onze proefpersonen, Mike en Nicolien, een aantal versies van het spel laten spelen. Elke versie heeft een unieke toepassing van één of meerdere opties.

### Nicolien

Nicolien is een vriendin van Mike, en ze is onderdeel van het panel binnen Stichting Accessibility. Ze heeft last van
een tunnel visie, dit betekent dat ze alleen goed zicht heeft op het midden van haar gezichtsveld. Op het gebied van
virtual reality heeft ze nog geen ervaring, dus ze was erg enthousiast om het spel uit te testen. 

<details>
  <summary>Testen met Nicolien</summary>
  
##### *Versie 1: automatisch uitlezen van objecten*
Tijdens de eerste test run had ze nog een beetje moeite met de besturing van de game, desondanks had ze wel al een paar
opmerkingen over het spel. Door het automatisch oplezen had ze het gevoel alsof ze overladen werd met informatie.

##### *Versie 2: vibratie collision en automatisch uitlezen van objecten*
In de tweede test run ging het al een stuk beter. Ze was erg enthousiast over de vibratie, omdat ze echt het gevoel
kreeg dat ze de objecten aanraakte.

##### *Versie 3: vibratie collision en uitlezen van objecten verbonden aan een knop*
Deze test run vond Nicolien het best. Ze kreeg eigenlijk het beste van optie 1 en optie 2 gecombineerd. Zelf omschreef
ze dat de vibratie haar goed hielp met het navigeren, en dat ze tegelijkertijd niet overladen werd met informatie.

##### *impact opties*
In het tabel hieronder kijken we naar de opties en hoeveel impact ze hadden op de gameplay op een schaal van 0 tot 5. De impact is
bepaald vanuit eigen observatie en reactie van Nicolien.

|Optie| Impact| Onderbouwing |
|-----|:-----:|--------------|
| De cache een herkenbaar opvallend geluid geven.|5| Tijdens het zoeken van de cache zagen we dat ze het geluid van de cache als leidend middel gebruikte om te weten waar ze naartoe moest.|
| Omgevings geluiden toepassen.|3| De omgevings geluiden gaven haar gelijk een beeld van waar ze was, maar het heeft niet veel geholpen in het vinden van de cache.|
| Een verteller toepassen in het spel.|3| Nicolien beschreef dat de verteller erg veel informatie gaf tijdens het spelen wat meer voor verwarring zorgde. Toen we de verteller niet meer automatisch lieten oplezen was Nicolien wel iets positiever over de optie. |
| Een zachtere of hardere vibratie geven hoe verder of dichterbij je bij de cache bent.|2| Deze functie heeft ze niet veel gebruikt waardoor het ook niet veel impact heeft gehad op haar gameplay.|
| Een vibratie geven als je iets aanraakt in het spel.|4| Nicolien gaf aan dat ze de vibratie erg fijn vond omdat ze echt kon voelen wat om haar heen zat.|

##### *Opmerkingen*

- Een kleine uitleg aan het begin van het spel.
- Geluid van de cache mag harder.
- De cache mag van verder weg te horen zijn.

</details>

### Mike

Mike is ons contactpersoon in dit onderzoek, en hij is ook onderdeel van het panel binnen Stichting Accessibility. Hij is in zijn jongere jaren blind geworden. Integendeel van Nicolien heeft Mike wel al ervaring in virtual reality, ook heeft hij veel videogame ervaring met zijn eigen YouTube kanaal. We hebben niet alle versies aan Mike voorgelegd, omdat we na het testen met Nicolien er achter kwamen dat bepaalde versies verwaarloosbaar waren en anderen gecombineerd konden worden.

<details>
  <summary>Testen met Mike</summary>

##### *Versie 1: automatisch uitlezen van objecten*

Bij de eerste test run had Mike net als bij Nicolien nog een beetje moeite met het oriënteren van zichzelf in de map.
Met een klein beetje hulp kon hij de cache vinden. Hij vond het automatisch oplezen ook net als Nicolien te veel
informatie tegelijkertijd.

##### *Versie 2: vibratie collision en uitlezen van objecten verbonden aan een knop*

Nu Mike een beeld had van het spel kon hij de cache een stuk sneller vinden, hij vond de vibratie behulpzaam. Het geluid
van de cache was voor Mike wel een leidend middel om de cache te vinden.

##### *impact opties*
In het tabel hieronder kijken we naar de opties en hoeveel impact ze hadden op de gameplay op een schaal van 0 tot 5. De impact is
bepaald vanuit eigen observatie en reactie van Mike.

|Optie| Impact| Onderbouwing |
|-----|:-----:|--------------|
|De cache een herkenbaar opvallend geluid geven.|5| Mike was net als Nicolien er gefocust op het geluid van de cache en kon hierdoor erg snel de cache vinden.|
|Omgevings geluiden toepassen.|2| De omgevings geluiden gaven Mike wel een beeld van waar die was, maar hij beschreef dat die niet genoeg geplaatste geluiden om zich heen had. Hierdoor kon hij het niet goed gebruiken om te bewegen door de wereld|
|Een verteller toepassen in het spel.|2| Net als Nicolien vond Mike de verteller ook te veel informatie geven. Het moment toen de verteller niet meer automatisch oplas werd hij ook niet meer gebruikt door Mike. |
|Een zachtere of hardere vibratie geven hoe verder of dichterbij je bij de cache bent.|4| Mike gebruikte deze functie een stuk meer dan Nicolien en dit hielp hem wel op de momenten dat hij ver weg van de cache stond. Dit kwam omdat de vibratie een langere afstand heeft dan het geluid.|
|Een vibratie geven als je iets aanraakt in het spel.|4| Net als Nicolien vond mike het ook fijn om zijn omgeving te kunnen voelen.|

##### *Opmerkingen*

- Meer geplaatste omgevingsgeluiden.
- Duidelijke aanduiding als je tegen de wereldborder aanloopt.

</details>

Uit het onderzoek kunnen we concluderen dat geluid het belangrijkste onderdeel is om een spel accessible te maken. In de test runs zagen we dat beide kandidaten zich het meest focuste op het positionele geluid van de cache. Ook was er een positioneel geluid van het kampvuur in het midden van de wereld. Hier konden de kandidaten gebruik van maken om er achter te komen hoe dicht ze bij het midden van de wereld stonden. Het niet positionele geluid van de vogels en de voorlezer van de objecten waren beide minder van toepassing voor de positionering. De vogels hielpen met het schetsen van een beeld van de omgeving, maar verder hadden ze geen toegevoegde waarde. Omdat de vogel geluiden geen positionele functie hadden kon de speler het niet gebruiken om zichzelf te oriënteren op de map. 

De voorlezer van de objecten was in het begin erg fijn voor de speler. Omdat de eerste keer dat de spelers het spel speelde alle objecten nog nieuw en onbekend waren. Nadat de spelers de eerste test run hadden voltooid kwamen we tot de conclusie dat de spelers vaak dezelfde informatie hoorde omdat het automatisch voor werd gelezen. Wanneer we de spelers zelf de keuze gaven om een object voor te lezen was dit een betere ervaring. De spelers konden de functie gebruiken wanneer ze het nodig hadden en voelde zich ook minder overladen met informatie. 

Verder werden de vibratie opties ook positief ontvangen door de kandidaten. 
De controller ging vibreren wanneer je iets aanraakte in het spel. Hier hebben we veel positieve feedback over ontvangen, de vibratie was ook een goede plaatsvervanger van de voorlezende stem die liet weten dat er een object was. De vibratie die harder en zachter werd hoe dichter je bij de cache kwam werd soms vergeten door de kandidaten. Dit kwam omdat ze zich meer focuste op het geluid van de cache. Toch heeft het geholpen wanneer de speler ten einde raad was. Het werd meer gebruikt als een laatste hulpmiddel. 

Dus hoe maak je virtual reality accessible? Om het samen te vatten kan je in de resultaten terug zien dat positioneel geluid het allerbelangrijkst is. Hierdoor kan de speler zichzelf door de map oriënteren. Vibratie is hierbij een goed hulpmiddel. Uit onze testen kwam naar voren dat de vibratie een secundaire waarde heeft tegenover het positionerende geluid. De vibratie geeft te weinig context aan de speler, het geluid is de primaire bron voor de speler om zich te positioneren. Losstaand is vibratie niet geschikt voor het bepalen van positionering op de map. Wanneer je de vibratie combineert met het geluid is het nuttige feedback voor de speler en zo maak je virtual reality meer accessible.

## Hoe ontwikkel je een virtual reality game in de browser door middel van A-Frame? (Misher)


Om te leren hoe je een virtual reality spel kan maken op basis van A-Frame hebben we besloten om twee onderzoeksmethodes te gebruiken. De eerste is [literature study](https://ictresearchmethods.nl/Literature_study). Op de website van A-Frame staat de documentatie die we kunnen gebruiken om A-Frame goed te kunnen begrijpen.

Ook kunnen we Stackoverflow raadplegen voor meer specifieke vragen die we zullen hebben. De tweede onderzoeksmethode die zeker belangrijk is voor ons is [best good and bad practices](https://ictresearchmethods.nl/Best_good_and_bad_practices), dit betekent namelijk dat wij gaan kijken hoe andere projecten bepaalde functionaliteiten op een goede manier hebben toegepast, daarna kunnen wij die ook toepassen in ons project. A-Frame is een nieuw concept voor ons, dus als we kunnen gebruiken wat anderen al hebben ontdekt zou dat ideaal zijn.


Met ons onderzoek hebben we het volgende gevonden: <br>
### De map
In onze map hebben we boomstammen, bomen, wereld borders, een cache in de vorm van een kleine kist en een kampvuur.
We hebben gebruikt gemaakt van [gltf](https://www.khronos.org/gltf/) bestanden om deze objecten in de map te krijgen. Wij hebben de hele map in [Blender](https://www.blender.org/about/) gemaakt, en hebben de gltf bestanden van de objecten in Blender geïmporteerd. Onze hele map is één gltf bestand zoals hier te zien is: <br>    ```<a-entity id="world" gltf-model="assets/world.gltf" scale="0.3 0.3 0.3"></a-entity>```

Voor de cache hebben wij iets anders gedaan, als de gebruiker het spel meerdere keren wilt gaan spelen en de cache op dezelfde positie zit is het spel niet meer leuk dus we hebben het volgende gedaan voor de positie van de cache: <br>
In de cache.js file hebben wij een lijst van mogelijke posities gedefinieerd.
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


Omdat de raycaster alleen met [primitieve objecten](https://aframe.io/docs/1.3.0/introduction/html-and-primitives.html#primitives) kan interacteren hebben we hitboxen in de positie van de bomen en boomstammen gezet in de vorm van cilinders, ook zijn er hitboxen in de vorm van een kubus voor de wereld randen. De objecten zijn gewoon normaal te zien maar er zit nog een onzichtbare hitbox in de positie van de objecten puur voor interactie een voorbeeld hiervan is het volgende: <br>
``` 
<a-cylinder class="interactable" id="tree29" tree position="28.5246 0 -32.9995"></a-cylinder> 
``` 
### Interactie met de cache
Het doel van het spel is om de cache te vinden, daarvoor moesten wij een manier bedenken waarbij je met de cache kan interacteren.
Om met de cache te kunnen interacteren is het noodzakelijk dat je binnen een bepaalde afstand staat en daarvoor hebben wij de klasse "Vector3D". In deze klasse kan de afstand tussen de speler en een bepaalde positie berekend worden. Als de positie van de cache in deze klasse meegegeven wordt kunnen wij de afstand tussen de speler en de cache weten. Nu we de afstand van de cache en de speler weten kunnen wij een berekening doen wanneer een bepaalde knop ingedrukt wordt en dit doen we in de interact methode van het "keyboard-input-handler.js" file.

```
hitbox.addEventListener("raycaster-intersected", function () {
			sessionStorage.setItem("interacting", "true");
			document.getElementById("cacheSoundAsset").components.sound.playSound();
			document.getElementById("right").components.haptics.pulse(0.5, 50);
		});
```

Als de raycaster de cache aanraakt wordt de value van de key "interacting" in de sessionStorage veranderd naar "true".
``` 
this.el.addEventListener("abuttondown", function () {
			if (sessionStorage.getItem("interacting") === "true") {
				document.getElementById("cacheGevondenSoundAsset").components.sound.playSound();
			}
		});
 
```

Zoals in de code voorbeeld te zien is als de knop "a" gedrukt wordt, wordt er in de sessionStorage gecontroleerd als de value van de key "interacting" gelijk is aan "true", als dat waar is heb je een succesvol interactie gehad met de cache en je wordt naar een andere pagina gestuurd.

### Geluid
Voor het geluid in hey spel hebben wij [MP3](https://nl.wikipedia.org/wiki/MP3#:~:text=MP3%20-%20Wikipedia%20MP3%20MP3%20%28officieel%20MPEG-1%20Audio,Group%29%20uit%201992%2C%20waarvan%20implementaties%20bestaan%20sinds%201994.) files van de benodigde geluiden gedownload en in het project gezet.
In het project hebben wij geluiden gebruikt op de volgende manieren:
1. Om de objecten die met de [raycaster](https://github.com/aframevr/aframe/blob/master/docs/components/raycaster.md) interacteren te benoemen. Er is voor iedere object een mp3 file waarin de naam van de object uitgesproken wordt. Hoe we dit hebben geregeld is als de raycaster een interactie heeft met een object wordt een event gegooid genaamd "raycaster-intersected", elk object heeft een event listener die naar het genoemde event luistert, in de event listener wordt de naam van het object opgeslagen in de [sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage), het volgende is een code voorbeeld van de tree.js file.
``` 
this.el.addEventListener("raycaster-intersected", function () { 
         sessionStorage.setItem("object", "boom"); 
         document.getElementById("right").components.haptics.pulse(0.5, 50); 
      }); 
``` 

En in het "object-sound-handler" component wordt er gekeken naar welke object naam opgeslagen is in de sessionStorage en die naam spreekt het spel uit.
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
Na elke frame wordt er gecontroleerd of de afstand klein genoeg is om de cache te kunnen horen. Om de afstand tussen de speler en cache te berekenen gebruiken we de klasse Vector3D.
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

Als inSoundDistance true is en als het geluid niet al aan het afspelen is dan wordt het cache geluid afgespeeld anders niet.
``` 
if (this.inSoundDistance && !this.inSoundDistanceTriggered) { 
         document.querySelector("#cache").components.sound.playSound(); 
         this.inSoundDistanceTriggered = true; 
      } else if (!this.inSoundDistance) { 
         document.querySelector("#cache").components.sound.stopSound(); 
         this.inSoundDistanceTriggered = false; 
      } 
``` 
En omdat het geluid direct van de cache komt kan je een indicatie krijgen van waar de cache is.

3. Er wordt constant een achtergrond geluid afgespeeld, die mp3 file is direct toegewezen naar de scene.
``` 
<a-sound id="backgroundnoise" sound="positional: false" src="assets/forest.mp3" autoplay="true" loop="true" volume="0.1"></a-sound> 
``` 
4. Elke keer dat de speler een stap doet in het spel wordt een stap geluid afgespeeld. Als de speler de thumbstick in een bepaalde richting beweegt wordt er een event gegooid genaamd "thumbstickmoved", in het "player-sound" component is er een event listener die luistert naar het genoemde event van de beweging van de thumbstick, in deze functie wordt het geluid van de toegewezen mp3 file afgespeeld.

``` 
if (this.walking && !this.alreadyWalking) { 
         document.getElementById("playerWalkingsoundAsset").components.sound.playSound(); 
         this.alreadyWalking = true; 
      } else if (!this.walking) { 
         document.getElementById("playerWalkingsoundAsset").components.sound.stopSound(); 
         this.alreadyWalking = false; 
      } 
``` 
Als de speler aan het lopen is en als het geluid niet al afgespeeld werd wordt het loop geluid afgespeeld, anders niet.

### Vibratie
Om vibratie mogelijk te maken hebben wij [aframe-haptics-component](https://www.npmjs.com/package/aframe-haptics-component) geimporteerd.
Met hulp van het aframe haptics component kunnen we het volgende stuk code runnen en vibratie krijgen bij de controller: <br>
``` 
this.el.components.haptics.pulse(force, duration); 
``` 

Deze vibratie was zeer behulpzaam in het aantonen van een interactie tussen de raycaster en een object.

#### Sonar
Deze functionaliteit was bedacht met de bedoeling om de speler een indicatie te geven van de afstand tussen de speler en de cache in de vorm van vibratie.
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
Met het antwoord van de Vector3D berekening wordt de pulse berekend en daarna wordt de pulse gebruikt om de tijdsduur van de vibratie te bepalen. Hoe groter de afstand hoe langer de vibratie.

### Hosting
Om de applicatie op het internet te zetten moet het natuurlijk ook gehost worden. Voor de [hosting](https://www.techopedia.com/definition/29023/web-hosting) hebben wij gekozen voor [Github Pages](https://pages.github.com/). Github Pages is van [Github](https://github.com/) zelf en is gratis en makkelijk om te gebruiken.
Omdat wij GitHub gebruiken voor versiebeheer van onze applicatie kunnen wij gebruik maken van active deployment.

In dit onderzoek is gezocht naar een antwoord op de vraag: ‘Hoe ontwikkel je een virtual reality game in de browser door middel van A-Frame?’. Uit het onderzoek is gebleken dat A-Frame gebaseerd is op HTML en Javascript. Je kan ook je eigen componenten maken met hun eigen unieke gedrag die ook met elkaar kunnen communiceren, geluid was al ingebouwd en makkelijk aanpasbaar.
Het is ook mogelijk om aparte componenten te importeren zoals bijvoorbeeld het aframe-haptics-component.
Wat we concluderen is dat het ontwikkelen van een virtual reality game in de browser door middel van A-Frame mogelijk is en vrij eenvoudig.

## Welke vorm van geocaching is het best te gebruiken in een virtual reality spel voor mensen met een visuele beperking? (Jaimie)

Er bestaan verschillende soorten van geocaching. Door middel van literature study gaan we de verschillende soorten geocaching in kaart brengen. Om erachter te komen welke van deze vormen het beste aansluit bij een virtual reality spel voor mensen met een visuele beperking gaan we de verschillende spelvormen met elkaar vergelijken op complexiteit in code, complexiteit in besturing, toegankelijkheid en ervaringen met testen.

### Soorten caches
Er zijn veel verschillende soorten soorten van geocaching. De 3 bekendste vormen van geocaching staan hier beschreven.

#### Traditionele cache
Bij dit type van geocaching krijg je meteen de eindcoördinaten waar de geocache verborgen ligt. Wanneer je op de locatie aankomt van de coördinaten zal je een geocache moeten zien te vinden, hierin zal je je naam kunnen schrijven als bewijs dat je deze gevonden hebt. 

#### Multi cache
Bij multi caches krijg je een coördinaat die niet direct naar de eindcache toeleidt. De bedoeling van multi caches is dat je van punt naar punt gaat op basis van coördinaten die je zal moeten verzamelen via hints die elke keer op de volgende locatie liggen. Hoeveel tussenpunten er zijn is vooraf niet bekend.

#### Puzzel cache
Een puzzel cache begint niet met coördinaten maar met een puzzel die opgelost zal moeten worden. Wanneer je de puzzel weet op te lossen zal je de coördinaten krijgen van de eindcache. Wat ook kan is dat de puzzel cache gecombineerd wordt met een multi cache, dan zal het coördinaat dat je ontvangt na het oplossen van de puzzel niet de locatie van de eindcache bevatten maar van een tussenpunt.

### Ontwikkelen van de verschillende soorten geocaches
Tijdens het ontwikkelproces hebben we gekeken naar de verschillende vormen van geocaching en wat het beste zou aansluiten bij een virtual reality geocaching spel voor mensen met een visuele beperking ontwikkeld in A-Frame. We hebben voor de drie bovengenoemde spelvormen gekeken naar wat mogelijke manieren zouden kunnen zijn om deze te implementeren als spelvorm en welke eventuele problemen er bij komen kijken.

#### Traditionele cache
Voor de traditionele cache hebben we gekeken voor een vorm waarop de speler een bepaalde coördinaat kan krijgen en naar deze kan navigeren. Aangezien het gespeeld moet kunnen worden door mensen met een visuele beperking is werken met een visueel kompas niet mogelijk. Hierop hebben we diverse alternatieven op bedacht, geprobeerd te implementeren en getest. Als eerst hebben we geprobeerd de speler te begeleiden door aan te geven in welke richting de speler gericht staat door een tekst uit te laten spreken gevolgd door de afstand wanneer er op een knop gedrukt wordt. Doordat we tegen limitaties aanliepen met text-to-speech werd het erg lastig om verschillende afstanden mee te geven aan de speler. We hebben als alternatief hierop verschillende afstanden ingesproken vast erin gezet waarbij die de afstand pakte die het dichtste bij de werkelijke afstand uitgesproken werd. Tijdens het testen van deze manier van navigatie werd al erg snel duidelijk dat het enorm lastig is om je te oriënteren via deze manier. Het implementeren van deze methode was complex en kost veel tijd om aan te passen omdat alle verschillende afstanden ingesproken moeten worden en er handmatig ingezet moeten worden. Wij raden het daarom af om de traditionele manier van geocaching en de navigatie hiervan te implementeren.

#### Multi cache
Tijdens het ontwerpen van hoe we de multi cache gingen implementeren liepen we al direct tegen hetzelfde probleem aan van de traditionele cache en was de vraag ‘Hoe gaan we de speler laten navigeren?’ Verder lijkt ons als beste manier om de speler van punt naar punt te leiden je het beste een audiofragment kan afspelen die aangeeft dat je op een tussenpunt bent aangekomen waarna de manier van navigatie weer automatisch instelt op het volgende (eind)punt. Aangezien je bij de multi cache je tegen hetzelfde probleem met navigatie aanloopt als met de traditionele cache raden we ook deze vorm van geocaching af.

#### Puzzel cache
Bij de puzzel cache komt bovenop het probleem en complexiteit van de eerdergenoemde navigatie er nog een extra vorm van complexiteit bovenop dat er een puzzel opgelost moet worden. We hebben hiervoor onderzocht wat voor soorten digitale puzzels er al bestaan voor mensen met een visuele beperking. Tijdens dit zijn we erachter gekomen dat er nog erg weinig puzzels digitaal zijn gemaakt voor mensen met een visuele beperking, dit komt omdat je bij veel puzzelspellen een vorm van overzicht moet hebben die je niet hebt zonder zicht. Bij digitale puzzels ben je ook beperkt tot geluid en vibratie, je kan hier geen gebruik maken van de voel zintuigen waarbij je je handen kan gebruiken om erachter te komen hoe een object in elkaar zit en welke vorm dit heeft. We raden hierom ook deze vorm van geocaching af door de beperkingen die je hebt aan feedback die je terug kan geven aan de speler tijdens het spelen.

#### Eigen spelvorm
Wat we kunnen concluderen uit onze eigen ervaringen tijdens het ontwikkelproces is dat het ontwikkelen van de drie bekende vormen van geocaching heel erg complex zijn voor mensen die geen zicht meer hebben. Wat we ook concluderen is dat veel van deze vormen erg lastig zijn om te implementeren met A-Frame door de limitaties die je hebt met dit framework.

Als alternatief hebben wij een spelvorm bedacht en ontwikkeld waarbij het meer een zoektocht wordt dan dat je moet navigeren op basis van coördinaten. De speler wordt hierbij niet in bepaalde richtingen genavigeerd maar krijgt diverse soorten feedback terug waardoor de speler zich kan oriënteren binnen de wereld waarin je aan het spelen bent. Wij hebben hiervoor in de wereld verschillende objecten toegevoegd die geluiden afgeven waardoor de speler een idee krijgt van waar die zich bevindt. Ook kan de speler gebruik maken van een ‘sonar’ functie. Deze functie activeert wanneer er een bepaalde knop ingedrukt wordt op de controller, wanneer deze ingedrukt wordt zal de controller elke 2 seconden een vibratie afgeven die 0 tot 1.8 seconden lang is. Hoe dichterbij de speler zich bevind tot de cache hoe langer de vibratie zal zijn. Wat we als laatste manier van feedback hebben toegevoegd is een blindgeleide stok, dit is een virtuele lijn die vast zit aan je controller van een beperkte lengte die de objecten scant waar je naar richt. Zodra je met de virtuele stok een object aanraak zal de controller een kleine vibratie afgeven en wanneer er op een knop wordt gedrukt zal uitgesproken worden wat dit object is.

### Vergelijking tussen de spelvormen
Alle spelvormen kunnen we nu vergelijken op basis van onze ervaringen, dit doen we door een rangschikking te geven aan elke kolom met 'Zeer slecht/complex', 'Slecht/complex', 'Normaal', 'Goed/eenvoudig' en 'Zeer goed/eenvoudig'.

| Spelvorm           | Complexiteit implementeren in code | Complexiteit in besturing | Ervaringen met testen |
|--------------------|------------------------------------|---------------------------|-----------------------|
| Traditionele cache | Complex                            | Zeer eenvoudig            | Slecht                |
| Multi cache        | Complex                            | Zeer eenvoudig            | Slecht                |
| Puzzel cache       | Zeer complex                       | Zeer complex              | Zeer slecht           |
| Aangepaste cache   | Zeer eenvoudig                     | Zeer eenvoudig            | Goed                  |

Na deze vergelijking geven wij het advies om gebruik te maken van de eigen versie van geocachen. De meer reguliere bekende speelvormen van geocachen zijn te ingewikkeld om te ontwikkelen en te spelen voor mensen die geen/slecht zicht hebben. Om deze reden is het noodzakelijk dat er gebruik wordt gemaakt van een aangepaste spelvorm die meer is afgestemd op de doelgroep.

([Geocaching.nl](https://www.geocaching.nl) 2022)<br>
([Geocachen.nl](https://geocachen.nl) 2022)<br>
([Aframe.io](https://aframe.io/) 2022)

## Hoe maak je een virtual reality wereld in A-Frame? (Samy)

Wij gaan een game maken voor mensen met een visuele beperking, maar hoe maak je dan een virtual reality wereld? Om erachter te komen wat dat inhoudt, kunnen we daarvoor [Literature study](https://ictresearchmethods.nl/Literature_study) gebruiken. Bij het gebruiken van die methode worden er allerlei bronnen verzameld en vervolgens een samenvatting gemaakt van belangrijke stukken. Ook kunnen we de [Competitive Analysis](https://ictresearchmethods.nl/Competitive_analysis) methode gebruiken om deze deelvraag te beantwoorden. Bij deze methode gaan we dan de meest gebruikte tools vergelijken en kijken welke het meest geschikt is voor ons project.

In A-Frame kunnen verschillende soorten werelden gecreërd worden, wij hebben voor de spelers een bos in A-Frame gemaakt. Een bos is rijk aan elementen zoals bomen, stenen, vogels en struiken. Voordat deze elementen in een A-Frame wereld kunnen worden geplaatst, moet je ze eerst aanmaken. Vervolgens moeten de 3D-modellen in het project geïmporteerd worden zodat we er gebruik van kunnen maken in onze A-Frame wereld.

|                           | **Windows** | **MacOS** | **Linux** | **Prijzen**       | **Moeilijkheid** | **glTF** |
|---------------------------|-------------|-----------|-----------|-------------------|------------------|----------|
| 1) **Adobe Substance 3D** | Ja          | Ja        | Ja        | €48,39/pm         | Gemiddeld        | Ja       |
| 2) **Maya**               | Ja          | Ja        | Ja        | €279/pm           | Moeilijk         | Ja       |
| 3) **Houdini**            | Ja          | Ja        | Ja        | €1986,69 eenmalig | Moeilijk         | Ja       |
| 4) **Autodesk 3DS MAX**   | Ja          | Ja        | Ja        | €279/pm           | Gemiddeld        | Ja       |
| 5) **Modo**               | Ja          | Ja        | Ja        | €63/pm            | Moeilijk         | Ja       |
| 6) **ZBrush**             | Ja          | Ja        | Ja        | €32,69/pm         | Gemiddeld        | Nee      |
| 8) **Adobe Dimension**    | Ja          | Ja        | Ja        | €81,66/pm         | Makkelijk        | Ja       |
| 9) **Blender**            | Ja          | Ja        | Ja        | Gratis            | Moeilijk         | Ja       |
| 10) **Fusion 360**        | Ja          | Ja        | Ja        | €73/pm            | Gemiddeld        | Ja       |

*[Hierboven is een vergelijkingtabel te zien, dat ook van boven naar benenden gerangschikt is](https://justcreative.com/best-3d-modeling-software/)*

Wij hebben ervoor gekozen om de 3D-modellen in [Blender](https://www.blender.org/about/) te maken. Waarom Blender? Het is volgens de meeste bronnen de beste gratis 3D software, maar het moet natuurlijk ook gepast zijn voor ons project, en dat is hier wel het geval. Het is namelijk mogelijk om glTF-bestanden te exporteren, want na het maken van een object in [Blender](https://www.blender.org/about/) is het voor ons project nodig om het bestand naar gltTF-type te exporteren. Deze keuze is gebasseerd op sprake van exporteren van glTF-bestanden en kosteloos gebruik. Dus qua 3D-programma hebben wij het juiste programma gebruikt, omdat dit het beste gratis 3D-programma is die ook voor beginners wordt aangeraden. Met behulp van de [documentatie](https://docs.blender.org/manual/en/latest/) van [Blender](https://www.blender.org/about/) en YouTube tutorial's van [Blender Guru](https://www.youtube.com/c/BlenderGuruOfficial), kan je al een heel eind komen.

Voordat we met [Blender](https://www.blender.org/about/) aan de slag zijn gegaan hebben we ons eerst verdiept in de documentatie van [Blender](https://www.blender.org/about/). Om te beginnen moet je weten [hoe een object in blender ](https://www.raywenderlich.com/21459096-blender-tutorial-for-beginners-how-to-make-a-mushroom) gecreërd kan worden. Of je kan ervoor kiezen om gratis 3D-modellen van het internet te plukken. Zo heb je websites als [Free3D](https://free3d.com/) of [Sketchfab](https://sketchfab.com/features/free-3d-models). Als het object is gecreërd, moet het als een glTF-bestand [geëxporteerd](https://docs.blender.org/manual/en/latest/files/import_export.html ) worden, zodat je het vervolgens in een developer tool kan [importeren](https://docs.blender.org/manual/en/latest/files/import_export.html). Een belangrijk punt is, dat het geëxporteerde bestand glTF Embedded-type moet zijn en geen Binary-type.

|                        | **Windows** | **MacOS** | **Linux** | **Prijzen**                                                    | **Beste voor**                     |
|------------------------|-------------|-----------|-----------|----------------------------------------------------------------|------------------------------------|
| **Visual Studio**      | Ja          | Ja        | Ja        | Volledig gratis                                                | .NET & C++                         |
| **IntelliJ IDEA**      | Ja          | Ja        | Ja        | Community versie is gratis<br>Ultimate versie 30 dagen gratis  | Java                               |
| **PhpStorm**           | Ja          | Ja        | Ja        | 30 dagen gratis                                                | Php                                |
| **Visual Studio code** | Ja          | Ja        | Ja        | Gratis                                                         | HTML, Javascript, Typescript & CSS |
| **PyCharm**            | Ja          | Ja        | Ja        | Community versie is gratis<br>Professional versie 30 dagen gratis | Python                            |

*Top 5 developer tools*

Nu we het juiste 3D-programma hebben gekozen, moet het ook ergens geprogrammeerd worden. Hierboven zijn een een aantal opties van verschillende developer tools te zien. Om te kijken wat daadwerkelijk de juiste is om mee te werken voor een A-Frame project zoals deze beoordelen we op basis van de volgende criteria:

- Volledig kosteloos te gebruiken
- Meeste geschikt voor front-end (HTML, Javascript, A-frame)

Wij hebben gebruik gemaakt van IntelliJ IDEA, maar als we naar de tabel kijken, zou je denken dat er niet de juist keuze is gemaakt, aangezien IntelliJ meer voor back-end talen wordt gebruikt, terwijl wij met HTML en Javascript hebben gewerkt. Maar over het algemeen scoort IntelliJ IDEA beter dan Visual Studio Code op de volgende punten:

- Betere code analyse-functies
- Alles-in-een developer tool met goede basis functionaliteit zonder noodzaak veel externe plugins te installeren
- Het refactoren van code

Deze conclusies zijn gebasseerd op ander [onderzoek](https://dev.to/mokkapps/why-i-switched-from-visual-studio-code-to-jetbrains-webstorm-939) van Micheal Hoffmann. Hij laat ook in zijn onderzoek zien d.m.v afbeeldingen waarom IntelliJ IDEA toch beter scoort dan Visual Studio Code.

Als de 3D-modellen zijn geïmporteerd, kunnen we ze aanroepen in de code om er gebruik van te maken. Dat kan in de code ongeveer zo eruit komen te zien:

```
<a-entity gltf-model="assets/{bestand-naam}.gltf"></a-entity>
```
*'assets/' is de naam van een map waarin alle glTF-bestanden zitten in ons project*

## Op welke manier draagt toegankelijkheid in games bij aan minder ongelijkheid? (Thomas)
Gamen is snel één van de grootste vormen van entertainment geworden in het laatste decennium. Om zoveel mogelijk mensen te includeren wordt er veel naar toegankelijkheid gekeken, maar hoe voelen mensen met een beperking zich hierover? Op dit moment zijn er naar schatting wereldwijd zo'n 1.1 miljard mensen met een visuele beperking, dit aantal groeit elk jaar. 

  ```mermaid
  pie
    "Slechtziend [295 miljoen]" : 295091908
    "Blindheid [43 miljoen]" : 43279994
    "Bijziend [510 miljoen]" : 509689139
    "Mild [258 miljoen]" : 257832316
  ```
  *[Wereldwijde schatting aantal visueel beperkten - IAPB](https://www.iapb.org/learn/vision-atlas/magnitude-and-projections/global/)*

Van deze 1.1 miljard zijn de slechtzienden en blinden samen 338 miljoen, het is lastig om nauwkeurige cijfers te vinden over hoeveel van deze personen actief gamen. Arianna Ortelli van NOVIS schat dat dit er ongeveer 23 miljoen zijn. Deze groep heeft de meeste hinder bij het gamen en is daarom onze focus voor dit project.

* **Slechtziend**

  Mensen die slechtziend zijn, kunnen minder dan 30% zien of hebben een gezichtsveld dat kleiner is dan 30 graden. Ze hebben een onscherp zicht, kokervisie en verlies van het centrale zien. Een normaal gezichtsveld is 140 graden. De visuele beperking kan niet worden gecorrigeerd door het dragen van een bril of contactlenzen.

* **Blind**

  Mensen die blind zijn, kunnen minder dan 5% zien of hun gezichtsveld is beperkt tot minder dan 10 graden, dat noemen we ook wel maatschappelijk blind.

Om te onderzoeken of er een verband is tussen ongelijkheid en toegankelijkheid is er een [survey](https://ictresearchmethods.nl/Survey) op meerdere platforms en communities geplaatst, waaronder Discord, Reddit en Facebook groepen voor visueel beperkte gamers. Uit de enquête kwam al snel naar boven dat er een wel degelijk ongelijkheid is door slechte toegankelijkheid in games.

De [enquête](https://forms.gle/og7QvZFB7WMh2ZuJ8) is gemaakt in [google formulieren](https://www.google.nl/intl/nl/forms/about/). In totaal hebben 21 personen de enquête ingevuld. De gemiddelde leeftijd van de ondervraagden was 26 jaar, daarvan was de oudste 41 en de jongste 16. 

<details>
  <summary>Enquête resultaten</summary>

  #### Vraag 1: Heb je een beperking?

  ```mermaid
  pie showData
    "Visually Impaired" : 8
    "Blindness" : 8
    "Hearing Impaired or deaf" : 3
    "Physical disability" : 3
    "None" : 2
  ```
  De twee meest gegeven antwoorden zijn visuele beperking en blindheid.
  
  #### Vraag 2:  Wat voor spellen speel je?

  ```mermaid
  pie showData
    "Real-time strategy" : 5
    "Shooters" : 5
    "Role-playing" : 7
    "Simulation and sports" : 4
    "Puzzlers and party games" : 5
    "Action-adventure" : 5
    "Survival" : 6
    "Platformer" : 7
    "Sandbox" : 6
    "Audio" : 9
    "Horror" : 2
  ```
  Het meest gegeven antwoorden is audio spellen, daarna platformer en role-playing.

  #### Vraag 3:  Waarom speel je spellen?

  ```mermaid
  pie showData
    "Relaxation" : 12
    "Boredom" : 12
    "Competency" : 4
    "Playing with friends" : 12
    "Making friends" : 2
  ```
  De drie meest gegeven antwoorden zijn "Om te relaxen", "Uit verveling" en "Spelen met vrienden".

  #### Vraag 4:  Wanner ik een spel niet kan spelen vanwege slechte toegankelijkheid dan voel ik mij buitengesloten.

  ```mermaid
  pie showData
    "Helemaal eens" : 9
    "Eens" : 9
    "Neutraal" : 0
    "Oneens" : 2
    "Helemaal oneens" : 1
  ```
  De meerderheid is het hier mee eens.

  #### Vraag 5:  Wanneer mijn vrienden over spellen praten die ik niet kan spelen vanwege slechte toegankelijkheid dan voel ik mij buitengesloten.
  
  ```mermaid
  pie showData
    "Helemaal eens" : 7
    "Eens" : 9
    "Neutraal" : 3
    "Oneens" : 1
    "Helemaal oneens" : 1
  ```
  De meerderheid is het hier mee eens.

  #### Vraag 6: Ik zou willen dat meer spellen toegankelijk waren.
  
  ```mermaid
  pie showData
    "Helemaal eens" : 13
    "Eens" : 4
    "Neutraal" : 4
    "Oneens" : 0
    "Helemaal oneens" : 0
  ```
  De meerderheid is het hier mee eens.

  #### Vraag 7: Wanneer een spel toegankelijk is voel ik mij meer geaccepteerd door de "Gaming community".
  
  ```mermaid
  pie showData
    "Helemaal eens" : 10
    "Eens" : 6
    "Neutraal" : 3
    "Oneens" : 1
    "Helemaal oneens" : 1
  ```
  De meerderheid is het hier mee eens.

  #### Vraag 8: Wanneer een spel maar gedeeltelijk toegankelijk is dan speel ik het liever niet.
  
  ```mermaid
  pie showData
    "Helemaal eens" : 6
    "Eens" : 7
    "Neutraal" : 3
    "Oneens" : 4
    "Helemaal oneens" : 1
  ```
  De meerderheid is het hier mee eens.

  #### Vraag 9: Wanneer een spel geadverteerd wordt als toegankelijk ben ik nog steeds sceptisch over de speelbaarheid.
  
  ```mermaid
  pie showData
    "Helemaal eens" : 6
    "Eens" : 8
    "Neutraal" : 2
    "Oneens" : 4
    "Helemaal oneens" : 1
  ```
  De meerderheid is het hier mee eens.

  #### Vraag 10: Wanneer ik spellen gekocht had die geadverteerd waren als toegankelijkheid dan was ik vaak teleurgesteld over de speelbaarheid.
  
  ```mermaid
  pie showData
    "Helemaal eens" : 5
    "Eens" : 3
    "Neutraal" : 7
    "Oneens" : 4
    "Helemaal oneens" : 2
  ```
  De meerderheid is hier neutraal over.

  #### Vraag 11: Als virtual reality toegankelijk was dan zou ik het willen proberen.
  
  ```mermaid
  pie showData
    "Helemaal eens" : 14
    "Eens" : 5
    "Neutraal" : 0
    "Oneens" : 1
    "Helemaal oneens" : 1
  ```
  De meerderheid is het hier mee eens.
</details>

Uit de enquête kwam duidelijk naar boven dat er een verband is tussen ongelijkheid en toegankelijkheid. De ondervraagden geven aan dat het voor hen belangrijk is dat meer spellen toegankelijk worden, dit geeft het gevoel dat ze meer betrokken worden in de gaming community, als een spel maar gedeeltelijk toegankelijk is beginnen ze er liever niet aan. Ook is negen van de tien ondervraagde enthousiast over de mogelijkheden van virtual reality, dit is te zien in de enquête bij vraag 11. Ondanks deze grote vraag kom je bij het gebruik van deze toestellen verschillende obstakels tegen, een aantal van deze als voorbeeld:

* Het aansluiten en instellen van de vr-headset is voor nu nog erg ingewikkeld.
* De meeste vr-headsets hebben screenreaders voor het systeem, helaas zijn deze nog niet compatibel met de games en de browser.
* Elke applicatie heeft zijn eigen menus die meestal niet makkelijk te navigeren zijn. 

Deze obstakels laten zien dat er nog weinig aandacht is besteed aan de toegankelijkheid van VR headsets, dit komt voornamelijk omdat virtual reality nog zo nieuw is binnen de gaming wereld. Er bestaan nog geen duidelijke standaarden voor toegankelijkheid binnen VR en engines zoals Unreal en Unity hebben nog geen toegankelijkheidsfuncties. Dit is gelukkig wel aan het veranderen, zowel Unreal als Unity werken aan toegankelijkheidsfuncties waar ontwikkelaars gebruik van kunnen maken. Ook bestaat de organisatie [XR Access](https://xraccess.org/) die zich inzet voor het verbeteren van de toegankelijkheid van virtual reality. 

Dit alles bij elkaar zorgt ervoor dat virtual reality vrijwel onspeelbaar is in de huidige staat voor mensen met een visuele beperking. Al deze mensen krijgen niet de mogelijkheid gebruik te maken van deze technologieën. Dit creëert ongelijkheid, dit komt ook duidelijk naar voren in de resultaten van de enquête bij bijvoorbeeld vraag 5, 7 en 11. Hier laten de ondervraagden duidelijk weten dat toegankelijk voor hen heel belangrijk is, als deze er niet is dan voelen ze zich vaker buitengesloten.

# Conclusie
In dit onderzoek is gezocht naar een antwoord op de vraag ‘Wat is een geschikte manier om een virtual reality geocaching spel te ontwikkelen in de browser op basis van A-Frame zodat mensen met een visuele beperking het ook kunnen spelen?’ 

Om ervoor te zorgen dat mensen met een visuele beperking gebruik kunnen maken van het spel is er gekeken naar wat een visuele beperking is en hoe we hier mee omgaan. Het project is voornamelijk gefocust op slechtzienden en blinden, hiervoor moeten we de applicatie toegankelijk maken. Toegankelijkheid houdt in dat je met of zonder beperking, gebruik kan maken van hetgeen dat je wilt gebruiken. Dus het is belangrijk dat de speler zo veel mogelijk vrijheid in opties heeft, maar dat alle opties van tevoren goed worden uitgelegd aan de gebruiker. Verder is gebleken dat geluid en vibratie de beste manieren zijn om de speler te voorzien van informatie, het is hierbij wel belangrijk dat niet te veel informatie tegelijkertijd op de speler wordt afgestuurd. dit kan zorgen voor een overbelasting van de zintuigen, waardoor de speler gedesoriënteerd raakt. Omdat A-Frame gebaseerd is op HTML en Javascript is het erg eenvoudig om een simpel virtual reality spel te ontwikkelen voor de browser. Tijdens het onderzoek kwam ook naar voren dat de reguliere vormen van geocaching niet geschikt zijn voor een virtual reality spel voor mensen met een visuele beperking.

# Aanbevelingen
Bij al onze tegenslagen was er één motief dat steeds terug naar boven kwam, en dat is dat A-Frame niet geschikt is om virtual reality games te maken voor mensen met een visuele beperking. Omdat A-Frame nog erg jong in ontwikkeling is, loop je al snel tegen limitaties aan. Voorbeelden hiervan zijn dat de raycaster niet aanpasbaar is, de inspector erg veel bugs bevat, er geen gebruik gemaakt kan worden van text to speech en six degrees of freedom niet toegepast kan worden, omdat de informatie van de guardian niet op te halen is. Hierom raden we aan om in plaats van gebruik te maken van A-Frame gebruik te maken van een al verder ontwikkelde engine of framework die meer functionaliteiten bevat.
Omdat de reguliere spelvormen van geocaching niet geschikt zijn adviseren wij om gebruik te maken van een aangepaste variant die meer aangepast is op mensen met een visuele beperking 

# Bronnen

IAPB (2022, August 31). Retrieved August 31, 2022, from https://www.iapb.org/learn/vision-atlas/magnitude-and-projections/global/

Geocaching (2022, August 31). Retrieved August 31, 2022, from https://wireframe.raspberrypi.com/articles/seen-and-heard-making-games-for-the-visually-impaired

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

Geocaching (2022, August 31). Retrieved August 31, 2022, from https://www.geocaching.nl/

Geocachen (2022, August 31). Retrieved August 31, 2022, from https://geocachen.nl/

A-Frame (2022, August 31). Retrieved August 31, 2022, from https://aframe.io/

Unity 1.40 Reference Guide. Reference. (2022, August 31). Retrieved August 31, 2022, from https://developer.oculus.com/reference/unity/1.40/class_o_v_r_boundary/ 

Introduction – A-frame. A-frame. (2022, August 31). Retrieved August 31, 2022, from https://aframe.io/docs/1.3.0/introduction/ 

