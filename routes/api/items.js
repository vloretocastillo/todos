const itemModel = require('../../models/Item.js')
const itemsRouter = require('express').Router();

const retrieveAllItems = (req, res) => {
    itemModel.find({})
    .then(files => {
        res.send(files)
    })
    .catch(err => console.log(err));
}


itemsRouter.get('/', (req,res) => retrieveAllItems(req,res)); 


module.exports = itemsRouter