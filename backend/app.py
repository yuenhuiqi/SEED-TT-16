from flask import Flask 
from flask import Flask, redirect, url_for, render_template, request, session, jsonify, flash, current_app, make_response, abort
# from flask_cors import CORS, cross_origin

from database import app
# from flask_cors import CORS
from flask_api import status
from flask_sqlalchemy import SQLAlchemy

import firebase_admin
from firebase_admin import credentials

from user import User
from account import Account
from verifyToken import verifyToken
from flask import request
import os

cred = credentials.Certificate("./fbAdminConfig.json")
firebase_admin.initialize_app(cred)

app.config['CORS_HEADERS'] = 'Content-Type'
# db = SQLAlchemy(app)

@app.route('/')
def hello():
	return jsonify({'text': "hello!"})


# 1. Get list of account information based on User's ID (one user can have multiple bank account)

@app.route('/getAccountInfo/<user_id>', methods=['GET'])
def getAllAccounts(user_id):
    token = request.headers.get('token')
    uid = request.headers.get('uid')

    if verifyToken(token,uid):    
        accounts = Account.query.filter_by(UserID=user_id)
        accList = []
        for acc in accounts: 
            accList.append({'accountID': acc.AccountID, 'userID': acc.UserID, 'accountType': acc.AccountType, 'accountBalance': acc.AccountBalance})
        return jsonify(accList) 
    return jsonify({'error': 'Invalid token'}), status.HTTP_401_UNAUTHORIZED


# 2. Get list of transaction details based on User's ID (userID > accountID > Transactions)
@app.route('/Scheduled_Transactions/<user_id>', methods=['GET'])
def Scheduled_Transactions(user_id:int):
    account = Account.query.filter_by(userID=user_id)
    


# 3. Insert into scheduled_transaction table Transaction ID, AccountID, ReceivingAccountID, Date, TransactionAmount, Comment



# 4. Delete using TransactionID + AccountID



# 5. GET of User info, based on User's ID 
@app.route('/getUserDetails/<user_id>', methods=['GET'])
def getUserDetails(user_id):
    user = User.query.filter_by(UserID=user_id).first()
    return jsonify({'firstName': user.Firstname, 'lastName': user.Lastname, 'email': user.Email, 'address': user.Address})

# 6. UPDATE of User info, based on User's ID 





app.secret_key = 'seed'
app.config['SESSION_TYPE'] = 'filesystem'


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)