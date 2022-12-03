const { getAuth } = require('firebase-admin/auth');
const { createToken } = require('./createToken');

const createUser = async (email, password) => {
  const userRecord = await getAuth().createUser({
    email: email,
    password: password,
  });

  const token = await createToken(userRecord.uid);
  return { uid: userRecord.uid, token: token };
};

module.exports = { createUser };
