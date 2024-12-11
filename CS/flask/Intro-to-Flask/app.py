#app.py
from flask import Flask, render_template 

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/news1')
def home():
    return render_template('news1.html')

if __names__ == '__main__':
    app.run(debug = True)

