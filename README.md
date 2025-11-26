# Chatbot-Coding-Challenge

This repository is the Chatbot Website coding challenge scaffold built with React + TypeScript.

Quick start

1. Install dependencies

```powershell
npm install
```

2. Start dev server

```powershell
npm run dev
```

3. Navigate to http://localhost:5173/

- Uses React Router to navigate between the main Home (App) page and Documents page
- Chatbot modal made with React Portal since it is shown on all pages.
- Chatbot responds 2 seconds after the user and will only queue up one message at a time. If you send multiple messages over a 2 second span, it will only respond to the first message.
- Timestamp is shown above user messages once a minute. 
- Transition from desktop to mobile view is triggered via @media in CSS since they share all components.
- Used a Logo creation tool from placehold.co to generate a generic logo
- Buttons for refresh and close were made with icons for a more minimalist feeling.
- Mimicked iMessage color scheme for chatbot.
- Since there is rarely any shared behaviors other than displaying Lorem Ipsum, chat's functionality was moved into a hook to reduce component size
- Lorem Ipsum text is generated through an npm package Lorem Ipsum so text is randomized on reload.
- Search term is shared between the Navbar, App Page and Document Page through context

Deploying to Render

This project includes a `render.yaml` manifest that describes a Static Site for Render. The manifest will let Render auto-create a static site connected to this repository and deploy on push to `main`.

To deploy manually using the Render dashboard:

1. Go to https://dashboard.render.com and sign in.
2. Create a new "Static Site" and choose "Connect a repository" -> find `VernonQuan/Chatbot-Coding-Challenge`.
3. Use the build command: `npm ci && npm run build` and publish directory `dist` (the defaults in this repo match `render.yaml`).
4. Save and deploy — Render will run the build and serve the static `dist/` output.

If you prefer automated infrastructure provisioning, the `render.yaml` file at the repo root can be used by Render to configure the site automatically when creating a service from this repository.

Notes
- Render will use Node 18 for building (the manifest sets NODE_VERSION = 18). If you need a different Node or extra environment variables, update `render.yaml` or set them in the Render dashboard.
- The CI workflow in `.github/workflows/ci.yml` currently runs lint + build on push and pull requests; Render will perform a build for production when the site is deployed.