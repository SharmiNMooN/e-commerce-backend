const bcrypt = require('bcryptjs');

module.exports = {

    passwordEncrypt: async(password)=>{
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password,salt);
        return hash;
    },
    
    comparePassword: async(password, hashedPassword)=>{
        const match = await bcrypt.compare(password, hashedPassword);
        return match;
    }

}


