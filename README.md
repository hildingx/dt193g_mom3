# DT193G - Moment 3 - Frontendramverk Vue

## Beskrivning - Movielib
En SPA byggd med Vue.js Applikationen hanterar en lista över filmer där användaren kan:
- Visa en lista över filmer.
- Lägga till nya filmer.
- Ta bort filmer.
Hanteringen sker via HTTP-anrop till ett RESTful API.

## Vyer
- **HomeView**: Startsida 
- **MoviesView**: Hämta och visa filmer från API i tabell. Användaren kan lägga till ny film via formulär och ta bort filmer från tabellen.
- **AboutView**: En enkelt om-sida

## Komponenter
- **Movie**: Ansvarar för att visa en enskild film i en rad i tabellen. Inkluderar en delete-knapp, där händelsen emitas till föräldrakomponenten (MoviesView). Tar emot filmobjekt som prop från MoviesView.
- **AddMovie**: Ansvarar för att lägga till ny film via formulär. Användaren fyller i titel, filmlängd, beskrivning och om filmen är sedd eller ej. Validerar användarens input och skickar film till API via POST-anrop. Händelse emitas till MoviesView. 
- **Header**: Navigationskomponent.
- **Footer**: Sidfot

## Verktyg och tekniker
- **Vue.js**: Frontendramverk för SPA.
- **Bootstrap**: CSS-ramverk för styling.
- **Axios**: För att (enklare) göra API-anrop.