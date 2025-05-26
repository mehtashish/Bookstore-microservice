# 📚 Book Store Microservices API

This project is a microservices-based Book Store backend application built using **Node.js**, **Express**, and **MongoDB**, with **Swagger (OpenAPI)** documentation for all services. Each service runs independently and can be started on its own.

---

## 🚀 Services Overview

### 📘 Books Service (`localhost:3001`)
Manages all book-related operations.

- **GET** `/books` – Retrieve all books  
- **POST** `/addBook` – Add a new book  
- **PUT** `/updateBook/:id` – Update a book by ID  
- **DELETE** `/deleteBook/:id` – Delete a book by ID  

🔗 Swagger Docs: [http://localhost:3001/api-docs](http://localhost:3001/api-docs)

---

### 👤 Users Service (`localhost:3002`)
Handles user management.

- **POST** `/addUser` – Add a new user  
- **PUT** `/updateUser/:id` – Update a user by ID  
- **DELETE** `/deleteUser/:id` – Delete a user by ID  

🔗 Swagger Docs: [http://localhost:3002/api-docs](http://localhost:3002/api-docs)

---

### 🛒 Orders Service (`localhost:3003`)
Manages book orders.

- **GET** `/orders` – Retrieve all orders  
- **POST** `/addOrder` – Add a new order  
- **PUT** `/updateOrder/:id` – Update an order by ID  
- **DELETE** `/deleteOrder/:id` – Delete an order by ID  

🔗 Swagger Docs: [http://localhost:3003/api-docs](http://localhost:3003/api-docs)

---

## 🛠️ Getting Started

### ✅ Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

---

### 🧾 Clone the Repository

```bash
git clone https://github.com/mehtashish/Bookstore-microservice.git
cd Bookstore-microservice

```
---

## 🔌 Running the Services Independently -<br>
### Each service has its own directory and can be started individually.<br>

📘 Start Books Service (Port: 3001)
```bash
cd books-service
npm install
npm start
```
Swagger: http://localhost:3001/api-docs<br>

👤 Start Users Service (Port: 3002)
```bash
cd ../users-service
npm install
npm start
```
Swagger: http://localhost:3002/api-docs<br>

🛒 Start Orders Service (Port: 3003)
```bash
cd ../orders-service
npm install
npm start
```
Swagger: http://localhost:3003/api-docs
