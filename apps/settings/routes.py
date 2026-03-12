from flask import render_template, Blueprint

bp_settings = Blueprint('settings', __name__)


# 创建进入设置内容的路由
@bp_settings.route('/settings')
def settings():
    return render_template('settings/settings.html')