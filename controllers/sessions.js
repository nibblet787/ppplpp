const express = require('express');
const router = express.Router();
const Hosts = require('../models/hosts.js');
const Guests = require('../models/guests.js');
const bcrypt = require('bcrypt');

// router.get('/new', (req, res)=>{
//     res.render('sessions/new.ejs');
// })

router.delete('/', (req, res)=>{
    req.session.destroy(() => {
        res.status(200).json({
            status:200,
            message:'logout complete'
        })
    })
});

router.post('/', (req, res)=>{
    Hosts.findOne({hostname:req.body.hostname}, (err, foundHost)=>{
        if(bcrypt.compareSync(req.body.password, foundHost.password)){
            req.session.currentHost = foundHost;
            res.status(201).json({
                status:201,
                message:'session created'
            })
        } else {
            res.status(401).json({
                status:401,
                message:'login failed'
            })
        }
    })
})

module.exports = router;
