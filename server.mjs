import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

// Middleware do parsowania JSON
app.use(express.json());

app.post('/sendemail', (req,res) => {
    console.log(req.body);  // req.body zawiera dane JSON
});

//Serwer nasłuchuje na porcie
app.listen(4000, ()=>{
    console.log('ok');
});

