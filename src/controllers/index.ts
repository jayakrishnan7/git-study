import { Request, Response } from 'express';

const homeRoute = async (req: Request, res: Response) => {
    try {
        res.send("my base app");
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export { homeRoute };