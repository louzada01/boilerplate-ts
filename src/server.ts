import express, { Request, Response } from 'express';

const app = express();

app.listen(process.env.PORT || 3333, () => console.log('App Run'))

app.get('/', (req: Request, res: Response) => res.json({status: 'Hello'}));
