import dotenv from "dotenv";

// default = development se non specificato
const NODE_ENV = process.env.NODE_ENV || "development";

// carica file corretto
dotenv.config({
  path: NODE_ENV == "development" ? `.env.${NODE_ENV}` : ".env",
});

const required = (value: string | undefined, name: string) => {
  if (!value) throw new Error(`Missing env variable: ${name}`);
  return value;
};

export const env = {
  NODE_ENV,
  PORT: Number(process.env.PORT || 3000),
  APP_NAME: required(process.env.APP_NAME, "APP_NAME"),
};
