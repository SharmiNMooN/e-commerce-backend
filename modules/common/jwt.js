const jwt = require("jsonwebtoken");
const jwtSecrate = "myecommerceprivatekey";


module.exports = {
    sign: async(payload)=>{
        const jwtOption = {
            expiresIn: "7d",
        }
       const token =  await jwt.sign(payload, jwtSecrate,jwtOption );
       return token;
    },

    decode: async(token)=>{
        const decoded = await jwt.decode(token);
        return decoded;
    },
    verify: async(token)=>{
        const verified = await jwt.verify(token, jwtSecrate);
        return verified;
        
    }

}
