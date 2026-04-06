window.onload = function() {
    const addBtn = document.getElementById("addBtn");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    addBtn.addEventListener("click", addTask);

    taskInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") addTask();
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if(taskText === "") return;

        const li = document.createElement("li");
        li.textContent = taskText;

        // Tombol hapus
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Hapus";
        deleteBtn.className = "delete-btn";

        deleteBtn.addEventListener("click", () => {
            li.classList.add("fade-out");
            setTimeout(() => li.remove(), 300); // animasi fade
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        taskInput.value = "";
        taskInput.focus();
    }
};