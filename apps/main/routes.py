from flask import Blueprint, render_template

bp_main = Blueprint('main', __name__)

@bp_main.route('/main')
def main():
    return render_template('main/main.html')
