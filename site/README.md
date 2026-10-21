# SMD — statisk nettside v1.0

`index.html` inneholder de fire seksjonene og alt norsk standardinnhold. `assets/css/styles.css` styrer design og mobiloppsett. `assets/js/main.js` inneholder engelske oversettelser og språkbytte. Bruk relative ressurslenker slik at siden virker under GitHub Pages-prosjektstien `/SMD/`.

## Forhåndsvisning

Kjør fra repositoryroten: `python3 -m http.server 8080 --directory site`, og åpne http://localhost:8080. Ingen installasjon eller bygg er nødvendig. Uten JavaScript virker norsk innhold og navigasjon fortsatt. Språkvalg gjelder den åpne siden; en ny sidelasting starter på norsk.

## Redigering og kontroll

Oppdater norsk tekst i HTML og tilsvarende engelsk nøkkel i JavaScript. Behold `data-i18n` og `data-label`. Kontroller begge språk, sidetittel, skjermleseretiketter, alle navigasjonslenker, e-postlenken, tastaturfokus og skjermbredder fra 320 px til skrivebord. Konseptillustrasjonen er en egen plassholder og viser ikke et faktisk SMD-produkt. Produktfakta og offisiell logo krever godkjent materiale.

Kontaktadressen post@smartmedicaldiscovery.no er bekreftet av prosjekteier. Ingen skjema, sporing, eksterne fonter eller tredjepartsskript er lagt til.

## Publisering

Eksisterende `.github/workflows/deploy-pages.yml` publiserer kun `site/` ved relevante endringer på `main` eller manuell kjøring. Denne leveransen skal gjennom PR og godkjennes før merge. Ikke kjør manuell deploy før godkjenning. Domenekobling og DNS inngår ikke; behold Digiserv-e-postens MX/SPF/DKIM/DMARC uendret.
