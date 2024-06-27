import * as scrypt from "https://deno.land/x/scrypt@v4.4.4/mod.ts";

export const cryptPassword = (text: string) => {
  return scrypt.hash(text);
};

export const verifyPassword = (password: string, hashPassword: string) => {
  return scrypt.verify(password, hashPassword);
};
