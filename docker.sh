eval $(minikube docker-env)
docker build -t api:0.1 -f api/Dockerfile ./api
docker build -t auth:0.1 -f auth/Dockerfile ./auth
docker build -t root:0.1 -f root-service/Dockerfile ./root-service
