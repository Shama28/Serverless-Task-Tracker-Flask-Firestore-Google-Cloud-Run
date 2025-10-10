# Serverless Task Tracker Web App

A **full-stack serverless web application** to manage daily tasks efficiently — developed using **Flask (Python)**, **Firestore**, and deployed on **Google Cloud Run**, with the frontend hosted on **Google Cloud Storage**.

---

## Overview

The **Serverless Task Tracker** is a simple yet powerful project demonstrating:
- **Backend on Cloud Run** (serverless, scalable API)
- **Frontend hosted on Google Cloud Storage**
- **Firestore** as a NoSQL database
- **CORS-enabled API** for frontend-backend communication

It performs full **CRUD operations** — Create, Read, Update, Delete — for tasks.

---

## Architecture

Frontend (HTML + JS, GCS)
│
▼
Backend API (Flask, Cloud Run)
│
▼
Database (Firestore)


---

##  Features

-  Add, view, update, and delete tasks  
-  Deployed using serverless architecture  
-  CORS enabled for secure communication  
-  Hosted entirely on Google Cloud Platform  
-  Clean, simple frontend connected to Cloud Run API

---

##  Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | HTML, CSS, JavaScript |
| **Backend** | Python (Flask) |
| **Database** | Google Firestore |
| **Hosting / Deployment** | Google Cloud Run, Google Cloud Storage |
| **Version Control** | Git, GitHub |

---

##  Folder Structure

serverless-task-tracker/
│
├── backend/
│ ├── app.py
│ ├── requirements.txt
│ └── Dockerfile
│
├── frontend/
│ ├── index.html
│ └── app.js


---

## Setup Instructions

### Backend

1. Clone this repository:
   ```bash
   git clone https://github.com/<your-username>/serverless-task-tracker.git
   cd serverless-task-tracker/backend

2. Install dependencies:
   pip install -r requirements.txt

3. Run locally:
   python app.py

4. Deploy to Cloud Run:
   gcloud run deploy task-tracker-api \
    --image gcr.io/<project-id>/task-tracker:latest \
    --platform managed \
    --allow-unauthenticated \
    --region asia-south1

## Frontend

1. Open frontend/index.html in your browser
2. In frontend/app.js, set your Cloud Run API URL:
   const apiUrl = "https://task-tracker-api-885421437767.asia-south1.run.app";
3. Upload the frontend/ folder to your GCS bucket:
   task-tracker-frontend
4. Make the bucket public and access via:
   https://storage.googleapis.com/task-tracker-frontend/index.html

## Live Demo

Frontend: [ View Frontend (GCS)](https://storage.googleapis.com/task-tracker-frontend/index.html)  
Backend API: [ View Backend API (Cloud Run)](https://task-tracker-api-885421437767.asia-south1.run.app)


Author

Shama K M
[ Email ](mailto:shamamallik@gmail.com)  
[ LinkedIn ](https://www.linkedin.com/in/shama-k-m-080135306) 






