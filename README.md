# 🚀 Node.js + TypeScript Starter (ESM)

Template moderno per backend Node.js con TypeScript, moduli ESM, alias path e gestione environment.

---

## ⚙️ Stack

- Node.js (ESM)
- TypeScript
- tsx (dev runtime)
- tsc (build)
- tsc-alias (fix path alias in build)
- dotenv (env management)

---

## 📁 Struttura progetto

```text
src/
  app.ts
  index.ts
  config/
    env.ts
dist/
.env.development
.env.production
tsconfig.json
package.json
```

---

## 📦 Installazione

```bash
npm install
npm install -D typescript tsx @types/node tsc-alias
npm install dotenv
```

---

## ▶️ Sviluppo

```bash
npm run dev
```

Hot reload con tsx:

```json
"dev": "tsx watch src/index.ts"
```

---

## 🏗️ Build

```bash
npm run build
```

Pipeline:

1. TypeScript compilation (`tsc`)
2. Fix alias paths (`tsc-alias`)

---

## 🚀 Start produzione

```bash
npm start
```

---

## ⚙️ Script package.json

```json
{
  "scripts": {
    "dev": "tsx watch src/index.ts",
    "build": "tsc && tsc-alias",
    "start": "node dist/index.js"
  }
}
```

---

## 🧭 Path Alias (@/)

Questo progetto usa alias `@/` per semplificare gli import.

### 📌 Configurazione `tsconfig.json`

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

---

### ✍️ Uso negli import

```ts
import { env } from "@/config/env.js";
import { app } from "@/app.js";
```

> ⚠️ Nota: in ESM usare sempre `.js` negli import locali

---

## 🔥 .env Configuration

### 📁 File environment

- `.env.development`
- `.env.production`

---

### 📌 Esempio `.env.development`

```env
PORT=3000
APP_NAME=MyApp Dev
```

---

### 📌 Loader env (`src/config/env.ts`)

```ts
import dotenv from "dotenv";

const NODE_ENV = process.env.NODE_ENV || "development";

dotenv.config({
  path: `.env.${NODE_ENV}`,
});

export const env = {
  NODE_ENV,
  PORT: Number(process.env.PORT || 3000),
  APP_NAME: process.env.APP_NAME!,
};
```

---

### ▶️ Uso

```ts
import { env } from "@/config/env.js";

console.log(env.PORT);
console.log(env.APP_NAME);
```

---

## 🧠 Best Practices

- ✔ usa `@/` per import puliti
- ✔ usa `.env.development` / `.env.production`
- ✔ NON committare `.env`
- ✔ usa `tsc-alias` per evitare errori runtime
- ✔ usa `tsx` solo in sviluppo

---

## ⚠️ Note importanti

### ESM requirement

- usare sempre `import/export`
- aggiungere `.js` negli import locali

### Build flow corretto

```bash
tsc → genera dist/
tsc-alias → risolve @/
node dist/index.js
```

---

## 🧱 Tecnologie opzionali consigliate

- ESLint
- Prettier
- Zod (validazione env)
- Pino (logging)

---

## 📄 Licenza

MIT
