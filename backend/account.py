from database import *

class Account(db.Model):
    __tablename__ = 'accounts'

    ID = db.Column(db.Integer, primary_key=True)
    userID = db.Column(db.Integer, foreign_key = True)
    account_type = db.Column(db.String(255), nullable=False)
    account_balance = db.Column(db.Float, nullable=False)
    
    def __init__(self, ID, userID, account_type, account_balance):
        self.ID = ID
        self.userID = userID
        self.account_type = account_type
        self.account_balance = account_balance

