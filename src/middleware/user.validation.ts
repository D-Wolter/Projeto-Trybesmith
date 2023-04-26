import { Request, Response, NextFunction } from 'express';

async function verifyUserName(req: Request, res: Response, next: NextFunction) {
  const { username } = req.body;
  if (!username) {
    return res.status(400)
      .send({ message: '"username" is required' });        
  }
    
  if (typeof username !== 'string') {
    return res.status(422)
      .send({ message: '"username" must be a string' });
  }
    
  if (username.length < 3) {
    return res.status(422)
      .send({ message: '"username" length must be at least 3 characters long' });
  }
    
  next();
}

async function verifyVocation(req: Request, res: Response, next: NextFunction) {
  const { vocation } = req.body;
  if (!vocation) {
    return res.status(400)
      .send({ message: '"vocation" is required' });        
  }
      
  if (typeof vocation !== 'string') {
    return res.status(422).send({ message: '"vocation" must be a string' });
  }
      
  if (vocation.length < 3) {
    return res.status(422)
      .send({ message: '"vocation" length must be at least 3 characters long' });
  }
      
  next();
}

async function verifyLevel(req: Request, res: Response, next: NextFunction) {
  const { level } = req.body;
  if (!level && level !== 0) {
    return res.status(400)
      .send({ message: '"level" is required' });        
  }
        
  if (typeof level !== 'number') {
    return res.status(422)
      .send({ message: '"level" must be a number' });
  }
        
  if (level < 1) {
    return res.status(422)
      .send({ message: '"level" must be greater than or equal to 1' });
  }

  next();
}

async function verifyPassword(req: Request, res: Response, next: NextFunction) {
  const { password } = req.body;
  if (!password) {
    return res.status(400)
      .send({ message: '"password" is required' });        
  }
          
  if (typeof password !== 'string') {
    return res.status(422)
      .send({ message: '"password" must be a string' });
  }
          
  if (password.length < 8) {
    return res.status(422)
      .send({ message: '"password" length must be at least 8 characters long' });
  }
          
  return next();
}
  
const userValidation = {
  verifyUserName,
  verifyVocation,
  verifyLevel,
  verifyPassword,  
};
  
export default userValidation;