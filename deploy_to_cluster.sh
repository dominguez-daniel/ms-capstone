#!/bin/bash
kubectl get nodes

image=ddanny99/sort-ms:latest

kubectl create deploy sort-ms --image=$image