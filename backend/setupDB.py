from database import db

from user import User

from transaction import Transaction

db.drop_all()
db.create_all()

# user1 = User(userID = '1', userName = "user1", role = "user")
# user2 = User(userID = '2', userName = "user2", role = "user")
# user3 = User(userID = '3', userName = "user3", role = "user")

# db.session.add_all([user1, user2, user3])
db.session.commit()