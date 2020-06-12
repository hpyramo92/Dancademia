import express from 'express';

const app = express();

app.get('/', (request, response) => {
    console.log("oi");





    
    response.json({message: "Olá mundo!"})
})

app.listen('3333');