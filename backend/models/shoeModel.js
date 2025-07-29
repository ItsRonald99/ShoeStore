import mongoose from "mongoose";

const shoeSchema = mongoose.Schema (
    {
        title: {
            type: String,
            required: true,
        },
        brand: {
            type: String,
            required: true,
        },
        model: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true, 
    }

);
export const Shoe = mongoose.model('Cat', shoeSchema);