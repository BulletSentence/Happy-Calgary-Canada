import express from 'express';
import './database/connection';

const app = express();
app.use(express.json());

app.post('/orph', (request, response) => {
    
    console.log(request.body);
    return response.json({message: "Oie"});
});

app.listen(3333);