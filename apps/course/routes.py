from flask import Blueprint,render_template

bp_course = Blueprint('course',__name__)

# 创建进入课堂内容的路由
@bp_course.route('/course')
def course():
    return render_template('course/course.html')
