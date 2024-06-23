import { Application, Router} from "https://deno.land/x/oak/mod.ts";
import {testApiHandler} from "./controller/userController.ts";



const app = new Application();

const router = new Router();

router
    .get('/api/test', testApiHandler)


app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });