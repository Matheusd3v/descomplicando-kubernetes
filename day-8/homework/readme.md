Follow commands and code pieces used in platform exercise:

Creating a tls certificate

```bash
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout nginx.key -out nginx.crt
```

Creating the secret

```bash
k create secret tls nginx-secret --cert=nginx.crt --key=nginx.key
```


Nginx config file

```bash
events { }

http {

    server {
        listen 80;
        listen 443 ssl;
        ssl_certificate /etc/nginx/tls/nginx.crt;
        ssl_certificate_key /etc/nginx/tls/nginx.key;

        location / {

            return 200 'Hello world\n';
            add_header Content-Type text/plain;
        }
    }
}
```

Creating configmap

```bash
k create configmap nginx-config --from-file nginx.conf
```

Creating pod

```bash
apiVersion: v1
kind: Pod
metadata:
  name: nginx-https
  labels:
    app: nginx-https
spec:
  containers:
  - name: nginx-container
    image: nginx
    ports:
      - containerPort: 80
      - containerPort: 443
    volumeMounts:
      - name: nginx-config-volume
        mountPath: /etc/nginx/nginx.conf
        subPath: nginx.conf
      - name: nginx-tls
        mountPath: /etc/nginx/tls
  volumes:
  - name: nginx-config-volume
    configMap:
      name: nginx-config
  - name: nginx-tls
    secret:
      secretName: nginx-secret
      items:
        - key: tls.crt
          path: nginx.crt
        - key: tls.key
          path: nginx.key
```

Creating service

```bash
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
  labels:
    app: nginx-https
spec:
  selector:
    app: nginx-https
  ports:
  - port: 443
    name: http
    targetPort: 443
    nodePort: 32400
  type: NodePort
```