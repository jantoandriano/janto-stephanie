# Wedding Invitation

A single-page video wedding invitation. Open with a "seal" button on the
cover, scrolls into a fullscreen invitation video, and supports a
personalized guest name via a link parameter — one link per guest, one
site for everyone.

## Folder structure

```
wedding-invitation/
├── index.html              ← the whole site (structure, style, and logic)
└── assets/
    └── videos/              ← put your two video files here
        ├── cover-background.mp4   (optional, loops behind the cover)
        └── main-invitation.mp4    (your actual invitation video)
```

## 1. Add your videos

Drop your files into `assets/videos/` using the exact names above, then
open `index.html` and uncomment the two `<source>` lines (search for
`<!-- <source` — there are two, one for each video). Save, and the
placeholders in the page disappear automatically.

Keep `main-invitation.mp4` reasonably compressed (H.264, roughly under
30-50MB) so it loads quickly for guests opening the link over mobile data.

## 2. Try it locally

Just double-click `index.html` to open it in a browser — no build step,
no server required.

## 3. Put it on GitHub

```bash
cd wedding-invitation
git init
git add .
git commit -m "Wedding invitation"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Then turn on GitHub Pages:
1. On GitHub, open your repo → **Settings** → **Pages**.
2. Under **Source**, choose the `main` branch and `/ (root)` folder.
3. Save. Your site goes live at:
   `https://<your-username>.github.io/<repo-name>/`

That single link is the one you personalize per guest (see below) — you
don't need a separate domain or repo for each person.

> Note: GitHub has a soft 1GB repo size limit and warns above 50MB per
> file. If your videos are large, consider hosting them elsewhere (e.g.
> as an unlisted YouTube video, embedded instead of a raw `<video>` tag)
> rather than committing big files directly — this keeps deploys fast
> and avoids push errors.

## 4. Personalize each guest's link

The page reads a `?to=` parameter from the URL and displays it on the
cover and as a caption over the video. Same site, different link per
person:

```
https://<your-username>.github.io/<repo-name>/?to=Budi+Santoso
https://<your-username>.github.io/<repo-name>/?to=Intan+Permata
```

In Google Sheets/Excel, generate these from a name column with:

```
="https://<your-username>.github.io/<repo-name>/?to="&SUBSTITUTE(A2," ","+")
```

## 5. Edit the details

Open `index.html` and search for:
- `Ayu` / `Bagas` — couple names (appears twice: cover + closing caption area)
- `SATURDAY · 12 DECEMBER 2026` — the date line
- `<title>` tag — browser tab title

## RSVP

This template has no RSVP form (that content now lives in the video
itself, per your last round of feedback). If you want a lightweight way
to collect responses later, a Google Form link or a "Reply on WhatsApp"
button are both easy to add without needing any backend.
