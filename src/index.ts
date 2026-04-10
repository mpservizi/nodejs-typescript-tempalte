import { env } from "./env.js";
import { readFileJson } from "@/app.js";

const main = async () => {
  console.log("App run mode : " + env.NODE_ENV);
  const data = await readFileJson();
  console.log("App " + data.name + " is ready!");
};

main();
