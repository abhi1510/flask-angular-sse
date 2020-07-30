import time
import json
import random
from flask import Flask, render_template, Response
from flask_cors import CORS, cross_origin

app = Flask(__name__)

def get_stock():
    symbols = ['Nifty50', 'ITC', 'WIPRO', 'INFY', 
               'ICICIBANK', 'TCS', 'KOTAKBANK', 'HDFC', 'M&M', 'BPCL']
    return {
        'timestamp': time.strftime("%M:%S", time.gmtime()),
        'symbol': symbols[random.randint(1,len(symbols)-1)],
        'bid': random.random() * 100,
        'ask': random.random() * 80
    } 

@app.route('/')
def index_view():
    return render_template('index.html', title='SSE')

@app.route('/stream-data')
@cross_origin(origins=['http://localhost:4200'])
def get_stream_data():
    def event_stream():
        while True:
            time.sleep(1)
            data = json.dumps(get_stock())    
            yield f"data:{data}\n\n"
    return Response(event_stream(), mimetype='text/event-stream')

if __name__ == '__main__':
    app.run(host='localhost', port=5000, debug=True)