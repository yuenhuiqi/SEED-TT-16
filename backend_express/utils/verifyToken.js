const { getAuth } = require('firebase-admin/auth');

const verifyToken = async (token, uid) => {
  const decodedToken = await getAuth().verifyIdToken(token);
  return uid === decodedToken.uid;
};

module.exports = { verifyToken };
