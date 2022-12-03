import SampleModel from '../models/sample.js';

export async function sample(req, res) {
    console.log(req.user)
    const test = await SampleModel.sample('email2','test2')
    res.send({test: test});
}