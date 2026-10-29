function fn_ValForm() {
    var sMsg = " ";
    if (document.getElementById("nama").value == "") {
        sMsg += "Anda belum mengisikan nama";
    }
    if (document.getElementById("email").value == "") {
        sMsg += "\nAnda belum mengisikan email";
        if (!document.getElementById("email").value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        sMsg += "\nFormat email harus hurruf kecil semua";
        }
    }
    if (document.getElementById("umur").value == "") {
        sMsg += "\nAnda belum mengisikan umur";
    }
    if (document.getElementById("kategori").value == "") {
        sMsg += "\nAnda belum mengisikan kategori";
    }

    if (sMsg != " ") {
                alert("Peringatan:\n" + sMsg);
        return false;
    } else {
        return true;
    }
}