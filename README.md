<div align="center">
    <br />
    <p>
        <a>
            <img src="https://i.imgur.com/0KvOXjK.png" width="120" alt="chipa-bot" />
        </a>
    </p>
    <p>
        <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=TypeScript&logoColor=white" alt=".typescript" />
        <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt=".express" />
        <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt=".nodejs" />
    </p>
</div>

# 📕 About

Server for [Chipa-bot](https://github.com/TaCoDevs/chipa-bot)

# ⚙️ Instalation

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
## Service example

in services/your_service.service.ts

```js
class your_service {
    // your methods
}

export default your_service;
```

in routes/your-route

```js
import express from "express";
import your_service from "your-service-path"

const router = express.Router();

const service = new your_service()

router.use("/your-route", (req, res) => {
    try {
        const myData = service.method()
        res.status(200).json({ data: myData })
    } catch (error) {
        console.error(error)
        res.status(200).json({data: "method faild"})
    }
});

export default router;
```

## Error management with @hapi/boom

in routes/your-route

NO EXAMPLE YET

```js
import express from "express";
import your_service from "your-service-path"

const router = express.Router();

const service = new your_service()

router.use("/your-route", (req, res) => {
    try {
        const myData = service.method()
        res.status(200).json({ data: myData })
    } catch (error) {
        console.error(error)
        res.status(200).json({data: "method faild"})
    }
});

export default router;
```
