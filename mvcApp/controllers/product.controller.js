const product=require('../models/Product');

class ProductController{
    async read(req,res){
        //revisar si tiene quer y params
        let {query}=req.params//buscar por nombre o uid
        let {options}=req.params//página o limit
        let {projection} =req.params; //quéquiero ver de la información
        let docs=await product.getProducts(query,projection,options);
        let prods=JSON.parse(JSON.stringify(docs));
        console.log(prods);
        res.render('products',{values:prods })

    }
    async readById(req,res){
        //revisar si tiene quer y params
        let {id}=req.params//buscar por nombre o uid
        let {options}=req.params//página o limit
        let {projection} =req.params; //quéquiero ver de la información
        let docs=await product.getProductById(id,projection,options);
        let prods=JSON.parse(JSON.stringify(docs));
        console.log(prods);
        res.json(prods);
    }
}
const productController = new ProductController();
module.exports = productController;