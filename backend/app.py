from flask import Flask 
from flask import Flask, redirect, url_for, render_template, request, session, jsonify, flash, current_app, make_response, abort
# from flask_cors import CORS, cross_origin

from user import User

import os

from account import Account

app.config['CORS_HEADERS'] = 'Content-Type'
db = SQLAlchemy(app)



#[2]
@app.route('/AccountInformation/<user_id>', methods=['GET'])
def AccountInformation(user_id: int):
    account = Account.query.filter_by(userID=user_id)
    return account #make schema maybe?

#[3]
@app.route('/Scheduled_Transactions/<user_id>', methods=['GET'])
def Scheduled_Transactions(user_id:int):
    account = Account.query.filter_by(userID=user_id)
    


    


    





app.secret_key = 'seed'
app.config['SESSION_TYPE'] = 'filesystem'


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)