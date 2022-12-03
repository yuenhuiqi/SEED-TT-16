from database import *

class Account(db.Model):
    __tablename__ = 'accounts'

    AccountID = db.Column(db.Integer, primary_key=True)
    UserID = db.Column(db.Integer, foreign_key = True)
    AccountType = db.Column(db.String(255), nullable=False)
    AccountBalance = db.Column(db.Float, nullable=False)
    
    def __init__(self, AccountID, userID, AccountType, AccountBalance):
        self.AccountID = AccountID
        self.UserID = UserID
        self.AccountType = AccountType
        self.AccountBalance = AccountBalance

