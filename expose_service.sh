#!/bin/bash

deployment=sort-ms
port=8080

kubectl expose deployment/$deployment --type=LoadBalancer --port=$port --target-port=$port