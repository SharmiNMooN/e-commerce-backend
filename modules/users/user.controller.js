const userHelper = require("./user.helper");
const userService = require("./user.service");

module.exports = {
    getAllUser: async(req,res)=>{
        const users = await userService.getAllUser();
        return res.status(200).send({
            success: true,
            message: "All users get successfully",
            data: users
        });

    },
    getUserDetails: async(req,res)=>{
        const userId = req.params.id;
        const user = await userService.getUserDetails(userId);
        if(!user){
            return res.status(400).send({
                success: false,
                message: "user is not found",

            });
        }
        return res.status(200).send({
            success: true,
            message: "Get user details",
            data: user
        });
    }
}