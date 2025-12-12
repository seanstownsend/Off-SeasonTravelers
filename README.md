# Off-Season Travelers — Local dev

This repository is prepared to run as a Vite React app. The project was converted from a legacy CDN-style preview to a modern Vite setup.

Prerequisites
- Node.js (16+ recommended) and npm installed.

Windows PowerShell notes
- On Windows, PowerShell's script execution policy can block npm from running (error: `npm.ps1 cannot be loaded because running scripts is disabled`). If you see that error, open PowerShell as Administrator and run:

```powershell
Set-ExecutionPolicy RemoteSigned -Scope LocalMachine
```

Alternatively, run the `npm` commands from Command Prompt or Git Bash to avoid the PowerShell execution policy.

Run locally (project root)

```powershell
npm install
npm run dev
```

The Vite dev server will usually open at http://localhost:5173.

What I changed
- Backed up the legacy `index.html` to `index.html.bak` so Vite's `index.html` is the entry.
- Converted imports to use relative ESM paths across `Pages/` and `Components/`.

Next steps
- Run the two commands above locally. If you encounter runtime errors in the browser console or terminal, paste them here and I will fix them.

If you prefer I keep the legacy files as a fallback, let me know and I can move them into a `legacy/` folder instead.

---
Generated and maintained by project conversion tooling.
