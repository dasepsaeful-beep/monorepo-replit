import express, { Request, Response } from 'express';
import cors from "cors";
import { pinoHttp } from 'pino-http';
import router from "./routes/index.js";
import { logger } from "./lib/logger.js";

// PERBAIKAN 1: Menggunakan express.Express atau langsung hapus anotasi tipenya karena sudah otomatis terdeteksi
const app = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      // PERBAIKAN 2: Menambahkan tipe data eksplisit pada parameter serializer req dan res
      req(req: any) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res: any) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;

app.get('/', (req, res) => {
  res.status(200).json({ message: "API is running fine!" });
});

app.get('/favicon.ico', (req, res) => res.status(204).end());
app.get('/favicon.png', (req, res) => res.status(204).end());
