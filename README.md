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

# Виконати команди нижче

### minikube

```
minikube start --driver=hyperv --memory=4000
```

```
minikube addons enable ingress
```
### istio

`istio` - для некс має бути встановлено

```
istioctl install --set profile=demo -y
```

```
kubectl label namespace default istio-injection=enabled
```

### api

```
kubectl apply -f api/api-deployment.yml
```

```
kubectl apply -f api/api-service.yml
```

```
kubectl apply -f api/virtual-service.yml
```

### auth

```
kubectl apply -f auth/api-deployment.yml
```

```
kubectl apply -f auth/api-service.yml
```

### root-service

```
kubectl apply -f root-service/root-deployment.yml
```

```
kubectl apply -f root-service/root-service.yml
```

```
kubectl apply -f root-service/virtual-service.yml
```

```
kubectl apply -f root-service/circuit-breaker.yml
```

### ingress

```
kubectl apply -f ingress.yml
```

### db

```
kubectl apply -f db/persistent-volume-claim.yml
```

```
kubectl apply -f db/postgres-deployment.yml
```

### перевірка бд
```
kubectl get storageclass
```
має вивести storageclass

### Кафка
```
kubectl apply -f kafka
```

###  перевірка кафки
треба взяти логи з pod auth і пода api `kubectl logs назва пода`
і просто показати що повідомлення виводяться

поди можна взяти командую `kubectl get pods` вони всі мають бути запущені!!!

якщо будуть ерори то видалити всі деплойменти і запустити спочатку деплоймент кафки

