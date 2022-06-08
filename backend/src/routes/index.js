const e = require('express');
const axios = require('axios');
const {Router, query} = require('express');
const items = require('../services/items');
const router = Router();

router.get('/', (req, res) => {
    try{
        items.search(req.query.q).then((result) => {
            res.json(result);
        })
    }catch(e){
        res.json({});
    }
});

router.get('/:id', (req, res) => {
    try{
        const id = req.params.id;
        items.getItem(id).then((result) => {
            res.json(result);
        });
    }catch(e){
        res.json({});
    }
});

module.exports = router;