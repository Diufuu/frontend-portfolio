for (let i = 1; i <= 35; i++) {
    var editter = document.getElementById(`edit-${i}`);
    if (editter) {
        editter.addEventListener("click", function () {
            editElement(`editable-${i}`);
        });
    }
}