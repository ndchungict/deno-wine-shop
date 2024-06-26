import { Context, Status } from "https://deno.land/x/oak/mod.ts";
import Db from "../db/database.ts"

const testCollection = Db.collection("users")

console.log("vao den day")
export const testApiHandler = async (context: Context) => {
  const insertId = await testCollection.insertOne({
    username: "chungnd",
    password: "MyPassword01"
  });

  console.log(insertId)
  context.response.status = Status.OK;
  context.response.body = "Hello world";
};
