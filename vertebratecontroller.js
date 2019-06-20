const express = require('express');
var router = express.Router();
const mongoose=require('mongoose');
const Vertebrate=mongoose.model('Vertebrate');
const bodyparser = require('body-parser');
router.use(bodyparser.urlencoded({
    extended : true
}));
router.use(bodyparser.json());

router.get('/',(req,res)=> {
    res.render("vertebrate/landing")
});

router.post('/',(req,res)=> {
    res.redirect('vertebrate/home');
});

router.get('/home',(req,res)=> {
    res.render("vertebrate/home")
});

router.post('/wild',(req,res)=> {
    res.redirect('../vertebrate');
});

router.get('/wild',(req,res)=> {
    res.render("vertebrate/landing")
});

router.post('/home1',(req,res)=> {
    res.redirect('../vertebrate/home');
});

router.get('/home1',(req,res)=> {
    res.render("vertebrate/home");
});
router.post('/link',(req,res)=> {
    res.redirect('../vertebrate');
});
router.get('/link',(req,res)=> {
    res.render("vertebrate/landing");
});
router.post('/amphibians',(req,res)=> {
    res.redirect('../vertebrate/home/amphibians');
});
router.get('/home/amphibians',(req,res)=> {
    res.render("vertebrate/amphibians");
});

router.post('/fish',(req,res)=> {
    res.redirect('../vertebrate/home/fish');
});
router.get('/home/fish',(req,res)=> {
    res.render("vertebrate/fish");
});

router.post('/premammals',(req,res)=> {
    res.redirect('../vertebrate/home/premammals');
});
router.get('/home/premammals',(req,res)=> {
    res.render("vertebrate/premammals");
});

router.post('/mammals',(req,res)=> {
    res.redirect('../vertebrate/home/mammals');
});
router.get('/home/mammals',(req,res)=> {
    res.render("vertebrate/mammals");
});

router.post('/reptile',(req,res)=> {
    res.redirect('../vertebrate/home/reptile');
});
router.get('/home/reptile',(req,res)=> {
    res.render("vertebrate/reptile");
});

router.post('/bird',(req,res)=> {
    res.redirect('../vertebrate/home/bird');
});
router.get('/home/bird',(req,res)=> {
    res.render("vertebrate/bird");
});

router.post('/am',(req,res)=> {
    res.redirect('../../vertebrate/home/amphibians/am');
});

function retrieve(req,res) {
    //var vertebrate=new Vertebrate();
    //x=req.body.name;
    //y=req.body.time;
    console.log(req.body.name);
    console.log(req.body.name);/*
    if(x=="frog")
    {
        if(y=="1500-1600")
        {
            res.redirect('../../vertebrate/am');
        }
    }*/
}
router.get('/home/amphibians/am',(req,res)=> {
    res.json("hi");
    console.log(req.body.time);
});
router.get('/list',(req,res)=> {
    //res.json("from list");
    Vertebrate.find((err,docs)=> {
        if(!err) {
            res.render("vertebrate/list", {
                list: docs
            });
        }
        else {
            console.log("Error " + err);
        }
    });
});
module.exports = router;