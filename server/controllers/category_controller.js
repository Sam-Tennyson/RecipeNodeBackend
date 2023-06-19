const { Category } = require("../models/category_schema");

module.exports = {
    addCategory: async (req, res)=> {
        try {
            const { name } = req.body;
            if ( !name) throw new Error("Missing required parameters");
            let data = {name}
            let createdCategroy = await Category(data).save();
            res.status(200).json({
                msg: "Category Added Successfully",
                createdCategroy
            });
        } catch (err) {
            res.status(500).send({
                errMsg: err.message
            });
        }
    },
    getCategory: async (req, res)=> {
        try {
            let data = await Category.find({});
            res.status(200).json({
                data,
            })
        } catch (err) {
            res.status(500).send({
                errMsg: err.message
            })
        }
    }
}