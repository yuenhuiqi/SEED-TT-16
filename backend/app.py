from flask import Flask 
from flask import Flask, redirect, url_for, render_template, request, session, jsonify, flash, current_app, make_response, abort
# from flask_cors import CORS, cross_origin

from database import app
# from flask_cors import CORS
from flask_api import status
from flask_sqlalchemy import SQLAlchemy

from user import User
from account import Account
from transaction import Transaction

import uuid
from http import HTTPStatus
import os

from sqlalchemy import func

app.config['CORS_HEADERS'] = 'Content-Type'
db = SQLAlchemy(app)

@app.route('/')
def hello():
	return jsonify({'text': "hello!"})


# 1. Get list of account information based on User's ID (one user can have multiple bank account)

@app.route('/getAccountInfo/<user_id>', methods=['GET'])
def getAllAccounts(user_id):
    accounts = Account.query.filter_by(UserID=user_id)
    accList = []
    for acc in accounts: 
        accList.append({'accountID': acc.AccountID, 'userID': acc.UserID, 'accountType': acc.AccountType, 'accountBalance': acc.AccountBalance})
    return jsonify(accList) 


# 2. Get list of transaction details based on User's ID (accountID > Transactions)
@app.route('/getScheduledTransactions/<account_id>', methods=['GET'])
def getScheduledTransactions(account_id):
    
    transactions = Transaction.query.filter_by(AccountID=account_id)
    transactionList = []
    for trans in transactions:
        transactionList.append({'date': trans.Date, 'receivingAccountID': trans.ReceivingAccountID, 'transactionAmount': trans.TransactionAmount, 'comment': trans.Comment})
    return jsonify(transactionList)

# 3. Insert into scheduled_transaction table Transaction ID, AccountID, ReceivingAccountID, Date, TransactionAmount, Comment
@app.route('/addTransaction/<account_id>/<receiving_account_id>/<date>/<transaction_amount>/<comment>', methods=['POST'])
def addTransaction(account_id, receiving_account_id, date, transaction_amount, comment):

    max_num = Transaction.query.order_by(Transaction.TransactionID.desc()).first().TransactionID
    trans_id = max_num + 1 
    
    try: 
        newTrans = Transaction( TransactionID=trans_id, AccountID=account_id, ReceivingAccountID=receiving_account_id, Date=date, TransactionAmount=transaction_amount, Comment=comment)
        db.session.add(newTrans)
        db.session.commit()
        return jsonify("Transaction added!")
        
    except Exception as e:
        return str(e), HTTPStatus.INTERNAL_SERVER_ERROR 
    
# 4. Delete using TransactionID + AccountID



# 5. GET of User info, based on User's ID 
@app.route('/getUserDetails/<user_id>', methods=['GET'])
def getUserDetails(user_id):
    user = User.query.filter_by(UserID=user_id).first()
    return jsonify({'firstName': user.Firstname, 'lastName': user.Lastname, 'email': user.Email, 'address': user.Address})

# 6. UPDATE of User info, based on User's ID 
@app.route("/updateUserInfo/<user_id>/<email>/<address>", methods=["PUT"])
def updateUserInfo(user_id, email, address):
    user = User.query.filter_by(UserID=user_id).first()
    
    try: 
        user.Email = email
        user.Address = address
        db.session.commit()
        return jsonify(200)
    
    except Exception as e:
        return str(e), HTTPStatus.INTERNAL_SERVER_ERROR 
    

app.secret_key = 'seed'
app.config['SESSION_TYPE'] = 'filesystem'


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)