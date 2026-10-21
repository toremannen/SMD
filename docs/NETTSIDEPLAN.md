# SMD — Utviklingsplan for statisk nettside

**Status:** Design og omfang for versjon 1.0 besluttet av prosjekteier 21. oktober 2026. Nettsiden skal godkjennes før merge og publisering. Øvrige forslag og åpne spørsmål nedenfor er fortsatt foreløpige.

## 1. Bekreftet utgangspunkt
- En statisk nettside skal utvikles for SMD.
- Nettsiden skal hostes på **GitHub Pages**.
- SMD eier allerede et domene, men domenenavnet er ikke oppgitt her.
- E-post brukes gjennom **Digiserv webmail**; eksisterende e-postoppsett skal ikke påvirkes.
- SMD er knyttet til utvikling og salg av briller.

## 2. Mål — forslag, ikke vedtak
- Presentere SMD profesjonelt og tydelig.
- Gi informasjon om briller, virksomhet og muligheter for kontakt.
- Gjøre nettstedet enkelt å oppdatere og rimelig å drifte.
- Kunne utvide til flere språk og produktsider senere.

## 3. Foreløpige designskisser

### Retning A — Minimalistisk / eksklusiv
- Lys, varm bakgrunn, rolig typografi og store produktbilder.
- Enkel toppmeny: Produkter / Om SMD / Kontakt.
- Stor førsteseksjon med verdibudskap og produktfoto.
- Egnet ved prioritet på produktdesign og merkevare.

```text
+--------------------------------------------------+
| SMD                                      Meny     |
+--------------------------------------------------+
|                                                  |
|   Stor overskrift om produkt / visjon            |
|   Kort introduksjon              [Produktfoto]   |
|   [Se produkter]                                 |
|                                                  |
+--------------------------------------------------+
|   Produkter       Om SMD           Kontakt       |
+--------------------------------------------------+
```

### Retning B — Teknologisk / innovativ
- Mørkere farger og tydeligere teknologisk uttrykk.
- Førsteseksjon med fokus på innovasjon og løsning.
- Navigasjon: Teknologi / Produkter / Selskapet / Kontakt.
- Egnet hvis distributører, partnere og investorer er hovedmålgruppe.

```text
+--------------------------------------------------+
| SMD /                           Technology  Menu |
+--------------------------------------------------+
|  INNOVATION YOU CAN SEE                          |
|  Produkt / teknologi [stort visuelt element]     |
|  [Lær mer]          [Kontakt oss]                 |
+--------------------------------------------------+
|  Våre løsninger                Om selskapet       |
+--------------------------------------------------+
```

**Merk:** Disse er skisseforslag med plassholdertekst, ikke vedtatt design eller faktisk produktbeskrivelse.

## 4. Mulig sidestruktur (må besluttes)
- Forside
- Produkter / løsning
- Om SMD
- Kontakt
- Eventuelt Teknologi, Nyheter, Nedlastinger og språkvelger

## 5. Teknisk forslag
- **GitHub Pages** som hosting for statiske HTML/CSS/JavaScript-filer.
- Start med enkel HTML/CSS/JS eller en lett statisk nettstedsgenerator hvis flere sider og språk gjør dette hensiktsmessig.
- Kildekode lagres i et **SMD-eid GitHub-repositorium**, ikke en ansatts eller annen arbeidsgivers konto.
- Publisering via GitHub Pages (branch eller GitHub Actions etter valgt prosjektstruktur).
- Bruk tilpasset domene og HTTPS. DNS-endringer må planlegges slik at Digiserv-e-post ikke blir berørt.
- Ikke legg inn passord, kundelister, interne dokumenter eller andre hemmeligheter i offentlig kildekode.
- For kontaktskjema må en ekstern tjeneste, e-postlenke eller annen løsning velges; GitHub Pages kjører ikke egen backend.
- Ved salg/betaling må egen netthandels-/betalingsløsning vurderes; GitHub Pages er bare statisk hosting.

## 6. Faser
1. **Avklaring:** målgruppe, formål, språk, sider, funksjoner, logo, bilder og domene.
2. **Innhold og design:** sidekart, tekstutkast og valg av retning A/B eller kombinasjon.
3. **Prototype:** responsiv forside og eksempel på produktside; godkjenning før full utvikling.
4. **Utvikling:** øvrige sider, navigasjon, mobilvisning, tilgjengelighet, metadata og bilder.
5. **Kvalitetssikring:** gjennomgang av tekster, lenker, ytelse, responsivitet og rettigheter til bilder.
6. **Publisering:** GitHub Pages, HTTPS og domenekobling uten å forstyrre Digiserv.
7. **Drift:** dokumentert redigerings- og publiseringsrutine, begrensede administratorrettigheter og oppdateringer.

## 7. Åpne spørsmål som må besvares før planen låses
- Hva står SMD for, og hva er det korrekte domenenavnet?
- Er hovedmålet selskapsprofil, produktkatalog, salg eller en kombinasjon?
- Hvem er primærmålgruppe: privatpersoner, brillebutikker/distributører, investorer eller andre?
- Designvalg: minimalistisk, teknologisk eller en blanding?
- Språk: norsk, engelsk eller begge?
- Hvilke sider og funksjoner trengs i første versjon?
- Finnes logo, grafisk profil, bilder, produktbeskrivelser og rettigheter til materialet?
- Hvem skal kunne oppdatere nettsiden, og hvordan?

## 8. Tilknyttet prosjektkunnskap
- [Instruksjoner for agenter](../AGENTS.md)
- [Skill: Fillagring og Microsoft 365](../skills/bedrift-fillagring/SKILL.md)

## 9. Beslutninger for versjon 1.0 — 21. oktober 2026

- **Besluttet:** Mørkt, teknologisk uttrykk med #09111D, #152536, #64C7DA og #EFF4F7. Fokus på innovasjon og briller.
- **Besluttet:** Norsk bokmål som standard, engelsk språkvalg; seksjonene Hjem, Teknologi, Om oss og Kontakt på én side.
- **Besluttet:** HTML, CSS og enkel JavaScript i `site/`, uten byggetrinn eller tredjepartsskript.
- **Bekreftet kontaktadresse:** post@smartmedicaldiscovery.no, oppgitt av prosjekteier. Dette fastsetter ikke nettstedets domene eller hva SMD står for.
- **Besluttet:** Gren `feature/smd-website-v1`, PR mot `main`. Ingen merge eller publisering før prosjekteiers godkjenning. Eksisterende Pages-workflow beholdes.
- **Innholdsgrense:** Kun bekreftet informasjon om utvikling og salg av briller. Ingen produktspesifikasjoner, medisinske påstander, statistikk eller interne opplysninger.
- **Plassholder:** Egen abstrakt SVG-konseptillustrasjon av briller, tydelig merket som illustrasjon og ikke produktfoto. Tekstbasert SMD-merke er et designutkast, ikke en bekreftet offisiell logo.
- **Uavklart:** Offisielt domene, offisiell logo, godkjent produktmateriell, konkrete teknologibeskrivelser og primærmålgruppe.
