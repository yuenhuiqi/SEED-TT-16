from database import *

class Transaction(db.Model):
    __tablename__ = 'ScheduledTransactions'

    transactionID = db.Column(db.Integer(), primary_key=True)
    accountID = db.Column(db.Integer(), primary_key=True)
    receivingAccountID = db.Column(db.Integer(), nullable = False)
    date = db.Column(db.String(255), nullable = False)
    transactionAmount = db.Column(db.Float(), nullable = False)
    comment = db.Column(db.String(255), nullable = False)
  
    def __init__(self, transactionID, accountID, receivingAccountID, date, transactionAmount, comment):
        self.transactionID = transactionID
        self.accountID = accountID
        self.receivingAccountID = receivingAccountID
        self.date = date
        self.transactionAmount = transactionAmount
        self.comment = comment
        
        