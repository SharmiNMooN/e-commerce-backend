const userModel = require("./user.model");

module.exports = {

    createUser: async (payload)=>{
        
        const user = await userModel.create(payload);
        return user;
        
    }

}