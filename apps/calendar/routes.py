from flask import Blueprint,render_template

bp_calendar = Blueprint('calendar',__name__)

# 创建进入日历内容的路由
@bp_calendar.route('/calendar')
def calendar():
    return render_template('calendar/calendar.html')