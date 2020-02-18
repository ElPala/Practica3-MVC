const mongoose = require('./mongodb-connection')
class DB{
    async query(query,projection={},options={}){
        console.log(query,projection,options);
        return await this._model.find(query,projection,options);
    }
    async queryOne(query,projection={},options={}){
        return await this._model.findOne(query,projection,options);
    }
    async update(query,dataObject){
        return await this._model.findOneAndUpdate(query,{$set:dataObject},{new:true});
    }
    async exists(query){
        return await this._model.exists(query);
    }
    async add(document){
        return await this._model.add(document);
    }
}//esquema de prueba (esto podráser borrado o comentado después)
/*
class Test extends DB{
    constructor(){
        super();
        this.schema=new mongoose.Schema({name:{type:String,required:true}});
        this._model=mongoose.model('products',this.schema);
    }
    async getData(){
        return await this._model.find({});//COMPLETAR AQUÍ
    }
        //PRUEBA OTROSMÉTODOS PARA ACTUALIZAR, AÑADIR, EXISTE
}
let test=new Test();
(async()=>console.log(await test.getData()))()*/
module.exports=DB;