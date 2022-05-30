const e = require('express');
const axios = require('axios');
const {Router, query} = require('express');
const router = Router();

router.get('/test', async (req,res) => {
    try{
        var result = {
            author: {
                name: "Matias",
                lastname: "Borrazas" 
            },
            categories: [],
            items: [] 
        }
        const {data} = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=iphone`);
        data.filters.map((filter) => {
            if(filter.id == 'category'){
                result.categories.push(filter.values);
            }
        });
        data.results.map((item) => {
            result.items.push(item);
        });
        res.json(result);
    }catch(e){
        res.json({});
    }
});

router.get('/api/items', (req, res) => {
    if(!req.query.q){
        var result = {
            author: {
                name: "Matias",
                lastname: "Borrazas" 
            },
            categories: [],
            items: [] 
        }
        res.json(result);
    }else{
        var result = {
            author: {
                name: "Matias",
                lastname: "Borrazas" 
            },
            categories: [],
            items: [
            ] 
        }
        res.json(result);
    }
});

router.get('/api/items/:id', (req, res) => {
    console.log(req.params.id);

    var result = {
        author: {
            name: "Matias",
            lastname: "Borrazas" 
        },
        item: {
            id: "MLA931455240",
            title: "Apple iPhone 11 (128 Gb) - Blanco", 
            price: {
                currency: "ARS", 
                amount: 171399, 
                decimals: 0,
            },
            picture: "https://http2.mlstatic.com/D_796892-MLA46114829828_052021-O.jpg", 
            condition: "new", 
            free_shipping: true, 
            sold_quantity: 50,
            description: ""
        } 
    }
        
    res.json(result);
    
});

module.exports = router;