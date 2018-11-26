const express = require('express');
const router = express.Router();
const Hosts = require('../models/hosts.js');
const bcrypt = require('bcrypt');

/************* Host Create Route***********************/
router.post('/', (req, res)=>{
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    Hosts.create(req.body, (err, createdHost)=>{
        res.status(201).json({
            status:201,
            message:'Host created'
        })
    });
});

/************* Index Route***********************/
router.get('/', (req, res)=>{
    Hosts.find({}, (err, foundHosts)=>{
        res.json(foundHosts);
    });
});

/************* Create Route***********************/
router.post('/', (req, res)=>{
  Hosts.create(req.body, (err, createdHost)=>{
    res.json(createdHost);
  })
})

router.post('/seed', (req, res)=>{
  Hosts.create(guestsSeeds, (err, data)=>{
    if (err) console.log(err.message)
     console.log('added guests');
  })
})

/************* Seed Route ********************/
router.post('/seed', (req, res)=>{
  Hosts.create(guestsSeeds, (err, createdHost)=>{
    res.json(createdHost);
    res.redirect('/');
  })
})

/************* Delete Route ********************/
router.delete('/:id', (req, res)=>{
    Hosts.findByIdAndRemove(req.params.id, (err, deletedHost)=>{
        res.json(deletedHost);
    });
});

/************* Edit Route ********************/
router.put('/:id', (req, res)=>{
    Hosts.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedHost)=>{
        res.json(updatedHost);
    });
});

module.exports = router;
