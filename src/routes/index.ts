import express from "express";

const router = express.Router();

router.get('/', (req: any,res: any) => {
    res.send("my base app");
})

export { router };