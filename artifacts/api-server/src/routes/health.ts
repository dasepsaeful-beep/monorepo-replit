import { Router, Request, Response } from 'express';

const router = Router();

// Pastikan req dan res diberikan tipe data : Request dan : Response
router.get('/', (req: Request, res: Response) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

export default router;
