import {Router, Request, Response, NextFunction} from 'express';

export class HelloWorldController {

  public get(req: Request, res: Response, next: NextFunction) {
    res.status(200).json({
      message: 'Hello World!',
    });
  }

  public create(req: Request, res: Response, next: NextFunction) {
    res.status(201).json(req.body.text);
  }

  public update(req: Request, res: Response, next: NextFunction) {
    res.status(201).json({
      id: req.params.id,
      body:req.body.text,
    });
  }

  public delete(req: Request, res: Response, next: NextFunction) {
    res.status(200).json({
      id: req.params.id,
      message: 'deleted',
    });
  }
}

export default new HelloWorldController();

