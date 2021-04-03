# Contact keeper MERN App

---

## File structure

```shell
├── README.md
├── client
├── config
├── middleware
├── modules
├── node_modules
├── package.json
├── routes
├── .env
└── server.js
```

### 🧐 What's inside?

- `README.md`: A text file containing useful reference information about your project.

- `client` Front-end (React application)

- `config`  contain the ´db.js´ that connect the MangoDB database

- `middleware` contain `auth.js`

- `modules` database schemas

- `/node_modules`: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

- `package-lock.json` (See package.json below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. (You won’t change this file directly).

- `package.json`: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

- `routes`  API endpoint

- `.env` For the environment variables

- `sever.js` handle the server

### Usage

- Run both application locally (server-side and clint-side)
  Navigate to the roo project and run `npm run dev`

- Run only the server-side from the root directory `npm run server`

- Run only the clint-side from the root directory `npm run client`
- Live link [https://guarded-woodland-78690.herokuapp.com/login](https://guarded-woodland-78690.herokuapp.com/login)
