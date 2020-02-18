const mongoose = require('../db/mongodb-connection')
const DB=require('../db/DB');

class Product extends DB{
    constructor(){
        super();
        this.schema=new mongoose.Schema({
            uid:{type:Number,unique:true},
            name:{type:String,required:true},
            description:{type:String,required:true},
            imageUrl:{type:String},
            price:{type:Number,required:true},
            quantity:{type:Number,required:true}
        }); 
        this._model=mongoose.model('products',this.schema);
    }

    async getProducts(query,projection="",options={}){
        return await this.query(query,projection,options);
    }
    
    async getProductById(name,projection="",options={}){
        return  await this.query({name:name},projection,options);
    }

    async exists(conditions){
        let doc= await this.exists(conditions);
        return doc;
    }
}

let product=new Product();
(async()=>console.log(await product.getProducts()))()
module.exports=product;
