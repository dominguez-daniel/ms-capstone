# POST method sort
PORT=8080
curl -d '{ "input": [10, 2, 9, 3, 8, 4, 7, 6, 5, 1] }' \
     -H "Content-Type: application/json" \
     -X POST http://127.0.0.1:$PORT/sort
