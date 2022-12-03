from flask import request, session, jsonify
from verifyToken import verifyToken
from functools import wraps

def check_token(f):
    @wraps(f)
    def wrap(*args,**kwargs):
        token = request.headers.get('Authorization')
        uid = request.headers.get('uid')
        if verifyToken(token,uid):
            return f(*args,**kwargs)
        return jsonify({'error': 'Invalid token'})