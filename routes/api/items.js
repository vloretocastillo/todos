const itemModel = require('../../models/Item.js')
const itemsRouter = require('express').Router();

const retrieveAllItems = (req, res) => {
    itemModel.find({})
    .then(files => {
        res.send(files)
    })
    .catch(err => console.log(err));
}


const createOneItem = (req,res) => {
    const newItem = new itemModel({
        name: req.body.name,
    })
    newItem.save()
        .then(item => { res.send(item) })
        .catch(err => { res.status(500).send("Server error: " + err)}) 
}


const retrieveOneItem = (req, res) => {
    itemModel.findById(req.params.id) 
        .then(item => { res.send(item) })
        .catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({ message: "Note not found with name " + req.params.name})                
            }
            return res.status(500).send({ message: "Error retrieving note with name " + req.params.name})
        })
}


const deleteOneItem =  (req,res) => {
    // console.log('dete')
    itemModel.findByIdAndRemove(req.params.id)
        .then(item => { res.send(item) })
        .catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({ message: "Note not found with name " + req.params.name})                
            }
            return res.status(500).send({ message: "Error retrieving note with name " + req.params.name})
        })

}


itemsRouter.get('/', (req,res) => retrieveAllItems(req,res))
itemsRouter.post('/', (req,res) => createOneItem(req,res))
itemsRouter.get('/:id', (req,res) => retrieveOneItem(req,res))
itemsRouter.delete('/:id', (req,res) => deleteOneItem(req,res))




module.exports = itemsRouter