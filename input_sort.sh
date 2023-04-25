# POST method sort
PORT=8080
curl -d '{ "input": [10, 2, 9, 3, 8, 4, 7, 6, 5, 1] }' \
     -H "Content-Type: application/json" \
     -X POST https://a084a606b6f9c42d09a43af6dc3cc003-1712573430.us-east-1.elb.amazonaws.com:8080/:$PORT/sort
