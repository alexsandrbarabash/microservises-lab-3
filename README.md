1. ``sudo service docker start``

2. ``minikube start``

3. Test Kafka message from _root_ to _api_ service
``curl $(minikube ip)/api/root/test``
4. Delete API and ROOT pods
5. Install Consul 

``helm install consul hashicorp/consul --set global.name=consul 
--create-namespace -n consul --values <filename>``
6. Check is consul pods are running with ``kubectl get pods -n consul``
7. Check vault status

``kubectl exec vault-0 -- vault status``


**Use minikube env for docker**

``eval $(minikube docker-env)``

**Output minikube IP**

``$(minikube ip)``



