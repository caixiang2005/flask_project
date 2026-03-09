from flask import Flask
import os
from models import db, User

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'your-secret-key-here'
    basedir = os.path.abspath(os.path.dirname(__file__))
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'instance', 'app.db')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)

    from apps.login.routes import bp_login
    from apps.main.routes import bp_main

    app.register_blueprint(bp_login, url_prefix='/')
    app.register_blueprint(bp_main, url_prefix='/main')

    with app.app_context():
        db.create_all()
        if not User.query.first():
            test_user = User(username='1', password='1')
            db.session.add(test_user)
            db.session.commit()
            print("测试用户已创建: 用户名=1, 密码=1")

    return app

app = create_app()

if __name__ == '__main__':
    app.run(debug=True)
