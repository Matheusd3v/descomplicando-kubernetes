#!/bin/bash

echo "Creating postgresql database..."

kubectl apply -f postgresql-statefulset.yml

kubectl apply -f postgres-clusterip.yml

echo "Creating nodejs api..."

kubectl apply -f node-api-depoyment.yml

kubectl apply -f api-load-balancer.yml

sleep 5

kubectl port-forward services/api-loadbalancer 3000:3000

echo "All infrasctrucure created!"


