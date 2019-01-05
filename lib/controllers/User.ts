import * as jwt from 'jsonwebtoken'
import { UserModel as User } from '../models/User'
import { Request, Response, NextFunction } from 'express'


export class UserController {

    public _util = new UserUtil();

    public async signUp(req: Request, res: Response, next: NextFunction) {
        const {email, password} = req.body;

        //check for duplicate user with same email
        const foundUser = await User.findOne({'local.email' : email});
        if(foundUser)
            return res.status(403).json({error: 'Email already in use'})

        //create new user
        const newUser = new User({
            method: 'local',
            local: {
                email: email,
                password: password
            },
            person: {
                fullName: req.body.fullName,
                phone: req.body.phone
            }
        });

        //save user
        await newUser.save();

        //generate token
        const token = this._util.signToken(newUser);

        //respond with token
        res.status(200).json({token, expiresIn: '86400' });
    }


    public async signIn(req: Request, res: Response, next: NextFunction){
        const token = this._util.signToken(req.body.user);

        res.status(200).json({token, expiresIn: '86400'})
    }
}

class UserUtil {
    public signToken (user:any) : string {
        return jwt.sign({
            iss: 'me',
            sub: user.id,
            iat: new Date().getTime(),
            exp: new Date().setDate(new Date().getDate() + 1)
        }, 'secret')
    }
}