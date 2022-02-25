import {Request, Response, NextFunction} from 'express';
import { db } from './database';
import { createSessionToken } from './security.utils';


export function loginAsUser(req: Request, res: Response) {

     const impersonatedUserEmail = req.body["email"];
     const impersonatedUser = db.findUserByEmail(impersonatedUserEmail);

     createSessionToken(impersonatedUser).then((sessionToken)=>{
            res.cookie("SESSION", sessionToken,{httpOnly:true, secure:true});
            res.status(200).json({
                id:impersonatedUser.id,
                email:impersonatedUser.email,
                roles:impersonatedUser.roles
            })
     }).catch(()=>{
         console.log("Error trying to log in as user")
         res.sendStatus(500)
     })


}
