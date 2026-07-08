# Zain Hammagi, Portfolio

Personal portfolio site. About, Resume, Projects, Field Notes, Contact.

## Files

- `index.html`, structure
- `style.css`, all styling
- `script.js`, scroll reveals and KPI count-up animation
- `resume.pdf`, downloadable resume linked from the Resume section

## Local development

No build step. Open `index.html` directly in a browser, or run a tiny local
server so relative paths and fonts behave exactly like production:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## Deploying

Push to the `main` branch of a repo named `<username>.github.io` for a root
domain, or any other repo name for `<username>.github.io/<repo-name>`, then
enable GitHub Pages in Settings > Pages > Deploy from a branch > main > /(root).
