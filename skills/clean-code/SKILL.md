---
name: clean-code
description: Obligatoriske Clean Code-regler for planlegging, utvikling, gjennomgang, testing og refaktorering i SMD.
source: https://github.com/btseee/clean-code-skills/blob/main/skills/clean-code/SKILL.md
source-version-checked: 4.0.0
status: SMD-tilpasning, ikke en fullstendig kopi av oppstrøms-skillen
---

# Clean Code – SMD-tilpasning

Dette er en **lokal, selvstendig tilpasning** av prinsippene i [btseee/clean-code-skills](https://github.com/btseee/clean-code-skills/blob/main/skills/clean-code/SKILL.md), som igjen bygger på Clean Code/Clean Architecture-prinsipper. Den komplette oppstrøms-skillen har tilleggsmateriale i `references/` og `scripts/` som **ikke** følger denne pakken. For full funksjonalitet må hele oppstrømsmappen installeres og gjennomgås separat.

## Når skal den brukes?

Les denne filen før du planlegger, skriver, endrer, tester, gjennomgår eller refaktorerer kode i SMD. Les også `../../AGENTS.md`, `../../docs/NETTSIDEPLAN.md` og relevante oppgaver i `../../tasks/`.

## Arbeidsprosedyre

1. Identifiser brukerens ønskede endring, berørte filer og konkrete akseptansekriterier.
2. Les eksisterende nærliggende kode og gjenbruk etablerte løsninger før du lager nye.
3. Gjør minst mulig målrettet endring. Unngå unødvendige rammeverk, avhengigheter og konfigurasjon.
4. Gi variabler, funksjoner og filer presise og konsistente navn.
5. Sørg for ett tydelig ansvar per funksjon/komponent. Del opp kompleksitet når det øker forståeligheten.
6. Unngå duplisering som må vedlikeholdes samlet, men abstraher ikke spekulativt (DRY/YAGNI).
7. Skill innhold, presentasjon og oppførsel der det gir praktisk verdi i statisk HTML/CSS/JavaScript.
8. Følg SOLID og avhengighetsregler der arkitekturen er kompleks nok til at de er relevante. Ikke innfør lagdeling uten behov.
9. Bevar sikkerhet og tilgjengelighet: valider inndata, unngå hemmeligheter i Git, bruk semantisk HTML, tastaturstøtte, lesbare kontraster og fornuftig responsivt oppsett.
10. Kontroller endringen med relevante tester, bygg, lenkesjekk eller manuell verifikasjon. Ikke si at tester er kjørt hvis de ikke er det.
11. Gjennomgå diffen og fjern debugkode, døde filer og utilsiktede endringer.
12. Dokumenter beslutninger og oppdater status for oppgaven i henhold til `tasks/README.md`.

## Spesielt for SMD

- Første leveranse er en lett, statisk nettside for GitHub Pages.
- Ikke ta inn backend, database eller klientbiblioteker uten dokumentert behov.
- Ikke endre DNS-poster som brukes av Digiserv-e-post.
- Ikke opprett `.clean/` eller kjør skript som ikke er installert og gjennomgått.
- Prosjektspesifikke beslutninger i `AGENTS.md` og `docs/NETTSIDEPLAN.md` går foran generelle råd her.

## Opprinnelse og videre installasjon

Oppstrøms: https://github.com/btseee/clean-code-skills/tree/main/skills/clean-code

Ved behov for full oppstrømsfunksjonalitet: hent hele `skills/clean-code/` med `references/`, eventuelle `scripts/` og andre tilhørende filer fra offisielt repo; gjennomgå innholdet før bruk og erstatt denne tilpasningen. Den lokale filen er ikke en identisk versjon av oppstrøms `SKILL.md`.
