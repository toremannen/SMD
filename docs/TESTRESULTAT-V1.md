# Kontroll av SMD v1.0

Dato: 21. oktober 2026. Utført av Codex i lokal Chromium-forhåndsvisning.

- Norsk og engelsk testet ved 320, 375, 768 og 1280 CSS-piksler (850 px høyde). Dokumentbredden var lik visningsbredden i alle åtte tilfeller. Mobilforside og kontaktseksjon visuelt kontrollert ved 375 px; skrivebordsforside visuelt kontrollert.
- NO → EN → NO kontrollert: innhold, navigasjon, sidetittel, HTML-språk, ARIA-etiketter og trykket tilstand oppdateres. Ingen tomme oversettelsesfelt på engelsk. Norske overskriftslinjeskift bevares ved retur.
- Begge språkknappene aktivert med Enter; riktig aria-pressed bekreftet.
- Alle fire navigasjonslenker klikket og korrekt URL-fragment kontrollert. Mobil kontaktoverskrift ligger under den faste toppmenyen. Alle interne ankere har eksisterende mål.
- Ny sidelasting gjenoppretter norsk som standard.
- Statisk kontroll av 16 lenker/ressurser, unike ID-er og 40 oversettelsesbindinger besto. Ressursstier er relative og kan brukes under Pages-prosjektstien.
- Ingen nettleserfeil eller advarsler registrert. git diff --check besto.
- Semantiske regioner, overskrifter, illustrasjonstittel, hopp-til-innhold-lenke, synlig fokus og redusert bevegelse gjennomgått.
- Ingen eksterne ressurser eller avhengigheter; hele site/-mappen er omtrent 23 KB inkludert README.
- Eksisterende Pages-workflow er uendret. Ingen deploy, merge eller DNS-endring er utført.

## Avgrensning

Testet i lokal nettleser med justert visningsbredde, ikke på fysiske telefoner eller i Safari/Firefox. E-postlenkens adresse er kontrollert; ingen e-post er sendt. Ingen faktisk Pages-publisering er utført før prosjekteiers godkjenning. Full skjermlesertest er ikke utført.
