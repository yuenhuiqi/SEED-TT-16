import UserModel from '../models/user.js';
import { Connection } from 'mysql';

export async function updateUser(req, res, next) {
    console.log(req.user)
    // const test = await UserModel.update('email2','test2')
    Connection.Connection.query()
    res.send({test: test});
}