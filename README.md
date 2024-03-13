# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Webapp for Karate Klub Selters

This app will serve both as a presenation of the club and the dashboard for all memberts and users that will be using this app

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

.. code::
.
|-- ContentStore
| |-- de-DE
| | |-- art.mshc
| | |-- artnoloc.mshc
| | |-- clientserver.mshc
| | |-- noarm.mshc
| | |-- resources.mshc
| | `-- windowsclient.mshc
|   `-- en-US
| |-- art.mshc
| |-- artnoloc.mshc
| |-- clientserver.mshc
| |-- noarm.mshc
| |-- resources.mshc
| `-- windowsclient.mshc
`-- IndexStore
|-- de-DE
| |-- art.mshi
| |-- artnoloc.mshi
| |-- clientserver.mshi
| |-- noarm.mshi
| |-- resources.mshi
| `-- windowsclient.mshi
    `-- en-US
|-- art.mshi
|-- artnoloc.mshi
|-- clientserver.mshi
|-- noarm.mshi
|-- resources.mshi
`-- windowsclient.mshi
