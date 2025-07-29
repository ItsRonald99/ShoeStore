import express from "express";
import { Shoe } from "../models/shoeModel.js";

const router = express.Router();

// Route for Save a new Shoe
router.post('/', async (request, response) => {
    try {   
        if (
            !request.body.title ||
            !request.body.brand ||
            !request.body.model
        ) {
            return response.status(400).send ({
                message: 'Send all required fields: title, brand, model'
            });
        }
        const newShoe = {
            title: request.body.title,
            brand: request.body.brand,
            model: request.body.model,
        };
        
        const shoe = await Shoe.create(newShoe);

        return response.status(201).send(shoe); 
    } catch(error) {
        console.log(error.message); 
        response.status(500).send({message: error.message });
    }
});

// Route for Get All Shoes from database
router.get('/', async (request, response) => {
    try{  
        const shoes = await Shoe.find({});
        return response.status(200).json({
            count: shoes.length,
            data: shoes //might be an issue here
        }); 
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message });
    }

});

// Route for Get One shoe from database by id
router.get('/:id', async (request, response) => {
    try{  

        const { id } = request.params; 

        const shoe = await Shoe.findById(id);
        return response.status(200).json(shoe); 
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message });
    }

});

// Route for updating a shoe

router.put('/:id', async (request, response) => {
    try{
        if (
            !request.body.title ||
            !request.body.brand ||
            !request.body.model 
        ) { 
            return response.status(400).send({
                message: 'Send all required fields: title, brand, model',
            });
        }
    const { id } = request.params; 
    const result = await Shoe.findByIdAndUpdate(id, request.body); 
    
    if (!result) {
        return response.status(404).json ({message: 'Shoe not found'}); 
    }
    return response.status(200).send({message: 'Shoe has been updated successfully'})
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message });
    }

});

// Route for deleting a shoe
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params; 
        const result = await Shoe.findByIdAndDelete(id); 

        if (!result) {
            return response.status(404).json({message: 'Book not found'});

        }
        return response.status(200).send({message: 'Book deleted successfully'});
        

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message });
    }
});

export default router; 