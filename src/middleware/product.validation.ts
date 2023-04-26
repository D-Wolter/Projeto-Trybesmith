import { Request, Response, NextFunction } from 'express';

const productMid = {
  async verifyAmount(req: Request, res: Response, next: NextFunction) {
    const { amount } = req.body;
    if (!amount) {
      return res.status(400).send({
        message: '"amount" is required',
      });        
    }    
    if (typeof amount !== 'string') {
      return res.status(422).send({
        message: '"amount" must be a string',
      });
    }    
    if (amount.length < 2) {
      return res.status(422).send({
        message: '"amount" length must be at least 3 characters long',
      });
    }    
    return next();
  },
  async verifyName(req: Request, res: Response, next: NextFunction) {
    const { name } = req.body;
    if (!name) {
      return res.status(400).send({
        message: '"name" is required',
      });        
    }  
    if (typeof name !== 'string') {
      return res.status(422).send({
        message: '"name" must be a string',
      });
    }  
    if (name.length < 2) {
      return res.status(422).send({
        message: '"name" length must be at least 3 characters long',
      });
    }
  
    return next();
  },
};

export default productMid;