# TechDocs Web

**TechDocs Web** je moderní webová aplikace pro tvorbu technické dokumentace. Tento projekt je postaven na Reactu, TypeScriptu a Tailwind CSS, s využitím Vite pro rychlý vývoj.

## Funkce

- **Rychlost**: Rychlé generování dokumentace.
- **Kvalita**: Profesionální výstupy s moderním designem.
- **Flexibilita**: Podpora různých formátů a přizpůsobení.
- **Responzivita**: Optimalizováno pro mobilní i desktopová zařízení.

## Technologie

- **Frontend**: React + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite

## Struktura projektu

```
src/
├── components/       # React komponenty
├── index.css         # Globální styly
├── main.tsx          # Vstupní bod aplikace
├── App.tsx           # Hlavní komponenta aplikace
```

## Instalace

1. Klonujte repozitář:

   ```bash
   git clone https://github.com/uzivatel/techdocs-web.git
   cd techdocs-web
   ```

2. Nainstalujte závislosti:

   ```bash
   npm install
   ```

3. Spusťte vývojový server:

   ```bash
   npm run dev
   ```

4. Otevřete aplikaci v prohlížeči na adrese [http://localhost:5173](http://localhost:5173).

## Skripty

- `npm run dev` – Spustí vývojový server.
- `npm run build` – Vytvoří produkční build.
- `npm run preview` – Spustí náhled produkčního buildu.
- `npm run lint` – Spustí ESLint pro kontrolu kódu.

## Konfigurace

- **Tailwind CSS**: Konfigurace se nachází v souboru `tailwind.config.js`.
- **Vite**: Konfigurace se nachází v souboru `vite.config.ts`.
- **TypeScript**: Konfigurace se nachází v souborech `tsconfig.json` a `tsconfig.app.json`.

## Přispívání

1. Forkněte tento repozitář.
2. Vytvořte novou větev: `git checkout -b feature/nova-funkce`.
3. Proveďte změny a commitujte: `git commit -m 'Přidání nové funkce'`.
4. Pushněte změny: `git push origin feature/nova-funkce`.
5. Otevřete Pull Request.

## Licence

Tento projekt je licencován pod licencí MIT. Podrobnosti naleznete v souboru `LICENSE`.

## Kontakt

Máte otázky nebo návrhy? Kontaktujte mě na [info@techdocs.cz](mailto:info@techdocs.cz).
