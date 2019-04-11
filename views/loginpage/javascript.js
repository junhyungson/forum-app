function saveEdits() {
    localStorage.userEdits = document.getElementById("edit").innerHTML;
}

function checkEdits() {
    if(localStorage.userEdits!=null)
        document.getElementById("edit").innerHTML = localStorage.userEdits;
}

function redirect() {
    var url = "loggedOut.html";
    window.location(url);
}