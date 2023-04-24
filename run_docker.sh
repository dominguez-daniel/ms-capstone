#!/bin/bash

docker build --tag=sort-ms .

docker image ls

docker run -it -p 8080:8080 sort-ms

