import {MongoClient} from "https://deno.land/x/mongo@v0.33.0/mod.ts";

//user: denoshop ---> ZGVub3Nob3A=
//pass: chungndpass --->Y2h1bmduZHBhc3M=

const dbUrl:string = "mongodb+srv://denoshop:chungndpass@deno-wine-cluster.avq2umc.mongodb.net/?authMechanism=SCRAM-SHA-1&retryWrites=true&w=majority&appName=deno-wine-cluster";

const client: MongoClient = new MongoClient();

await client.connect(dbUrl);

console.log("Connected successfully to server")

const db = client.database("deno-wine-db")

export default db;