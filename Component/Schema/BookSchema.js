import mongoose from "mongoose";


const Book = new mongoose.Schema({
    name:{
        type:"String",
    },
    price:{
        type : Number
    }
});


export const BookSchema =new mongoose.model('BooksData',Book)