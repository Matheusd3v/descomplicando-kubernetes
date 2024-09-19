# Kubernetes StatefulSet and Services - Hands-On Exercise

Your goal is to create and manage a StatefulSet in your own Kubernetes environment. Start by deploying a simple StatefulSet with a pair of Pods, then attempt to scale it by adding more Pods. Try deleting a Pod and observe how Kubernetes handles the situation.

Next, experiment with Services. Expose your StatefulSet using a ClusterIP Service, then switch to either a NodePort or LoadBalancer. Test the connectivity to ensure everything is functioning as expected.

Lastly, create an ExternalName Service and point it to an external service of your choice. Verify that the external service is accessible from within your Pods.