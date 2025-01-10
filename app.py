from flask import Flask, render_template, redirect

app = Flask(__name__, static_url_path="", static_folder='static/')
app.config.from_object(__name__)

@app.route("/")
def home():
    return render_template("index.html")

if __name__ == "__main__":
    app.run("127.0.0.1", 8000, debug=True)