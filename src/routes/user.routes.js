import { Router } from 'express';

const router = Router();

router.get('/:user_id', (req, res) => {
  res.send('solo uno');
});

router.get('/', (req, res) => {
  res.send('todos');
});

router.post('/', (req, res) => {
  res.send('registro');
});

router.put('/:user_id', (req, res) => {
  res.send('actualizacion');
});

export default router;
