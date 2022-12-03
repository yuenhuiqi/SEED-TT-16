from database import *

class User(db.Model):
    __tablename__ = 'users'

    userID = db.Column(db.String(30), primary_key=True)
    userName = db.Column(db.String(30), nullable = False)
    role = db.Column(db.String(30), nullable=False)

    def __init__(self, userID, userName, role):
        self.userID = userID
        self.userName = userName
        self.role = role