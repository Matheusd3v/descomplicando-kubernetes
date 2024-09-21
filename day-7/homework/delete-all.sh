
kubectl delete -f ../homework/

kubectl get pvc --no-headers -o custom-columns=NAME:.metadata.name | head -n 1 | xargs kubectl delete pvc

echo "All infrastructure has been deleted!"