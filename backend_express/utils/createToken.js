const { getAuth } = require('firebase-admin/auth');

const createToken = async (uid) => {
  const customToken = await getAuth().createCustomToken(uid);
  return customToken
};

module.exports = { createToken };
