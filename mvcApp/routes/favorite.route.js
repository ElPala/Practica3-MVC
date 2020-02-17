const router = require('express').Router();
router.get('/', async (req,res)=>{
    res.send("favorites");
});

router.post('/:id/', async (req, res) => {
    res.send("favorite id");
   });
   
module.exports = router;