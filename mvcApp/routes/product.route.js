const router = require('express').Router();
router.get('/', async (req,res)=>{
    res.send("products");
});

router.get('/:id/', async (req, res) => {
    res.send("product id");
   });
   
module.exports = router;