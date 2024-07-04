import { Router } from 'express';
import RandomJokeController from '../Controller/RandomJokeController.js';
const router = Router();

const randomJokeController = new RandomJokeController();
// Jokes Route
router.get("/Jokes", (req,res) => randomJokeController.getJokes(req,res));
// Image Route
router.get("/randomImage",(req,res)=> randomJokeController.getRandomImages(req,res));

export  default router;