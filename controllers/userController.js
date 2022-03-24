const User = require('../models/Users');

//Get All Users
const user_all = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (error) {
        res.json({messages: error});
    }
};

//Single User
const user_details = async (req, res) => {
    try {
        const users = await User.findById(req.params.userId);
        res.json(users);
    }
    catch (error) {
        res.json({messages: error});
    }
};

// Add User 
const user_add = async (req, res) => {
    const user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        dob: req.body.dob,
        gender: req.body.gender,
        ph_no: req.body.ph_no ,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state
    });

    try {
        const savedUser = await product.save();
        res.send(savedUser);
    }
    catch (error) {
        res.status(404).send(error);
    }
};


//Update Product

module.exports = {
    user_all,
    user_details,
    user_add
}