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


## v0.2 additions

- Location library with six named surf locations.
- Clean Bar Beach shore photograph included as a selectable background.
- Selecting a clean background removes pre-drawn course objects so coaches can build the Competition Arena/Area themselves.
- Draggable/tappable swimmer, board, ski, white can, orange can and start/finish pole objects.
- Event-template button restores the schematic course.

## v0.3 mobile editing improvements
- Competition Arena/Area now scales to the phone width instead of forcing a wide desktop canvas.
- Small objects keep their visual size but have larger invisible touch targets.
- Dragging a selected object locks page scrolling until the drag finishes.
- Selected objects can also be moved with on-screen nudge buttons or deleted without dragging.
- Mobile navigation and controls are more compact so more of the Competition Arena/Area remains visible.


## v0.4 mobile tactics editing

- Inserted poles are blue for stronger contrast on sand.
- Rips and the default sweep overlay can be dragged directly on the Competition Arena/Area.
- Coaches can sketch race paths with a finger/mouse in any selected path colour.
- Coaches can sketch additional sweep/current arrows.
- Preview Animation animates coach-drawn paths with a moving marker.
- Clear Drawings removes coach-drawn race and sweep paths.


## v0.5 live camera
- Bar Beach now includes a Surfline live-camera card in Tactics and Race Conditions.
- The camera is only shown when **Bar Beach — Shore View** is the selected location.
- On mobile the compact Tactics camera card starts collapsed so the Competition Arena/Area remains the priority.
- The iframe uses the supplied Surfline embed URL. If Surfline changes its embed permissions, the frame may need to be updated.
