# k8s-td

🛠️ Build Docker Images Build frontend and backend Docker images: ```docker build -t flask-backend ./backend``` ```docker build -t express-frontend ./frontend ```
![Screenshot From 2025-06-03 12-08-03](https://github.com/user-attachments/assets/927cacb9-6a0d-4bc6-b7ff-dcb43058f990)

<pre> ## 🏷️ Tag Docker Images Tag your Docker images before pushing to Docker Hub: ```bash docker tag express-frontend:latest maverick8266/express-frontend:latest docker tag flask-backend:latest maverick8266/flask-backend:latest ``` </pre>
![Screenshot From 2025-06-03 13-21-21](https://github.com/user-attachments/assets/c3d28d94-51d8-4358-8d11-f6a541c6327f)

<pre> ## 📦 Push Docker Images to Docker Hub After tagging, push your Docker images to Docker Hub: ```bash docker push maverick8266/express-frontend:latest docker push maverick8266/flask-backend:latest ``` </pre>

![Screenshot From 2025-06-03 13-21-45](https://github.com/user-attachments/assets/8ffe99e7-788d-4095-b137-8479b2e1c37f)


<pre> ## 🚀 Start Minikube and Deploy to Namespace Start your Minikube cluster and apply your Kubernetes manifests to a custom namespace (`k8s-td`): ```bash minikube start kubectl apply -f k8s/ -n k8s-td ``` </pre>
![Screenshot From 2025-06-03 12-15-03](https://github.com/user-attachments/assets/84142e16-f660-4fcd-9cde-7038aa5dd83f)

Created k8s :
![Screenshot From 2025-06-03 13-08-07](https://github.com/user-attachments/assets/380e8aeb-2426-4e42-99c9-9cc6dc537886)

Verify k8s running and port forwarding:
![Screenshot From 2025-06-03 13-40-28](https://github.com/user-attachments/assets/1dfe0399-edd5-45a0-8e42-852018ff0971)

Accessing frontend:
![Screenshot From 2025-06-03 13-31-12](https://github.com/user-attachments/assets/cc81ae49-e535-4e3c-ba57-46f3ca721362)

Submitted data:
![Screenshot From 2025-06-03 13-31-18](https://github.com/user-attachments/assets/6cc376ba-d779-4037-9451-65a963e04eb5)

Verfied data in MongoDB Atlas:
![Screenshot From 2025-06-03 13-31-23](https://github.com/user-attachments/assets/07aab359-4467-447a-a385-dc55d2c1142a)

Minikube dashboard:
![Screenshot From 2025-06-03 13-37-25](https://github.com/user-attachments/assets/76223f2a-573f-4ece-a878-46f507b45f83)

Dashboard- Node
![Screenshot From 2025-06-03 13-38-36](https://github.com/user-attachments/assets/6961537f-662d-407a-bbd8-c86c17bded79)

Dashboard- Deployments:
![Screenshot From 2025-06-03 13-37-37](https://github.com/user-attachments/assets/7b86c08d-35b0-4f2d-8ef3-20605782cf83)

Dashboard- Pods
![Screenshot From 2025-06-03 13-37-42](https://github.com/user-attachments/assets/dc698a07-2d82-43d4-8af1-fa4ac578d6cb)

Dashboard- Replica sets
![Screenshot From 2025-06-03 13-37-50](https://github.com/user-attachments/assets/a717e784-422e-47bc-8831-18f5b2d64d11)

Dashboard- Services
![Screenshot From 2025-06-03 13-37-58](https://github.com/user-attachments/assets/95b5eb6a-db72-45cd-9fc7-e0d4aa31edaa)

Dashboard- config map
![Screenshot From 2025-06-03 13-38-10](https://github.com/user-attachments/assets/f5c44c98-8a76-46dc-947f-4c2364410854)

Dashbaord- Namespaces
![Screenshot From 2025-06-03 13-39-00](https://github.com/user-attachments/assets/ed775b1b-1b49-49a7-88de-12ec81cec7ec)











