# Onderzoeksdocument

![Foto van VR Cache](/src/images/banner.png)

# Inhoudsopgave

1. [Inleiding](#inleiding)<br/>
1.1. [Het bedrijf](#het-bedrijf)<br/>
1.2. [Aanleiding](#aanleiding)<br/>
1.3. [Doelstelling](#doelstelling)<br/>
1.4. [Opdrachtomschrijving](#opdrachtomschrijving)<br/>
1.5. [Scope van het onderzoek](#scope-van-het-onderzoek)
2. [Hoofdvraag](#hoofdvraag)
3. [Deelvragen](#deelvragen)<br/>
ㅤㅤ3.1. [Hoe pas je virtual reality toe op een toegankelijk manier voor mensen met een visuele beperking?](#hoe-pas-je-virtual-reality-toe-op-een-toegankelijk-manier-voor-mensen-met-een-visuele-beperking)<br/>
ㅤㅤ3.2. [Hoe ontwikkel je een virtual reality game in de browser door middel van A-Frame](#hoe-ontwikkel-je-een-virtual-reality-game-in-de-browser-door-middel-van-a-frame)<br/>
ㅤㅤ3.3. [Wat is toegankelijkheid?](#wat-is-toegankelijkheid)<br/>
ㅤㅤ3.4. [Wat is een visuele beperking](#wat-is-een-visuele-beperking)<br/>
ㅤㅤ3.5. [Op welke manier draagt toegankelijkheid in games bij aan minder ongelijkheden](#op-welke-manier-draagt-toegankelijkheid-in-games-bij-aan-minder-ongelijkheid)
4. [Conclusie](#conclusie)
5. [Aanbevelingen](#aanbevelingen)
6. [Evaluatie](#evaluatie)
7. [Bronnen](#bronnen)

# Inleiding

## Het bedrijf
[Stichting Accessibility](https://www.accessibility.nl/), opgericht in 2001 als onderdeel van [Bartimeus](https://www.bartimeus.nl/), is een stichting die streeft naar een samenleving waarin iedereen zelfstandig mee kan doen in de maatschappij. [Bartimeus](https://www.bartimeus.nl/) richt zich op zorginstellingen en contact met cliënten, [Stichting Accessibility](https://www.accessibility.nl/) houdt zich bezig met onderzoek, ontwikkeling en voorlichtingen voor en met klanten zoals bedrijven en scholen. Binnen de [Stichting Accessibility](https://www.accessibility.nl/) wordt er [Agile](https://wikipedia.org/wiki/Agile-softwareontwikkeling) gewerkt met vier verschillende teams, één team als front office met daarnaast drie uitvoeringsteams. Deze teams zijn opgedeeld in twee verschillende categorieën, twee verantwoordelijk voor klanten en één verantwoordelijk voor projecten bij bedrijven en scholen.

![Organogram Stichting Accessibility](https://github.com/HU-ICT-LAB/VR-Cache/blob/master/docs/organogram-stichting-a11y.png)

## Betrokkenen

### [Veron Wormeester (opdrachtgever)](https://www.accessibility.nl/persoon/veron-wormeester)
Veron maakt deel uit van het projectteam binnen [Stichting Accessibility](https://www.accessibility.nl/) als projectleider en gebruikersonderzoeker. Hij is gespecialiseerd in het doen van onderzoek onder eindgebruikers. Veron is betrokken bij projecten op het gebied van educatie en projecten op het gebied van toegankelijke games.

## Aanleiding
Virtual reality wordt steeds populairder en ontwikkeld zich razendsnel, [Hogeschool Utrecht](https://www.hu.nl/) is hier al een langere tijd mee aan het experimenteren en de mogelijkheden aan het ontdekken. De [Hogeschool Utrecht](https://www.hu.nl/) werkt regelmatig samen met [Stichting Accessibility](https://www.accessibility.nl/) binnen de opleiding en vroegen zich af hoe kan virtual reality ingezet worden voor mensen met een visuele beperking. Hierdoor is [Hogeschool Utrecht](https://www.hu.nl/) in gesprek gegaan met [Stichting Accessibility](https://www.accessibility.nl/) om een project te ontwikkelen voor studenten van [Hogeschool Utrecht](https://www.hu.nl/).

## Doelstelling
Het doel van dit onderzoek is om uit te vinden wat er allemaal mogelijk is in virtual reality voor mensen met een visuele beperking en hoe dit in de toekomst ingezet kan worden op verschillende manieren. Op dit moment is er nog heel weinig bekend over toegankelijkheid binnen virtual reality. We hopen met dit onderzoek bij te dragen aan de toegankelijkheid binnen virtual reality en dat dit ingezet kan worden in het dagelijks leven.

## Opdrachtomschrijving
Binnen dit onderzoek willen wij erachter komen in hoeverre virtual reality ingezet kan worden voor mensen met een visuele beperking, zodat ze in de toekomst meer gebruik kunnen maken van virtual reality in het dagelijkse leven. Om deze reden gaan wij een [geocaching](https://wikipedia.org/wiki/Geocaching) spel ontwikkelen voor de browser door middel van het [AFrame framework](https://aframe.io/). Deze kan gespeeld worden met virtual reality headsets met nadruk voor de Oculus Quest 2.

## Scope van het onderzoek
Wij gaan ons bezighouden met toegankelijkheid binnen virtual reality. Toegankelijkheid is een heel breed begrip, wij gaan ons in het specifiek focussen op mensen met een visuele beperking. Voor dit onderzoek gebruiken we [A-Frame](https://aframe.io/) als framework om een virtual reality geocaching spel mee te ontwikkelen, waarin de speler opzoek gaat naar een cache.

# Hoofdvraag
Wat is een geschikte manier om een virtual reality geocaching spel te ontwikkelen in de browser op basis van [A-Frame](https://aframe.io/) zodat mensen met een visuele beperking het ook kunnen spelen?

# Deelvragen

## Hoe pas je virtual reality toe op een toegankelijk manier voor mensen met een visuele beperking?

### Aanpak
Hoe je virtual reality games toegankelijk maakt voor mensen met een visuele beperking kunnen we op twee manieren onderzoeken. Onze eerste informatie bron is ons contact persoon Mike, hij  heeft zelf een visuele beperking en interesse in videogames. Door middel van [interviews](https://ictresearchmethods.nl/Interview) kunnen we een goed perspectief krijgen op wat slechte en goede hulpmiddelen zijn voor visueel beperkte spelers in videogames. Onze tweede informatie bron zal door middel van [community research](https://ictresearchmethods.nl/Community_research) zijn. Er zijn veel communities op het internet die ervaring hebben op het gebied van visueel beperkte videogames, zij kunnen helpen het perspectief wat we met Mike hebben te verbreden naar een grotere doelgroep.

### Resultaten
Op 6 april hadden we onze eerste meeting met Mike. In deze meeting hebben we hem geïnterviewd over het toegankelijk maken van games.

#### interview:

##### *Heb je zelf een paar voorbeelden van games die goed toegankelijk zijn?*
- Horizon Zero Dawn
- The Last Of Us II
- [Swamp](https://www.youtube.com/watch?v=4YVvvPGKsA0)
- [AudioGames.net](https://audiogames.net/list-games/)

Er zijn eigenlijk twee manieren hoe games voor visueel beperkte worden gemaakt. De eerste manier is als de game gericht is op inclusiviteit dit betekent dat de game gedeeltelijk te spelen is voor visueel beperkte, maar dat er sommige punten zijn die worden overgeslagen of de speler wordt geholpen. De tweede manier is als een game op toegankelijkheid is gericht, dit betekent dat de game in zijn volledigheid te spelen is door iemand met een visuele beperking.


##### *Hoe maak je geluiden duidelijk en onderscheidbaar?*
Zorg er voor dat objecten een realistisch natuurlijk geluid hebben, zoals als je op hout klopt dat het ook echt klinkt alsof je op hout klopt.

##### *In de game is er een kompas, hoe maak je die het beste toegankelijk?*
Het liefst zou je willen dat je iets van een knop ingedrukt houdt die er voor zorgt dat er een 3D sound wordt afgespeeld van waar de cache zich bevindt. Als alternatief zou je ook kunnen toepassen dat er een geluid afspeelt als je de goede kant op kijkt.

##### *Hoe zou het aangegeven moeten worden als je tegen een muur aanloopt?*
Je zou dan net zoals eerder beschreven een natuurlijk bonk geluid moeten horen van het materiaal waar je tegen aan loopt.

##### *Wat maakt een menu goed of slecht?*
Het is belangrijk om het menu goed te ordenen en een goede logische plaatsing te hebben van de knoppen. Veel games hebben in de menus dezelfde knop posities voor de verschillende opties, zoals dat de verdergaan knop altijd bovenaan staat. Dit zorgt er voor de een menu natuurlijk aanvoeld.

##### *Ambient sounds, zijn ze storend of helpen ze?*
Ambient sounds zijn heel belangrijk voor het schetsen van de omgeving. Een tekst omschrijving van de omgeving kan ook van grote toegevoegde waarde zijn.
Geluid van wind als er een opening links of rechts is 
Geluid van takjes of grond waar je op loopt

##### *Is een tutorial handig (Interactief of text)?*
Interactief is de beste manier om het spel uit te leggen, de speler kan zelf kiezen hoeveel die er mee doet.

##### *Qua map design, wat wel en niet?*
Als je een bos als voorbeeld zou nemen. Dan is het erg belangerijk dat je ook daadwerkelijk merkt dat je in een bos staat. Een textomschrijving van waar de speler zich begeeft zou handig kunnen zijn. Ook is het belangerijk dat de correcte omgevings geluiden toegepast worden zoals vogeltjes die zingen, wind door de bomen horen gaan en takjes die je hoort kraken als je er op loopt.

### Deelconclusie
In het interview kwam naar voren dat het belangerijk is om geluid op een toegankelijke manier toe te passen. De voorbeelden die Mike gaf met de 3d sound van de cache en de ambient geluiden in de omgeving zijn erg belangerijk om je te kunnen oriënteren in de map. Ook kwam naar voren dat hoe dichter de geluiden bij de werkelijkheid komen hoe makkelijker het is om een beeld te schetsen van je omgeving, bijvoorbeeld dat je in een bos de wind door bomen hoort gaan en dat je vogels hoort zingen, maar dat je ook objecten logische natuurlijke geluiden geeft om de speler te laten weten waar die mee interacteert.

## Hoe ontwikkel je een virtual reality game in de browser door middel van A-Frame?

### Aanpak

### Resultaten

### Deelconclusie

## Wat is toegankelijkheid?

### Aanpak
Om erachter te komen hoe je een virtual reality spel toegankelijk maakt is het noodzakelijk om goed in kaart te hebben wat er precies onder die term valt en ook juist wat hier niet onder valt. Om dit te onderzoeken zal er voornamelijk [literture study](https://ictresearchmethods.nl/Literature_study) gedaan worden om goed in kaart te brengen wat deze term inhoudt. Er zijn ook verschillende organisaties die hier veel mee bezig zijn die we kunnen [interviewen](https://ictresearchmethods.nl/Expert_interview) om hier meer informatie over te vergaren.

### Resultaten

### Deelconclusie

## Wat is een visuele beperking?

### Aanpak
Wij gaan een game maken voor mensen met een visuele beperking, maar wat is visuele beperking? Om erachter te komen wat dat inhoudt, kunnen we daarvoor [de literature study](https://ictresearchmethods.nl/Literature_study) gebruiken. Bij het gebruiken van die methode worden er allerlei bronnen verzameld en vervolgens een samenvatting gemaakt van belangrijke stukken. Ook kunnen we de [Survey](https://ictresearchmethods.nl/Survey) methode gebruiken om deze deelvraag te beantwoorden. Bij deze methode gaan we dan de doelgroep (Mike en Nicoline) ondervragen om informatie te vergaren en proberen in te beelden hoe het is om visueel beperkt te zijn.
### Resultaten

### Deelconclusie

## Op welke manier draagt toegankelijkheid in games bij aan minder ongelijkheid?

### Aanpak
Om erachter te komen hoe toegankelijkheid in games bijdraagt aan minder ongelijkheid gaan wij op twee manieren onderzoeken. Om dit te onderzoeken zal er voornamelijk [literture study](https://ictresearchmethods.nl/Literature_study) gedaan worden om er achter te komen hoe digitale toegankelijkheid wordt toegepast in verschillende games, maar ook websites, om ongelijkheid te weergeven. Ook gaan we een [Survey](https://ictresearchmethods.nl/Survey) doen onder visueel beperkten die gamen, in deze enquête ligt de nadruk vooral op ongelijkheid.

### Resultaten

### Deelconclusie

# Conclusie

# Aanbevelingen

# Evaluatie

# Bronnen
