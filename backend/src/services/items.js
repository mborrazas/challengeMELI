const axios = require('axios');
const constants = require('../constants');


const AUTHOR = {
    author: {
        name: constants.AUTHOR_NAME,
        lastname: constants.AUTHOR_LASTNAME
    }
};

exports.search = async(q) => {
    return await axios.get(constants.API_URL + `sites/MLA/search?q=${q}&limit=${constants.MAX_PRODUCTS}`)
    .then((res) => {
        const categories = [];
        res.data.filters.map(item => {
            if(item.id === 'category'){
                item.values.map(category => {
                    categories.push(category.name); 
                });
            } 
        });
    
        const items = res.data.results.map(item => {
            const [amount, decimals] =  item.price.toString().split(".");
            return {
                id: item.id,
                title: item.title,
                price: {
                    currency: item.currency_id,
                    amount: parseInt(amount),
                    decimals: parseInt(decimals)
                },
                picture: item.thumbnail,
                condition: item.condition,
                free_shipping: item.shipping.free_shipping
            }
        });
        
        return {
            ...AUTHOR,
            categories,
            items
        }
    })
    .catch(function(e) {
        return e;
    });
}


exports.getItem = async(id) => {
    return await axios.all([
        axios.get(constants.API_URL + `items/${id}`),
        axios.get(constants.API_URL + `items/${id}/description`),
    ])
    .then(axios.spread((item, description) => {
        const [amount, decimals] =  item.data.price.toString().split(".");
        return {
            ...AUTHOR,
            item: {
                id: item.data.id,
                title: item.data.title, 
                price: {
                    currency: item.data.currency_id, 
                    amount: parseInt(amount), 
                    decimals: parseInt(decimals),
                },
                picture: item.data.thumbnail, 
                condition: item.data.condition, 
                free_shipping: item.data.shipping.free_shipping, 
                sold_quantity: item.data.sold_quantity,
                description: description.data.plain_text
            } 
        }
    }))
    .catch((e) => {
        return e;
    })
}