# Publish to leeman.com.np

GitHub Pages currently serves the repository root on `main`. `CNAME` points to
`leeman.com.np` and is kept when the generated site is copied into that root.

Run `npm ci` and then `npm run publish:pages` to build and copy the prerendered
HTML, route folders, and assets into the Pages document root. Commit and push
those changes to `main`; GitHub Pages will publish them using the repository's
existing configuration. The app source remains alongside the published files.
