import {Request, Response, NextFunction} from 'express';


export function checkIfAuthenticated(req: Request, res: Response, next: NextFunction) {

    if (req['user']) {
        console.log("user:",req["user"])
        next();
    }
    else {
        console.log("error authenticated")
        res.sendStatus(403);
    }


}


