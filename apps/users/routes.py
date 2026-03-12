from flask import Blueprint,render_template

bp_users = Blueprint('users',__name__)

# 创建进入用户管理页面的路由
@bp_users.route('/users')
def users():
    return render_template('users/users.html')
