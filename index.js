// Ambil data dari localStorage
let dataTugas = JSON.parse(localStorage.getItem("tugas")) || [];

// ================= READ =================
function tampilkanTugas() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    dataTugas.forEach((tugas, index) => {
        buatItem(tugas, index);
    });
}

// ================= CREATE =================
function tambahTugas() {
    let input = document.getElementById("taskInput");
    let tugas = input.value;

    if (tugas === "") {
        alert("Tugas tidak boleh kosong!");
        return;
    }

    dataTugas.push(tugas);
    simpanData();
    tampilkanTugas();

    input.value = "";
}

// ================= UPDATE =================
function updateTugas(index) {
    let tugasBaru = prompt("Edit tugas:", dataTugas[index]);

    if (tugasBaru !== null && tugasBaru !== "") {
        dataTugas[index] = tugasBaru;
        simpanData();
        tampilkanTugas();
    }
}

// ================= DELETE =================
function hapusTugas(index) {
    dataTugas.splice(index, 1);
    simpanData();
    tampilkanTugas();
}

// ================= SEARCH (pakai tombol) =================
function cariTugas() {
    let keyword = document.getElementById("searchInput").value.toLowerCase();
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    dataTugas.forEach((tugas, index) => {
        if (tugas.toLowerCase().includes(keyword)) {
            buatItem(tugas, index);
        }
    });
}

// ================= FUNCTION TAMBAHAN =================
function buatItem(tugas, index) {
    let list = document.getElementById("taskList");

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = tugas;

    let div = document.createElement("div");
    div.classList.add("btn-group");

    let btnEdit = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnEdit.onclick = function() {
        updateTugas(index);
    };

    let btnHapus = document.createElement("button");
    btnHapus.textContent = "Hapus";
    btnHapus.onclick = function() {
        hapusTugas(index);
    };

    div.appendChild(btnEdit);
    div.appendChild(btnHapus);

    li.appendChild(span);
    li.appendChild(div);

    list.appendChild(li);
}

// ================= SIMPAN DATA =================
function simpanData() {
    localStorage.setItem("tugas", JSON.stringify(dataTugas));
}

// ================= LOAD AWAL =================
tampilkanTugas();