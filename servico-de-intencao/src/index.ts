import express, { Request, Response } from 'express';
import getCustomRepository from 'typeorm';
import createConnection from 'mysql2';
import Connection from 'mysql2';

import { Intention } from '../src/entity/intention';
import { IntentionRepository } from '../src/repository/IntentionRepository';

const app = express();
const port = 4000;

const mysql = require('mysql2');

const conn = mysql.createConnection({
  host: "localhost",
  port : 3000,
  username: "root",
  password: "Root123",
  database: "intencoes",
});

app.use(express.json());

app.post('/intencoes', async (req: Request, res: Response) => {
  try {
    const { name, products, address } = req.body;

    const intention = new Intention();
    intention.name = name;
    intention.products = products;
    intention.address = address;
    

    const connection = await conn(); 

    const intentionRepository = connection.getCustomRepository(IntentionRepository);
    const createdIntention = await intentionRepository.createIntention(intention);

    res.status(201).json(createdIntention);
  } catch (error) {
    console.error('Erro ao criar intenção:', error);
    res.status(500).json({ error: 'Erro ao criar intenção' });
  }
});

app.get('/intencoes', async (_req: Request, res: Response) => {
  try {
    const connection = await conn(); 

    const intentionRepository = connection.getCustomRepository(IntentionRepository);
    const intentions = await intentionRepository.getAllIntentions();

    res.json(intentions);
  } catch (error) {
    console.error('Erro ao listar intenções:', error);
    res.status(500).json({ error: 'Erro ao listar intenções' });
  }
});


conn().then(() => {
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
});
