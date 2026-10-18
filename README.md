# SMD – lokalt prosjekt

Dette er lokal arbeidsmappe og foreslått GitHub-repositorium for SMDs statiske nettside.

## Start her
1. Les [AGENTS.md](AGENTS.md) og [nettsideplanen](docs/NETTSIDEPLAN.md).
2. Les [oppgavereglene](tasks/README.md) før du starter arbeid.
3. Legg nettsidekoden i `site/`. Her er det foreløpig bare tomme undermapper.
4. Legg dokumentasjon og beslutninger i `docs/`, og skills i `skills/`.
5. Legg bedriftens sensitive filer i `local-private/` **lokalt**, aldri i GitHub.

## Viktig
- GitHub Pages skal brukes til publisering, men deploy-metode er ennå ikke besluttet.
- Domenet eies allerede av SMD. Ikke endre Digiserv sine e-postposter i DNS.
- `local-private/` er utelatt via `.gitignore`. Dette beskytter ikke filer som allerede er lagt til i Git-historikken.
- Lag separat sikkerhetskopi; Git er ikke sikkerhetskopi av bedriftsarkivet.
