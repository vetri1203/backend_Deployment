import express from 'express'
import { book } from '../App/Books.js';
import { addBooks } from '../App/AddBooks.js';


const Routes = express.Router();

Routes.get('/',book);
Routes.post('/add',addBooks);

export default Routes;