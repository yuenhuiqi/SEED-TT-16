from database import db

from user import User

from transaction import Transaction

db.drop_all()
db.create_all()

db.session.commit()