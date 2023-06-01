import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bodyParser from 'body-parser';
import {routes} from '../app/routes/index';


const prisma = new PrismaClient();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/intentions', routes);


app.get('/intentions', async (req: Request, res: Response) => {
  try {
    const intentions = await prisma.intention.findMany({
      include: 
        { 
          address: true,
          Products: true
        },
    });
    res.json(intentions);
  } catch (error) {
    console.error('Erro ao buscar as intenções:', error);
      res.status(500).json({ error: 'Erro ao buscar as intenções.' });
  }
});


app.post('/intentions', async (req: Request, res: Response) => {
    try {

    const { name, products, address } = req.body;
    console.log(name)
    console.log(products)
    console.log(address)
    const intentions = await prisma.intention.create({
      data: {
        name,
        
        Products: {
          createMany: {
            data: products
          } 
        },
        address: {
          create: address
        },
      },
      include:
      {
        Products: true,
        address: true
      }
    });
    
    res.json(intentions);

  } catch (error) {
    console.error('Erro ao buscar as intenções:', error);
    res.status(500).json({ error: 'Erro ao buscar as intenções.' });
  }
})

const PORT = 3333;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
