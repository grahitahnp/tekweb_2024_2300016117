document.getElementById("Tombol").addEventListener("click", function() {
    document.getElementById("judul").innerText = "jengjeng!";
});

function ubah() {
    const selectedColor = document.getElementById("colorPicker").value;
    document.body.style.backgroundColor = selectedColor;
}

function refreshPage() {
    window.location.reload();
}

let zoomLevel = 1;

document.getElementById('zoomInBtn').addEventListener('click', function() {
    zoomLevel += 0.1;
    document.body.style.zoom = zoomLevel;
});

document.getElementById('zoomOutBtn').addEventListener('click', function() {
    if (zoomLevel > 0.1) {
        zoomLevel -= 0.1;
        document.body.style.zoom = zoomLevel;
    }
});

document.getElementById('ubahFontBtn').addEventListener('click', function() {
    document.body.style.fontFamily = 'Courier New, Courier, monospace';
});

let isDarkMode = false;

document.getElementById('darkModeToggle').addEventListener('click', function() {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        document.body.style.backgroundColor = '#121212';
        document.body.style.color = '#ffffff';
    } else {
        document.body.style.backgroundColor = 'whitesmoke';
        document.body.style.color = '#000000';
    }
});