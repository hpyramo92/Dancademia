import express from 'express';

const routes = express.Router();

routes.get('/', (request, response) => {
    response.json({ Teste: "Oi" });
});

export default routes;
