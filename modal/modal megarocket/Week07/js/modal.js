var modal = document.getElementById('simpleModal');
var button = document.getElementById('button');
var closeBtn = document.getElementById('closeBtn');

button.addEventListener('click', openModal);
function openModal() {
    modal.style.display = 'block';
}

closeBtn.addEventListener('click', closeModal);
function closeModal() {
    modal.style.display = 'none';
}
// Listen for a outside click
window.addEventListener('click', outsideClick);
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
    var modalSpans = document.querySelectorAll("#modalBody span");
    for (var i = 0; i < modalSpans.length; i++) {
        modalSpans[i].remove();
    }
}