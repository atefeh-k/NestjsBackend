import * as mongoose from 'mongoose';
import { string } from 'yargs';

export const ProductSchema = new mongoose.Schema({
    title:{ type:string,required:true},
    description:{ type:string,required:false},
    price:{ type:string,required:true},
    weight:{ type:string,required:true},
})

export interface Product extends mongoose.Document{
    
        title: string;
        description: string;
        price: number;
        weight: number;
}