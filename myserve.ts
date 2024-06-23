const port = 3000;

const handler = (request:Request): Response =>{
    const body = JSON.stringify({
        user: "chungnd1",
        pass: "password1"
    });
    return new Response(body,{status: 200,headers: {
        "content-type": "application/json"
        }});
};

Deno.serve({port},handler);
