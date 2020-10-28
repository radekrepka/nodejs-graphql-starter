import express, { NextFunction, Request, Response } from 'express';
import config from '../config';

export const createExpressApp = (port: number) => {
  const router = express.Router();

  return express()
    .set('port', port)
    .use((req: Request, res: Response, next: NextFunction) => {
      res.header('Access-Control-Allow-Origin', config.accessControlAllowOrigin);
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials',
      );
      res.header('Access-Control-Allow-Credentials', 'true');

      next();
    })
    .use('/', router)
    .get('/health-check', (req: Request, res: Response) => {
      res.send("I'm alive.");
    });
};
