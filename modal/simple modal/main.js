var modal = document.getElementById('simpleModal');
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementById('closeBtn');

modalBtn.addEventListener('click', openModal);
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
}
