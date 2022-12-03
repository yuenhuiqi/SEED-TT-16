from flask import Flask 
from flask import Flask, redirect, url_for, render_template, request, session, jsonify, flash, current_app, make_response, abort
# from flask_cors import CORS, cross_origin

from database import app
# from flask_cors import CORS
from flask_api import status
from flask_sqlalchemy import SQLAlchemy

from user import User

import os

app.config['CORS_HEADERS'] = 'Content-Type'
db = SQLAlchemy(app)

@app.route('/')
def hello():
	return jsonify({'text': "hello!"})

@app.route('/getUserDetails/<user_id>', methods=['GET'])
def getUserDetails(user_id):
    us = User.query.filter_by(userID=user_id).first()
    return jsonify({'userID': us.userID, 'userName': us.userName, 'role': us.role})


app.secret_key = 'seed'
app.config['SESSION_TYPE'] = 'filesystem'


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)