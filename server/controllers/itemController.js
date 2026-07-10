const Item = require("../models/Item");

const createItem = async (req, res) => {
    try {
        const item = await Item.create({
            ...req.body,
            user: req.user._id
        });

        res.status(201).json(item);
    }
    catch(error){
        res.status(500).json({
            message: error.message
        });
    }
};

const getItems = async (req,res)=>{
    const items = await Item.find({
        user:req.user._id
    });

    res.json(items);
};

module.exports = {
    createItem,
    getItems
};