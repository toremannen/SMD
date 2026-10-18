# Oppgave: Opprette GitHub Pages-workflow

- **Status:** done
- **Leveranse:** `.github/workflows/deploy-pages.yml`
- **Formål:** Publisere den statiske SMD-nettsiden fra `site/` via GitHub Actions.

## Utført
- Konfigurert publisering på push til `main` når nettsidefilene eller workflowen endres.
- Lagt til manuell kjøring.
- Bruker offisielle GitHub Actions for Pages og begrensede tillatelser.
- Publiserer kun `site/`.
- Kontroll av at `site/index.html` finnes.
- Kontrollert YAML-syntaks lokalt.

## Utestående, separat fra denne oppgaven
- Legg til faktisk `site/index.html`.
- Konfigurer `Settings > Pages > Source: GitHub Actions`.
- Kjør workflowen i det faktiske GitHub-repositoriet og kontroller publisering.
- Konfigurer SMDs domene uten å endre Digiserv sine MX/SPF/DKIM/DMARC-poster.
