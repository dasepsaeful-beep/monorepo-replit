import { Router, type IRouter, static as expressStatic } from "express";
import path from "path";
import { fileURLToPath } from "url";
import healthRouter from "./health.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router: IRouter = Router();

// 1. Tetap aktifkan API health check
router.use(healthRouter);

// 2. Arahkan Express untuk membaca folder hasil kompilasi (dist) milik Frontend
// Jalur keluar dari api-server/src/routes ke artifacts/hogy-indonesia/dist
const distPath = path.resolve(__dirname, "../../../hogy-indonesia/dist");
router.use(expressStatic(distPath));

// 3. Tangkap semua rute halaman website dan kirim file index.html milik Frontend
router.get("*", (req, res, next) => {
  // Jika URL diawali dengan /api, biarkan rute API lain yang memproses
  if (req.path.startsWith('/api')) {
    return next();
  }
  
  // Kirim file index.html ke browser pengguna
  res.sendFile(path.join(distPath, "index.html"), (err) => {
    if (err) {
      // Fallback jika folder 'dist' belum terbentuk (belum di-build)
      res.status(200).json({ 
        message: "Backend aktif!",
        status: "Folder Frontend 'dist' tidak ditemukan.",
        solusi: "Pastikan proses 'pnpm build' di root berhasil mengompilasi folder 'artifacts/hogy-indonesia' ke folder 'dist'."
      });
    }
  });
});

export default router;
