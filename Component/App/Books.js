import { BookSchema } from "../Schema/BookSchema.js";

export const book = async(req,res)=>{
        try{
            const bookData = BookSchema.find({});
            res.send(bookData);
        }
        catch(e){
            res.send("error",e)
        }
}
