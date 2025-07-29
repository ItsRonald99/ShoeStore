import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose, { mongo } from "mongoose";
import { Shoe } from "./models/shoeModel.js";
import shoesRoute from "./routes/shoesRoute.js";
import cors from 'cors';

const app = express();

// Middleware for parsing request body 
app.use(express.json());

//Middleware for handling CORS POLICY
//Option 1: allow all origins with Default of cors(*)
app.use(cors());
//Option 2: allow custom origins 
// app.use(
//     cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//     })
// );

app.get("/", (request, response) =>{
    console.log(request)
    return response.status(234).send("Ayo whats good")
});

app.use('/shoes', shoesRoute);

//Route to Save a new Shoe
app.post('/shoes', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.brand ||
            !request.body.model 
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, brand, model',
            });
        }
        const newShoe = {
            title: request.body.title, 
            brand: request.body.brand,
            model: request.body.model, 
        };
        const shoe = await Shoe.create(newShoe); 
        return response.status(201).send(shoe); 
    } catch (error) {
        console.log(error.message); 
        response.status(500).send({message: error.message}); 
    }
}); 

mongoose
    .connect(mongoDBURL)
    .then(() =>{
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });

    })
    .catch((error) => {
        console.log(error); 
    });