# flask-angular-sse
SSE implementation in flask and angular


## Flask Server

- random stock implementation
- stream stock data every second
- cross origins whitelisting 

**Set Up**

```python

1. Create virtual env
2. pip install -r requirements.txt
3. python run.py

```

At this point you should have a running flask server. Visit [index](http://localhost:5000)


## Angular Client

- sse implementation as observable
- subscribe and unsubscribe sse
- home, controller (table) and monitor (chart) components

**Set Up**

```javascript

1. cd client
2. npm install
3. npm start

```

At this point you should have a running node server. Visit [index](http://localhost:4200)
