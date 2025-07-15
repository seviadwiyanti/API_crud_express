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


async function deleteuser(req, res) {
  try {
    const id = req.params.id;

    const findUser = await User.findByPk(id);
    if (!findUser) {
      return api.apiError(res, null, 'User Not Found', 404);
    }

    await User.destroy({ where: { id: id } });

    
    return api.apiOk(res, null, 'User Deleted Successfully');

  } catch (error) {
    console.log('Error in deleteUser:', error);
    return api.apiError(res, error, 'Internal Server Error', 500);
  }
}

async function addUser(req, res) {
    const data = req.body
    try {
        const insertData = await User.create(data)
        return api.apiOk(res, insertData, 'Success Insert Data')
    } catch (error) {
        console.log('Error in addDecasingHeader:', error);
        return api.apiError(res, error, 'Internal Server Error', 500)
    }
}

async function updateuser(req, res) {
  const data = req.body;
  const { id } = req.params;

  try {
    const [rowsUpdated] = await User.update(data, {
      where: { id: id }
    });

    if (rowsUpdated === 0) {
      return api.apiError(res, null, 'User Not Found', 404);
    }

    // Ambil data terbaru biar gak cuma "1"
    const updatedUser = await User.findByPk(id);

    return api.apiOk(res, updatedUser, 'Success Update Data');
  } catch (error) {
    console.log('Error in updateUser:', error);
    return api.apiError(res, error, 'Internal Server Error', 500);
  }
}






module.exports = { 
    getAllUsers,
    deleteuser ,
    addUser,
    updateuser
};
