from database import *

class User(db.Model):
    __tablename__ = 'users'

    userID = db.Column(db.Integer, primary_key=True)
    userName = db.Column(db.String(20), nullable = False)
    password = db.Column(db.String(20), nullable=False)
    first_name = db.Column(db.String(255), nullable=False)
    last_name = db.Column(db.String(2555), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique = True)
    address = db.Column(db.String(255), nullable=False)
    OptIntoPhyStatements = db.Column(db.Integer, nullable=False)

    def __init__(self, userID, userName, role):
        self.userID = userID
        self.userName = userName
        self.password = password
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.address = address
        self.OptIntoPhyStatements = OptIntoPhyStatements

