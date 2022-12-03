from firebase_admin import auth

def verifyToken(token, uid):
  decoded_token = auth.verify_id_token(id_token)
  return decoded_token['uid'] == uid
