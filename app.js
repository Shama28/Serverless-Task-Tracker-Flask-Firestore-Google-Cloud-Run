// Replace with your Cloud Run backend URL
const apiUrl = "https://task-tracker-api-885421437767.asia-south1.run.app";

// Fetch and display all tasks
function fetchTasks() {
    fetch(`${apiUrl}/list`)
        .then(res => res.json())
        .then(tasks => {
            const taskContainer = document.getElementById("tasks");
            taskContainer.innerHTML = "";

            tasks.forEach(task => {
                const div = document.createElement("div");
                div.className = "task";
                div.innerHTML = `
                    <h4>${task.title}</h4>
                    <p>${task.description}</p>
                    <p>Status: <b>${task.status}</b></p>
                    <button onclick="updateTaskStatus('${task.id}')">Mark Complete</button>
                    <button onclick="deleteTask('${task.id}')">Delete</button>
                `;
                taskContainer.appendChild(div);
            });
        })
        .catch(err => console.error("Error fetching tasks:", err));
}

// Add a new task
function addTask() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    if (!title || !description) {
        alert("Please enter both title and description!");
        return;
    }

    fetch(`${apiUrl}/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description })
    })
    .then(res => res.json())
    .then(data => {
        console.log("Task added:", data);
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
        fetchTasks(); // Refresh the list
    })
    .catch(err => console.error("Error adding task:", err));
}

// Delete a task
function deleteTask(id) {
    fetch(`${apiUrl}/delete/${id}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
        console.log("Task deleted:", data);
        fetchTasks(); // Refresh the list
    })
    .catch(err => console.error("Error deleting task:", err));
}

// Update task status to "Completed"
function updateTaskStatus(id) {
    fetch(`${apiUrl}/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "Completed" })
    })
    .then(res => res.json())
    .then(data => {
        console.log("Task updated:", data);
        fetchTasks(); // Refresh the list
    })
    .catch(err => console.error("Error updating task:", err));
}

// Initial load
fetchTasks();
