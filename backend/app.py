from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/multiply', methods=['POST'])
def multiply():
    data = request.get_json()
    x = float(data.get('x', 0))
    y = float(data.get('y', 0))
    result = x * y
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)