from flask import Flask, request, jsonify
from flask_cors import CORS
from google.cloud import firestore

app = Flask(__name__)
CORS(app)

# Initialize Firestore
db = firestore.Client()
tasks_ref = db.collection('tasks')

@app.route('/')
def home():
    return jsonify({"message": "Task Tracker API with Firestore is running!"})

@app.route('/add', methods=['POST'])
def add_task():
    data = request.get_json()
    title = data.get('title')
    description = data.get('description')

    if not title:
        return jsonify({"error": "Title is required"}), 400

    new_task = {
        "title": title,
        "description": description,
        "status": "pending"
    }

    doc_ref = tasks_ref.add(new_task)
    return jsonify({"id": doc_ref[1].id, "message": "Task added successfully"})

@app.route('/list', methods=['GET'])
def list_tasks():
    tasks = []
    for doc in tasks_ref.stream():
        t = doc.to_dict()
        t['id'] = doc.id
        tasks.append(t)
    return jsonify(tasks)

@app.route('/update/<task_id>', methods=['PUT'])
def update_task(task_id):
    data = request.get_json()
    status = data.get('status')
    tasks_ref.document(task_id).update({"status": status})
    return jsonify({"message": "Task updated successfully"})

@app.route('/delete/<task_id>', methods=['DELETE'])
def delete_task(task_id):
    tasks_ref.document(task_id).delete()
    return jsonify({"message": "Task deleted successfully"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
