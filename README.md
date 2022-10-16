<div align="center">
    <br />
    <p>
        <a>
            <img src="https://i.imgur.com/0KvOXjK.png" width="120" alt="chipa-bot" />
        </a>
    </p>
    <p>
        <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=TypeScript&logoColor=white" alt=".typescript" />
        <img src="https://img.shields.io/badge/Express-4caf50?style=for-the-badge&logo=Express&logoColor=black" alt=".express" />
    </p>
</div>

## 📕 About

Server for [Chipa-bot](https://github.com/TaCoDevs/chipa-bot)

## ⚙️ Instalation

```sh-session
npm install
```
In .env file

```bash
PORT=<port>
IP=<your-ip>
```

```sh-session
npm run dev
```

## Routes example

Making a new Route

```js
import express from "express";

const router = express.Router();

router.use("/your-route", (req, res) => {
    // your code
});

export default router;
```

Adding to API

in routes/index.js

```js
import express from "express";

import your_module from "your-module-path";

function API(app: express.Express) {
    const router = express.Router();
    app.use("/api", router);

    router.use("/your-module", your_module);
}

export default API;
```
