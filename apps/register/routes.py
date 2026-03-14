from flask import Blueprint, render_template, request
from flask import redirect, url_for

from models import db, User
from flask import current_app,flash

bp_register = Blueprint('register',__name__)

# 注册路由
@bp_register.route('/',methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        # 获取表单数据
        username = request.form.get('username')
        password = request.form.get('password')

        confirm_password = request.form.get('confirm_password')

        # 检查俩次密码是否一致
        if password != confirm_password:

            flash('俩次密码不一致')
            return render_template('register/register.html')
        
        # 检查用户是否存在
        if User.query.filter_by(username=username).first():

            flash('用户名已存在')
            return render_template('register/register.html')
        
        with current_app.app_context():
            new_user = User(username=username)
            new_user.set_password(password) #hash密码
            db.session.add(new_user)
            db.session.commit() #提交到数据库
            flash('注册成功,请登录')

            return redirect(url_for('login.login'))


        return redirect(url_for('login.login'))


    return render_template('register/register.html')