# ms-capstone
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/dominguez-daniel/ms-capstone/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/dominguez-daniel/ms-capstone/tree/main)


### This project demonstrates a simple node microservice being containerized, pushed to a docker repository, and deployed to a kubernetes cluster all using circle ci.

### Run locally
- `npm i` & `npm start`
- build and run local containerized app with `./run_docker.sh`

### This simple project utilizes the `eksctl` tool to create a basic cluster using AWS Cloudformation that the docker image is deployed to.
- `./create_cluster.sh`

### In the `.circleci/config.yml` the cluster is updated by using a rolling deployment with the following command
- `kubectl set image`