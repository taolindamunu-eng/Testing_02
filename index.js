let data = [];

// READ / TAMPILKAN
function render(listData = data) {
    let list = document.getElementById("list");
    list.innerHTML = "";

    listData.forEach((item, index) => {
        let li = document.createElement("li");

        let span = document.createElement("span");
        span.textContent = item;

        let div = document.createElement("div");
        div.classList.add("btn-group");

        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("edit");
        editBtn.onclick = () => edit(index);

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("delete");
        deleteBtn.onclick = () => hapus(index);

        div.appendChild(editBtn);
        div.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(div);

        list.appendChild(li);
    });

    document.getElementById("info").innerText = data.length + " tugas";
}

// CREATE
function tambah() {
    let input = document.getElementById("taskInput");

    if (input.value === "") {
        alert("Isi dulu!");
        return;
    }

    data.push(input.value);
    input.value = "";
    render();
}

// UPDATE
function edit(index) {
    let baru = prompt("Edit tugas:", data[index]);

    if (baru !== null && baru !== "") {
        data[index] = baru;
        render();
    }
}

// DELETE
function hapus(index) {
    data.splice(index, 1);
    render();
}

// load awal
render();