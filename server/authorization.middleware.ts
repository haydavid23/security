import {Request, Response, NextFunction} from 'express';


export function checkIfAuthorized(allowedRoles:string[],req: Request, res: Response, next: NextFunction) {

    if (req['user']) {
        next();
    }
    else {
        res.sendStatus(403);
    }


}


