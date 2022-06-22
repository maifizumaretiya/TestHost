var express = require('express');
var router = express.Router();

// router.get("/",(req,res)=>{
//     res.sendFile("index.html",{root:__dirname});
// });
module.exports = router

router.get('/movies',async(req,res)=>{
    const iMovie = await Movie.find();
    res.send(iMovie);
})