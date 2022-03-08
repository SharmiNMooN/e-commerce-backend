const  jwtHelper = require("../common/jwt");
const userService = require("../users/user.service");

module.exports = {
    async authentication(req, res, next) {
      try {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
          const token = req.headers.authorization.split(' ')[1];
          const decoded = await jwtHelper.verify(token);
          const user = await userService.findUser({_id: decoded._id });
          delete user.password;
          req.user = user;
          return next();
        }
  
        console.error('Authorization header is not set');
        return res.status(401).send({
          message: 'Unauthorized User',
          error: 'You are not authenticate user'
        });
      } catch (e) {
        console.error(e.message);
        return res.status(401).send({
          message: 'Unauthorized User',
          error: e.message
        });
      }
    },

   authorization(...allowed) {
      return (req, res, next) => {
        console.log(req.user, allowed);
        if(allowed.includes(req.user.userType)) {
          return next();
        } else {
          return res.status(401).send({
            message: 'Unauthorized User',
            error: 'You are not authorized user'
          });
        }
      }
    }
}