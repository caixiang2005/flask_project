from flask import Flask,request,redirect, url_for
from flask import session
import os
from models import db, User

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'your-secret-key-here'
    basedir = os.path.abspath(os.path.dirname(__file__))
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'instance', 'app.db')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)

    # 检查登录状态
    @app.before_request
    def check_login():
        not_judge = ['login.login','static','register.register']

        # 不需要判断的路由直接返回
        if request.endpoint in not_judge:
            return
        
        # 检查session内是否有user_id
        if 'user_id' not in session:
            return redirect(url_for('login.login'))


    from apps.login.routes import bp_login
    from apps.main.routes import bp_main
    from apps.settings.routes import bp_settings
    from apps.calendar.routes import bp_calendar
    from apps.course.routes import bp_course
    from apps.users.routes import bp_users
    from apps.stats.routes import bp_stats
    from apps.register.routes import bp_register

    # 导入蓝图
    app.register_blueprint(bp_register,url_prefix='/register')
    app.register_blueprint(bp_login, url_prefix='/')
    app.register_blueprint(bp_main, url_prefix='/main')
    app.register_blueprint(bp_settings, url_prefix='/settings')
    app.register_blueprint(bp_calendar, url_prefix='/calendar')
    app.register_blueprint(bp_course, url_prefix='/course')
    app.register_blueprint(bp_users, url_prefix='/users')
    app.register_blueprint(bp_stats, url_prefix='/stats')


    with app.app_context():
        db.create_all()
        if not User.query.first():
            # 创建测试用户
            test_user1 = User(username='1')
            test_user1.set_password('1')
            test_user2 = User(username='2')
            test_user2.set_password('2')

            db.session.add(test_user1)
            db.session.add(test_user2)
            db.session.commit()
            print("测试用户已创建: 用户名=1, 密码=1")

    return app

app = create_app()

if __name__ == '__main__':
    app.run(debug=True)
