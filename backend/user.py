from database import *

class User(db.Model):
    __tablename__ = 'User'

    UserID = db.Column(db.Integer, primary_key=True)
    Username = db.Column(db.String(20), nullable = False)
    Password = db.Column(db.String(20), nullable=False)
    Firstname = db.Column(db.String(255), nullable=False)
    Lastname = db.Column(db.String(255), nullable=False)
    Email = db.Column(db.String(255), nullable=False, unique = True)
    Address = db.Column(db.String(255), nullable=False)
    OptIntoPhyStatements = db.Column(db.Integer(), nullable=False)

    def __init__(self, UserID, Username, Password, Firstname, Lastname, Email, Address, OptIntoPhyStatements):
        self.UserID = UserID
        self.Username = Username
        self.Password = Password
        self.Firstname = Firstname
        self.Lastname = Lastname
        self.Email = Email
        self.Address = Address
        self.OptIntoPhyStatements = OptIntoPhyStatements

