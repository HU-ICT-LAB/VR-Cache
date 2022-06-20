# Overdracht document
TODO: inleiding & context

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

## Limitaties


## Known bugs
1. [Audio Kraakt](https://github.com/HU-ICT-LAB/VR-Cache/issues/92)
