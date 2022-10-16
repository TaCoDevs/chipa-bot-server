<div align="center">
    <br />
    <p>
        <a>
            <img src="" width="546" alt="chipa-bot" />
        </a>
    </p>
    <p>
        <img src="" alt=".typescript" />
        <img src="" alt=".express" />
    </p>
</div>

## About

Server for [Chipa-bot](https://github.com/TaCoDevs/chipa-bot)

## Instalation

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
import express from "express"

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
