# AGENTS.md — SMD

## Formål
Dette er hovedinstruksen for AI-/kodeagenter som arbeider i GitHub-repositoriet for SMD. Les denne filen først, og følg deretter de relevante prosjektfilene nedenfor før du foreslår eller gjør endringer.

## Dokumenter som skal leses ved oppstart
1. [Nettsideplan (utkast)](docs/NETTSIDEPLAN.md) — mål, designretninger, arkitektur, faser og åpne beslutninger.
2. [Skill: Bedriftens fillagring](skills/bedrift-fillagring/SKILL.md) — lagring i Norge, Digiserv, Microsoft 365, Jottacloud og sikker håndtering av bedriftsfiler.
3. [Skill: Clean Code](skills/clean-code/SKILL.md) — **obligatorisk** før planlegging, skriving, endring, testing, kodegjennomgang og refaktorering. Les og følg den lokale SMD-tilpasningen. Original: https://github.com/btseee/clean-code-skills/blob/main/skills/clean-code/SKILL.md (den komplette oppstrøms-skillen er ikke installert).
4. [Skill: Caveman](skills/caveman/SKILL.md) — kort og presis svarstil. Les ved behov for `/caveman`, «caveman mode» eller eksplisitt ønske om korte svar. Skillen er tilgjengelig, men er **ikke automatisk aktivert** bare fordi den er referert her.
   - Opphav: https://github.com/JuliusBrussee/caveman/blob/main/skills/caveman/SKILL.md

Hvis en referert fil mangler, si tydelig fra og ikke gjett innholdet.

## Oppgavestyring ved oppstart
1. Les [oppgavereglene](tasks/README.md) ved **hver oppstart**.
2. Se hvilke oppgaver som finnes i `tasks/`, og les relevante oppgavefiler før du begynner arbeid.
3. Opprett én `.md`-fil per ny, avklart oppgave ved hjelp av [oppgavemalen](tasks/OPPGAVEMAL.md).
4. **Status skal stå i starten av selve filnavnet**, nøyaktig `to do - `, `in progress - ` eller `done - `.
5. Ved oppstart av arbeid: gi eksisterende oppgave nytt navn fra `to do - ...` til `in progress - ...`.
6. Ved fullført og kontrollert arbeid: gi filen nytt navn til `done - ...`. Oppdater status og dokumentasjon inne i filen også.
7. Ikke marker en oppgave som `done` uten at arbeid og kontroll faktisk er gjennomført.
8. Behold fullførte oppgaver som historikk og oppdater lenker etter navneendring.

## Bekreftet prosjektkontekst
- Prosjekt: SMD, bedrift som utvikler/selger briller.
- SMD skal ha en **statisk nettside** publisert via **GitHub Pages**.
- Bedriften **har allerede eget domene**; faktisk domenenavn er ikke oppgitt i denne prosjektfilen.
- Bedriften bruker **Digiserv webmail**. Endringer i DNS må ikke bryte eksisterende e-post (MX, SPF, DKIM eller DMARC).
- Bedriften har 2–5 brukere og prioriterer at bedriftsfilene lagres i Norge.
- Filer ligger per i dag i Microsoft Teams; Jottacloud vurderes. Beslutning om flytting er ikke endelig.
- Medarbeidernes Microsoft-lisenser er knyttet til deres andre arbeidsplasser. Ikke anta at disse lisensene kan brukes i SMD.

## Arbeidsregler for nettsiden
1. Begynn alltid med å lese `skills/clean-code/SKILL.md`, `docs/NETTSIDEPLAN.md` og eventuelle nyere beslutningsdokumenter.
2. Skill eksplisitt mellom **besluttet**, **foreslått** og **uavklart**. Gjør ikke designutkast om til vedtatte krav.
3. Prioriter rask lasting, tilgjengelighet, mobiltilpasning, søkemotorvennlighet, liten kompleksitet og lav driftskostnad.
4. Hold første versjon statisk og enkel. Ikke innfør backend, database, betalt tjeneste, analyse/sporing eller tredjepartsskript uten dokumentert behov og godkjenning.
5. Planlegg HTTPS, domenekobling og DNS med særskilt vern av eksisterende Digiserv-e-post. Endre aldri MX/SPF/DKIM/DMARC som bieffekt av nettsidepublisering.
6. Ingen hemmeligheter, API-nøkler, passord, kundedata eller interne dokumenter i repoet. Anta at GitHub Pages-repoet kan være offentlig.
7. Bruk faktiske produktbilder, varemerker og tekster bare når bruksrett og innhold er avklart. Eksempeltekst og illustrasjoner skal merkes som plassholdere.
8. Foretrekk enkle, vedlikeholdbare løsninger. Dokumenter hvordan nettsiden bygges, forhåndsvises og publiseres.
9. Kjør relevante tester og kontroller interne lenker, responsivt oppsett og tilgjengelighet før publisering.
10. Ved beslutninger om datalagring og Office-bruk, konsulter `skills/bedrift-fillagring/SKILL.md`; verifiser priser og vilkår på nytt.

## Arbeidsflyt for oppgaver
- Les prosjektfilene, `tasks/README.md` og relevante oppgavefiler; oppsummer relevante beslutninger.
- Identifiser om brukerens nye bestilling endrer planen.
- Gjør minste hensiktsmessige endring; forklar berørte filer og eventuelle forutsetninger.
- Oppdater `docs/NETTSIDEPLAN.md` når nye valg blir bekreftet.
- Ikke publiser nettsiden, endre DNS eller flytt bedriftsfiler uten uttrykkelig klarsignal.

## Status
Nettsideplanen er et **foreløpig utkast**. Design, målgruppe, språk, sidetyper, domenenavn, produktmateriell og publiseringsrutine er ennå ikke endelig avklart.

## Lokal mappestruktur
- [Prosjektoversikt](README.md) forklarer hvilke mapper som brukes.
- `site/`: offentlig nettsidekode, sider og godkjente grafiske ressurser.
- `docs/`: plan, design og beslutninger.
- `skills/`: prosjektspesifikke skills.
- `tasks/`: oppgaver med navneprefiks `to do - `, `in progress - ` og `done - `.
- `local-private/`: lokale, interne filer. **Aldri commit eller push denne mappen.**
- Les `.gitignore` før du legger til nye filtyper. Ikke legg sensitive filer i versjonskontroll selv om Git ignorerer mappen.
- Opprett bare reelle oppgavefiler når oppgavene faktisk er definert; ikke fyll mappene med spekulative arbeidsoppgaver.
