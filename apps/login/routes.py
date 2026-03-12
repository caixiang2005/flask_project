from flask import Blueprint, request, render_template, redirect, url_for, session, flash, current_app
from models import db, User

bp_login = Blueprint('login', __name__)

@bp_login.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username', '').strip()
        password = request.form.get('password', '').strip()

        with current_app.app_context():
            user = db.session.execute(
                db.select(User).filter_by(username=username)
            ).scalar_one_or_none()

        if user and user.password == password:
            session['user_id'] = user.id
            session['username'] = user.username
            return redirect(url_for('main.main'))
        else:
            flash('用户名或密码错误', 'error')
            return redirect(url_for('login.login'))
    # get请求重定向到登录页面
    return render_template('login/index.html')

# 退回到主登录界面
@bp_login.route("/logout")
def logout():
    # 清空对话的记录
    session.clear()
    return redirect(url_for('login.login'))