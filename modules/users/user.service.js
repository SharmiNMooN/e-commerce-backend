const userModel = require("./user.model");

module.exports = {

    createUser: async (payload)=>{

        const user = await userModel.create(payload);
        return user;
        
    },
    findUser: async(filter)=>{
        const user = await userModel.findOne(filter);
        return user;


    },
     getAllUser: async()=>{
        const users = await userModel.find({},{password: 0});
        return users;
     }


}