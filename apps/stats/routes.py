from flask import Blueprint, render_template

bp_stats = Blueprint('stats',__name__)

# 创建进入统计页面的路由
@bp_stats.route('/stats')
def stats():
    return render_template('stats/stats.html')
