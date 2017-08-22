import * as path from 'path';
import {Router, Request, Response, NextFunction} from 'express';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import HelloWorldController from "./routes/HelloWorldController";

class App {

    // ref to Express instance
    public express: express.Application;

    //Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));

        // catch 404 and forward to error handler


        this.express.use((err:any, req: Request, res: Response, next: NextFunction) => {
            // error handlers

            // development error handler
            // will print stacktrace
            if (this.express.get('env') === 'development') {
                console.log(req.baseUrl);
                res.status(err.status || 500);
                return res.json({
                    type: 'Error',
                    message: err.message,
                    error: err
                });
            }

            // production error handler
            res.status(err.status || 500);
            res.json({
                type: 'Error',
                message: err.message,
                error: {}
            });
        });

    }

    // Configure API endpoints.
    private routes(): void {

        let router = express.Router();

        router.get('/', HelloWorldController.get);
        router.post('/', HelloWorldController.create);
        router.put('/:id', HelloWorldController.update);
        router.delete('/:id', HelloWorldController.delete);

        this.express.use((req, res, next) => {
            console.log(req.baseUrl);
            let err: any = new Error('Not Found');
            err.status = 404;
            next(err);
        });
    }

}

export default new App().express;
