import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/teste', (req, res) => {
    return res.json('Olá, dev');
});

router.post('/teste:id', (req, res) => {
    return res.status(StatusCodes.UNAUTHORIZED).json('Olá, dev');
});

export { router };
