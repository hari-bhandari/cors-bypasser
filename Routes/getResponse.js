const express =require('express')
const router=express.Router();
const axios=require('axios')
router.post('/',async(req,res)=>{
    delete req.headers.host
    const config = {
        headers: req.headers
    };
    const formData = req.body;
    let response;
    try {
        response = await axios.post(req.query.url, formData, config);
    } catch (err) {
        res.status(500).json({error:'Something went wrong'})
    }
    res.status(200).send(response.data)
})

module.exports=router;