const e = require('express');
const axios = require('axios');
const {Router, query} = require('express');
const items = require('../services/items');
const router = Router();
const NodeCache = require('node-cache')
const myCache = new NodeCache();

router.get('/', (req, res) => {
    try{
        const q = req.query.q;
        if(myCache.has(q)){
            res.json(myCache.get(q));
        }else{
            items.search(q).then((result) => {
                myCache.set(q, result, 900);
                res.json(result);
            });
        }
        
    }catch(e){
        res.json({});
    }
});

router.get('/:id', (req, res) => {
    try{
        const id = req.params.id;
        if(myCache.has(id)){
            res.json(myCache.get(id));
        }else{
            items.getItem(id).then((result) => {
                myCache.set(id, result, 900);
                res.json(result);
            });
        }
    }catch(e){
        res.json({});
    }
});

module.exports = router;