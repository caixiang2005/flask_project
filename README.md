# 基于对flask框架学习的项目
---
## 项目的虚拟环境
- 本项目基于内置的虚拟环境venv
```shell
# 创建虚拟环境
python -m venv flask_project

# 激活环境 (Windows)
flask_project\Scripts\activate

# 安装依赖
pip install flask flask-sqlalchemy flask-login

# 生成依赖文件
pip freeze > requirements.txt

# 安装依赖（新环境）
pip install -r requirements.txt

# 退出环境
deactivate
```
- 项目的环境
pip install flask
- 项目推荐使用的工具
 mypy
 black
 flake8
提升整体的代码质量
---
## 项目的文件结构
- apps里面存放的是各个模块的单独路由
  - main
  - calendar
  - course
  - users
  - stats
  - settings
- static里面存放的是各个模块对应的静态文件js,css
- templates里面存放的是整个项目的渲染文件html
- instance则为存储数据库表内的一些具体内容
