# flask-angular-sse
SSE implementation in flask and angular. Flask server streams data on regular interval. Angular client has an implementation of EventSource as Observable. If any component needs to get the sse, simple inject Sse as provider and subscribe to it in ngOnInit and unsubscribe in ngOnDestroy. 


## Flask Server

- random stock implementation
- stream stock data every second
- cross origins whitelisting 

**Set Up**

```python

1. cd server
2. create virtualenv and activate it
2. pip install -r requirements.txt
3. python app.py

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
