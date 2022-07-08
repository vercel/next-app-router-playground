# WIP Playground for layouts

This is a playground DevEx is using to try out the new layouts and routing. You can find more information on [Notion](https://www.notion.so/vercel/Update-learn-and-docs-for-Layouts-and-Routing-dd39d46fc8054972b08e3711c4345f6e). 

## To run it locally:

-  Terminal 1: Run `yarn` and `yarn dev`
-  Terminal 2: Run Tailwind CLI in watch mode:

```bash
npx tailwindcss -i ./styles/globals.css -o ./public/output.css --watch
```


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

# Not implemented yet

- There is no fast refresh, you have to manually reload
- a11y features like route announcement and focus management
- `getStaticProps` will work like `getServerSideProps`
- No `getInitialProps`
- Redirects will not work exactly right
- No i18n routing


# Errors we've found:

Please note it's unclear what is broken or simply not implemented yet.


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
