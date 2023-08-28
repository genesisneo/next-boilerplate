# NextJs + Typescript + Redux Toolkit Boilerplate

A simple and minimum boilerplate as possible for [NextJs](https://nextjs.org/) with [TypeScript](https://www.typescriptlang.org/) and [Redux Toolkit](https://redux-toolkit.js.org/). This boilerplate is using [SASS](https://sass-lang.com/) as a CSS interpreter, [ESLint](https://eslint.org/), [Stylelint](https://stylelint.io/), [Prettier](https://prettier.io/), and [Husky](https://typicode.github.io/husky/). You are free to choose your preferred CSS frameworks or utility since this boilerplate doesn't have any.

**Table of Contents:**

- [Description](#description)
- [Requirement](#requirement)
- [Development](#development)
- [Question](#question)

---

## Description

This boilerplate is based on `create-next-app@latest --typescript` and follow the [NextJs Redux](https://github.com/vercel/next.js/tree/canary/examples/with-redux) sample. By default, the boilerplate is designed for [NextJs Server-Side Rendering (SSR)](https://nextjs.org/docs/app/building-your-application/data-fetching), but can easily changed to [NextJs Client-Side (CSR)](https://nextjs.org/docs/getting-started/react-essentials#the-use-client-directive). For linting, instead of using `next lint`, this boilerplate use [ESLint](https://eslint.org/), [Stylelint](https://stylelint.io/), and [Prettier](https://prettier.io/). Feel free to update the linting rules to your liking. [Husky](https://typicode.github.io/husky/) is added to do linting before committing developers changes. The boilerplate also includes a [Visual Studio Code](https://code.visualstudio.com/) settings and can be found in `.vscode/settings.json`.

---

## Requirement

NodeJs ^18.17.0<br />
https://nodejs.org/en/download/releases/

Visual Studio Code<br />
https://code.visualstudio.com/

### Required Extensions

ESLint<br />
https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

Stylelint<br />
https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint

Prettier<br />
https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

### Optional Extensions

Bracket Pair Colorizer<br />
https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer

Indent Rainbow<br />
https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow

---

## Development

- Download, Fork, or Clone this repo
- Download and install [node.js ^18.17.0](https://nodejs.org/en/download/releases/). If you need multiple version you can use [nvm](https://github.com/nvm-sh/nvm) for Linux or [nvm-windows](https://github.com/coreybutler/nvm-windows) for Windows
- Open your preferred **_shell_**.<br />
  If your using **_PowerShell_** on Windows as Administrator, you need to execute this command

```bash
# windows powershell
$ Set-ExecutionPolicy RemoteSigned
```

- Navigate to this repo and run `npm run init:all`

```bash
# install dependencies, prepare prettier and husky
npm run init:all
```

- Once dependencies are installed, you can run the following:

```bash
# run development
npm run dev

# run build
npm run build

# run build server
npm run start

# run format check
npm run check:format

# run lint check
npm run check:lint

# run types check
npm run check:types

# run check format, lint, types, and build
npm run check:all
```

- You can check [http://localhost:3000/](http://localhost:3000/) on your browser.
- The boilerplate is designed for [NextJs Server-Side Rendering](https://nextjs.org/docs/app/building-your-application/data-fetching), but can easily changed to [NextJs Client Side](https://nextjs.org/docs/getting-started/react-essentials#the-use-client-directive.

---

## Question:

If you have question, you can always contact me on Twitter [@genesis_neo](https://twitter.com/genesis_neo) and of course here in GitHub [@genesisneo](https://github.com/genesisneo). Thank you.

---

<p align="center">-=[ :heart: ]=-</p>
