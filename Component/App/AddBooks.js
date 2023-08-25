import { BookSchema } from "../Schema/BookSchema.js";


export const addBooks = async(req,res) =>{
    try{
        const add = new BookSchema({
            name:req.body.name,
            price:req.body.price
        });
        res.send('books added');
        console.log(add);

    }
    catch(e){
        res.res("error while uploading");
        console.log(e);
    }
}