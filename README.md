# maria-aguado.github.io — Starter Skeleton

A customizable bilingual (English/Spanish) static website skeleton for CV + artistic portfolio + personal page.

## Included in this starter

- One-page structure with these sections:
  - Home
  - Education
  - Publications
  - Talks & Lectures
  - Conferences
  - Concerts & Festivals
- Artistic glass-style visual theme with pink/blue/violet/turquoise palette
- Language switcher (`EN` / `ES`) with saved preference
- Data-driven content so you can scale easily by editing a single file

## Project structure

- `index.html` → page layout and section structure
- `styles/main.css` → color palette and visual design
- `scripts/i18n.js` → language switching + list rendering
- `data/content.js` → all editable text and section items in EN/ES
- `assets/profile-placeholder.svg` → temporary profile image

## Customize quickly

### 1) Replace your profile image

- Put your image in `assets/` (for example `assets/maria.jpg`)
- In `index.html`, replace:
  - `assets/profile-placeholder.svg`
  - with `assets/maria.jpg`

### 2) Edit your content (main file)

Open `data/content.js` and update:

- `home.intro` for your welcome paragraph
- `lists.education`, `lists.publications`, `lists.talks`, `lists.conferences`, `lists.concerts`
- both language objects: `en` and `es`

### 3) Add real social links

In `index.html`, update the `href` of your social links in the Home section.

## Run locally

Because this is a static site, you can preview with a local server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish on GitHub Pages

Since this repository corresponds to your user domain (`maria-aguado.github.io`):

1. Push this code to the `main` branch.
2. In GitHub repo settings, open **Pages**.
3. Set source to **Deploy from a branch**.
4. Choose branch `main` and folder `/ (root)`.
5. Save.

Your site should appear at:

- `https://maria-aguado.github.io`

## Next suggested upgrades

- Add a downloadable CV PDF button in Home
- Add dedicated detail pages for publications and performances
- Add a simple blog/news section
- Add analytics (privacy-friendly)
- Add SEO metadata and Open Graph images
