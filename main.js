// Access webcam
const video = document.getElementById("webcam");

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
      video.srcObject = stream;
    })
    .catch((err) => {
      console.error("Error accessing webcam: ", err);
      alert("Unable to access webcam. Please allow permissions.");
    });
}

// Fetch tasks from backend
const tasksList = document.getElementById("tasks-list");

fetch("http://localhost:5000/tasks") // Replace with your backend URL
  .then((response) => response.json())
  .then((tasks) => {
    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.textContent = task;
      tasksList.appendChild(li);
    });
  })
  .catch((err) => {
    console.error("Error fetching tasks:", err);
    tasksList.innerHTML = "<li>Failed to load tasks</li>";
  });
