const userHelper = require("./user.helper");
const userService = require("./user.service");

module.exports = {

    registerUser: async(req,res)=>{
        const payload = req.body;
   
        if(!payload.firstName || !payload.lastName || !payload.phoneNumber || !payload.password){
   
           return res.status(400).send({
               success: false,
               message: "validation error: firstName, lastName, phoneNumber, password are required "
           });
        }
        payload.password = await userHelper.passwordEncrypt(payload.password);
        const result = await userService.createUser(payload);
        return res.status(201).send({
            success: true,
            message: "User registered succesfully",
            data: result
        });

   }
}