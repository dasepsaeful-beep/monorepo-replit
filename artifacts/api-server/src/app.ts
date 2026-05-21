// src/app.ts

import express from 'express';
import cors from "cors";
import { pinoHttp } from 'pino-http';
import router from "./routes/index.js";
import { logger } from "./lib/logger.js";

const app = express();

// 1. Setup Middleware (Pino, CORS, JSON)
app.use(pinoHttp({
  logger,
  serializers: {
    req(req: any) {
      return { id: req.id, method: req.method, url: req.url?.split("?")[0] };
    },
    res(res: any) {
      return { statusCode: res.statusCode };
    },
  },
}));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2. DAFTARKAN RUTE DI SINI (SEBELUM EXPORT)
// Rute utama
app.get('/', (req, res) => {
  res.status(200).json({ message: "API is running fine!" });
});

// Favicon
app.get('/favicon.ico', (req, res) => res.status(204).end());
app.get('/favicon.png', (req, res) => res.status(204).end());

// Rute API
app.use("/api", router);

// 3. BARU EKSPOR (PALING BAWAH)
export default app;
