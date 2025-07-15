const User = require('../models/User');
var api = require("../tools/common");

async function getAllUsers(req, res) {
  try {
    const resData = await User.findAll();

    if (resData.length > 0) {
      return api.apiOk(res, resData);
    } else {
      return api.apiError(res, resData, 'Record Not Found', 200);
    }
  } catch (error) {
    console.log('Error in getAllUsers:', error);
    return api.apiError(res, error, 'Internal Server Error', 500);
  }
}



module.exports = { getAllUsers };
