from database import *

class Transaction(db.Model):
    __tablename__ = 'ScheduledTransactions'

    TransactionID = db.Column(db.Integer(), primary_key=True)
    AccountID = db.Column(db.Integer(), primary_key=True)
    ReceivingAccountID = db.Column(db.Integer(), nullable = False)
    Date = db.Column(db.String(255), nullable = False)
    TransactionAmount = db.Column(db.Float(), nullable = False)
    Comment = db.Column(db.String(255), nullable = False)
  
    def __init__(self, TransactionID, AccountID, ReceivingAccountID, Date, TransactionAmount, Comment):
        self.TransactionID = TransactionID
        self.AccountID = AccountID
        self.ReceivingAccountID = ReceivingAccountID
        self.Date = Date
        self.TransactionAmount = TransactionAmount
        self.Comment = Comment
        
        