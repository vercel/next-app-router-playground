# WIP Playground for layouts

Primarily for my learning and a sandpit for writing docs. But possibly as an external demo if polished.

## Aim

- Show the simplest and smallest example for each feature.
- Visually show debug info so it's easy to understand
  - Layout component hierarchy
  - Data returned by new hooks
  - Props passed to layouts and pages
  - Re-rendering on navigation
  - Page file path
  - Component type (Server / Client)
  - Resulting URL paths

# Errors I came across

Unclear what is broken or simply not implemented yet.

### Fast Refresh

HMR doesn't work yet

### Importing new hooks

Looks like the new hooks are not exported yet, except from the `"next/dist/client/components/hooks-server"` folder which causes a context error.

### Tailwind

`import "../styles/globals.css"` doesn't work. Possibly to do with PostCSS.

Temp workaround: Run Tailwind CLI in watch mode:

```bash
npx tailwindcss -i ./styles/globals.css -o ./public/output.css --watch
```

Then globally import the generated file:

```html
<head>
  <link rel="stylesheet" href="/output.css" />
</head>
```
