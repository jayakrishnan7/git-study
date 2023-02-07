import express from 'express';
const app = express();

const port = 3333;

app.get('/', (req: any,res: any) => {
    res.send("my base app");
})

app.listen(port, () => {
    console.log(`Server started in ${port}`);
})   