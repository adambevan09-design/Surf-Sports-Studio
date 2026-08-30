# Surf Sports Studio Prototype

A static, GitHub Pages-ready prototype for presenting the Surf Sports Studio concept to coaches and gathering feedback.

## What is included

- **Tactics** screen with a surf course background, nine-can string, coloured race paths, rip overlays, sweep and wave-zone layers.
- **Race Conditions** screen with placeholder swell, wind, tide and temperature information.
- **Training** screen with a weekly schedule and session breakdown.
- **Athletes** screen with reusable squad cards.
- **Analysis** screen comparing a planned line with an actual race line.
- **Coach Feedback** modal for use during demonstrations.
- Responsive layout that works on desktop, tablet and mobile.

## Important prototype note

All weather, swell and tide values are **demo values only**. No live BoM or surf data is connected yet.

## Run locally

Open `index.html` in a browser. No build tools or package installation are required.

## Publish with GitHub Pages

1. Create a new GitHub repository, for example `surf-sports-app-prototype`.
2. Upload `index.html`, `styles.css`, `app.js` and this `README.md` to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose the `main` branch and `/ (root)` folder.
6. Save. GitHub will provide a public Pages URL after deployment.

## Suggested coach feedback questions

- Which feature would you use most: tactics, conditions, training, analysis or animations?
- Which Surf Sports events should be prioritised?
- Is the nine-can/course representation clear enough?
- Would you use the app on a phone, tablet or laptop at carnivals?
- What race-condition information matters most before a race?
- Would you want live BoM data, manual coach observations, or both?
- Which drawing tools are essential: rips, arrows, shading, wave zones, text or measurement?
- Would athletes benefit from animated drill instructions?

## Next prototype steps

- Add more accurate event presets from the Surf Sports Manual.
- Replace schematic craft markers with custom board, mal and ski vector icons.
- Add real drag-and-drop course editing.
- Add a simple animation timeline.
- Add local saving / exporting.
- Investigate BoM and tide data integration and required attribution.


## Prototype interaction added

The tactics screen now includes draggable **Swimmer**, **Board** and **Ski** objects. Drag them from the toolbar onto the course, or tap a tool to add it on touch devices. Once placed, objects can be dragged again to reposition them. The Surf Sports Studio triple-S logo is included as an SVG asset in `assets/`.
