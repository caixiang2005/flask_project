# 基于对flask框架学习的项目
---
## 项目的虚拟环境
- 本项目基于内置的虚拟环境venv
```shell
# 创建虚拟环境
python -m venv flask-env

# 激活环境 (Windows)
flask-env\Scripts\activate

# 安装依赖
pip install flask flask-sqlalchemy flask-login

# 生成依赖文件
pip freeze > requirements.txt

# 安装依赖（新环境）
pip install -r requirements.txt

# 退出环境
deactivate
```
