// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// =======================================
//              DATABASE
// =======================================
const Guests = require('../models/guests.js');
const User = require('../models/users.js');
// const guestsSeeds = require ('../models/seed.js');

// =======================================
//              ROUTES
// =======================================

/************* Guest Create Route***********************/
router.post('/', (req, res)=>{
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    Guests.create(req.body, (err, createdGuest)=>{
        res.status(201).json({
            status:201,
            message:'guest created'
        })
    });
});

/************* Index Route***********************/
router.get('/', (req, res)=>{
    Guests.find({}, (err, foundGuests)=>{
        res.json(foundGuests);
    });
});

/************* Create Route***********************/
router.post('/', (req, res)=>{
  Guests.create(req.body, (err, createdGuest)=>{
    res.json(createdGuest);
  })
})

router.post('/seed', (req, res)=>{
  Guests.create(guestsSeeds, (err, data)=>{
    if (err) console.log(err.message)
     console.log('added guests');
  })
})

/************* Seed Route ********************/
router.post('/seed', (req, res)=>{
  Guests.create(guestsSeeds, (err, createdGuest)=>{
    res.json(createdGuest);
    res.redirect('/');
  })
})

/************* Delete Route ********************/
router.delete('/:id', (req, res)=>{
    Guests.findByIdAndRemove(req.params.id, (err, deletedGuest)=>{
        res.json(deletedGuest);
    });
});

/************* Edit Route ********************/
router.put('/:id', (req, res)=>{
    Guests.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedGuest)=>{
        res.json(updatedGuest);
    });
});

module.exports = router;
