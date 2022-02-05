
const authService = require("./auth.service");
const userService = require("../users/user.service");
const jwt = require("../common/jwt.js");

module.exports = {

    registerUser: async(req,res)=>{
        const payload = req.body;
   
        if(!payload.firstName || !payload.lastName || !payload.phoneNumber || !payload.password){
   
           return res.status(400).send({
               success: false,
               message: "validation error: firstName, lastName, phoneNumber, password are required "
           });
        }
        payload.password = await authService.passwordEncrypt(payload.password);
        const result = await userService.createUser(payload);
        return res.status(201).send({
            success: true,
            message: "User registered succesfully",
            data: result
        });

   },
   loginUser: async(req,res)=>{
       const payload = req.body;
       if(!payload.phoneNumber || !payload.password){

        return res.status(400).send({
            success: false,
            message: "validation error: phoneNumber and password are required"
        });
       }
       const user = await userService.findUser({
           phoneNumber: payload.phoneNumber

       });
       if(!user){
           return res.status(400).send({
               success: false,
               message: "user is not registerd"

           });
       } 
        const matched = await authService.comparePassword(payload.password,user.password);
        if(!matched){

            return res.status(401).send({
                success:false,
                message: "password doesnt matched"

            });
        }
        const tokenPayload = {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            phoneNumber: user.phoneNumber,
            status: user.status
        };
        const token = await jwt.sign(tokenPayload);
        return res.status(200).send({
            success: true,
            message: "You are successfully logged in",
            date: {
                accessToken: token,
            }
        });
   }
}