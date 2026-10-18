---
name: bedrift-fillagring
summary: Råd om fillagring, Microsoft 365, Jottacloud og sikker migrering for en norsk bedrift med 2–5 brukere.
---

# Skill: Fillagring og Microsoft 365 for liten norsk bedrift

## Formål
Gi konkrete, nøkterne anbefalinger om fillagring, deling, Office-lisenser, kostnader og sikker overgang fra Microsoft Teams/SharePoint til en løsning med norsk datalagring.

## Kjent situasjon
- Bedriften har **2–5 brukere**.
- **Høyeste prioritet er at filene lagres i Norge**. Avklar om dette også innebærer krav om at ingen dokumentdata, metadata eller sikkerhetskopier behandles utenfor Norge.
- Dokumentene ligger per nå i **Microsoft Teams** (kanalfiler ligger normalt i SharePoint; chatvedlegg vanligvis i OneDrive).
- Bedriften vurderer å flytte filene til **Jottacloud Business**.
- E-post håndteres allerede gjennom **Digiserv webmail**, og det er ikke noe uttalt ønske om å bytte e-postleverandør.
- Medarbeiderne har Microsoft-lisenser via **andre arbeidsplasser**. Ikke anta at disse tillater bruk i den aktuelle bedriften eller gir bedriften eierskap/administratortilgang.
- Word og Excel er aktuelle arbeidsverktøy; behovet for samtidig redigering og avanserte Excel-funksjoner er ennå ikke kartlagt.

## Foreløpig anbefalt arkitektur
1. **Behold Digiserv** til e-post inntil det finnes en konkret grunn til å bytte.
2. **Vurder Jottacloud Business** som hovedlager, forutsatt skriftlig verifisering av lagringssted, databehandling, administratorrettigheter, underleverandører og avtalebetingelser.
3. **Gi bedriften egne lovlige Office-lisenser** hvis Word/Excel trengs. Ikke baser bedriftsdriften på lisenser eller kontoer eid av andre arbeidsgivere.
4. Bruk **egne individuelle brukerkontoer**, flerfaktorautentisering og rollebasert mappetilgang.
5. Ha en **uavhengig, testet sikkerhetskopi**. Synkronisering er ikke det samme som backup.
6. Behold Teams/SharePoint inntil migreringen er validert; vurder deretter om tjenesten fortsatt er nødvendig.

## Valg mellom løsningene
- **Jottacloud + lokalt Word/Excel**: Relevant når norsk lagring er viktigst og dokumentene stort sett redigeres individuelt.
- **Jottacloud + Microsoft 365 Business Basic**: Nettbasert Office kan være rimelig, men dokumenter som åpnes i Microsofts nettjenester kan behandles utenfor Jottacloud. Ikke beskriv løsningen som utelukkende norsk databehandling uten dokumentasjon.
- **Jottacloud + Microsoft 365 Business Standard**: Relevant hvis fullverdige skrivebordsprogrammer for Mac/PC er nødvendige.
- **Bare Microsoft 365 med SharePoint/OneDrive**: Sterkt samarbeid og avansert administrasjon; verifiser konkret datalagringslokasjon og behandling dersom Norge-kravet er absolutt.
- **LibreOffice lokalt + Jottacloud**: Mulig kostnadsbesparende alternativ, men test avanserte regneark og Office-kompatibilitet.

## Historiske prisopplysninger fra samtalen (må kontrolleres på nytt)
Alle prisene nedenfor ble omtalt som ekskl. mva. og er **ikke garanterte dagspriser**:

| Produkt | Omtalt pris |
| --- | ---: |
| Jottacloud Business Small | €12/mnd., 2 brukere |
| Jottacloud Business Medium | €18/mnd., opptil 10 brukere, 1 TB |
| Microsoft 365 Business Basic uten Teams | 54,89 kr/bruker/mnd. |
| Microsoft 365 Business Basic med Teams | 71,16 kr/bruker/mnd. |
| Microsoft 365 Business Standard uten Teams | 109,68 kr/bruker/mnd. |
| Microsoft 365 Business Standard med Teams | 142,31 kr/bruker/mnd. |
| Microsoft 365 Apps for business | 127,60 kr/bruker/mnd. |

Kontroller priser, kapasitet, betalingsbinding, tjenester, MVA, valuta og eventuelle endrede abonnementsnavn på offisielle leverandørsider før tilbud/budsjett. Tidligere nevnte priser skal ikke presenteres som verifiserte dagens priser.

## Migreringsprosedyre fra Teams
1. Kartlegg hvilken Microsoft-tenant som **eier dataene**, hvilke kontoer som har administratorrettigheter, og om filene kan eksporteres lovlig.
2. Kartlegg Teams-kanalfiler (SharePoint), eventuelle chatfiler (OneDrive), mappestruktur, eierskap og sensitivitet.
3. Sjekk nødvendige rettigheter og lisensvilkår. Skaff bedriftseide kontoer.
4. Opprett målstruktur i Jottacloud med egne brukere, MFA og mapper for administrasjon, økonomi, regnskap, produkter, leverandører, salg, avtaler og arkiv.
5. Kopier først én **pilotmappe**, uten å slette originaler.
6. Test filåpning, formler, makroer, dokumentformatering, deling, tilgang, offline-funksjon og konfliktfiler.
7. Dokumenter forhold som ikke overføres automatisk, spesielt SharePoint-tillatelser, lenker, metadata og versjonshistorikk.
8. Kopier resten, gjennomfør fil- og antallskontroller, og kontroller gjenoppretting fra backup.
9. Avvikle ikke Microsoft-løsningen før dataene er kontrollert, eierskap og tilgang er sikret, og de relevante oppbevaringskravene er oppfylt.

## Sikkerhet og personvern
- Be om skriftlig databehandleravtale og informasjon om datasentre, underleverandører, metadata, supporttilgang, redundans og overføringer til andre land.
- Skill mellom **lagring i Norge** og **all databehandling i Norge**. Integrasjon med Office Online kan innebære behandling hos Microsoft.
- Bruk minst mulig åpne delingslenker, og revurder tilgang ved ansatte som slutter.
- Krypter uavhengig sikkerhetskopi, og test restaurering regelmessig.
- Behold oversikt over eventuelle personopplysninger og lovpålagte oppbevaringskrav.

## Videre arbeidsmåte
Når brukeren ber om anbefaling eller budsjett:
1. Bruk allerede kjente behov; unngå å spørre om ting som er avklart.
2. Kontroller **aktuelle priser og offisielle produktvilkår**.
3. Sammenlign 2, 3 og 5 brukere, med månedlig og årlig totalsum i NOK eks. mva.; oppgi valutaforutsetning hvis europriser brukes.
4. Skill klart mellom kostnad for **fillagring**, **Office-apper**, **e-post** og **backup**.
5. Oppgi en konkret anbefaling og en enkel gjennomføringsplan med mulige risikoer.

## Åpne spørsmål (bare ved behov)
- Eier bedriften sin egen Teams/SharePoint-tenant, eller ligger dokumentene hos en av de andre arbeidsgiverne?
- Bruker flere ansatte samtidig redigering i Word/Excel?
- Er avanserte Excel-formler, makroer eller andre Office-avhengigheter viktige?
- Hvor stor er dagens totale datamengde, og hvor mye forventes den å vokse?
- Gjelder Norge-kravet kun oppbevaring av filer, eller også behandling av innhold og metadata?

## Nyttige offisielle sider
- https://jottacloud.com/nb/business
- https://www.microsoft.com/nb-no/microsoft-365/business/microsoft-365-plans-and-pricing
