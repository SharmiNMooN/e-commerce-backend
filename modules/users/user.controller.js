const userHelper = require("./user.helper");
const userService = require("./user.service");

module.exports = {
    getAllUser: async(req,res)=>{
        const users = await userService.getAllUser();
        return res.status(200).send({
            success: false,
            message: "All users get successfully",
            data: users
        })

    }

}