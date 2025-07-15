const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET;

const authenticateJWT = async (req, res, next) => {
  let authHeader = req.headers.authorization;
  const userIdentity = req.headers['user-identity'];

  if (!authHeader) {
    return res.status(401).json({
      message: 'Authorization header missing'
    });
  }

  if(authHeader.includes('Bearer')){
    authHeader = authHeader.split(' ')[1];
  }
  
  try {
    jwt.verify(authHeader, SECRET_KEY, (err, decoded) => {
      if (err) {
        console.error('Token invalid:', err.message);
        res.status(401).json({
          message: 'Token Expired or Invalid'
        });
      } else {
        next();
      }
    });
  } catch (ex) {
    res.status(401).json({
      message: 'Invalid token.'
    });
  }
};

module.exports = {
  authenticateJWT
};
