import { Application, Status, Router} from "https://deno.land/x/oak/mod.ts";

const app = new Application();

const router = new Router();

router
    .get('/api/test', (context) => {
        context.response.status = Status.OK;
        context.response.body = "Hello world";
    })

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });