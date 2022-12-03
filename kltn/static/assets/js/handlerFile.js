function getFile () {
    var image_url = document.getElementById("url").value;
    document.getElementById("output").src = image_url;
};

function loadFile(event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
    event.target.value = null;
};

