document.addEventListener("DOMContentLoaded", function() {
var modal = document.getElementById("myModal");
if (!modal) return;

var close = modal.querySelector(".dismiss-close");
var modalBody = modal.querySelector(".modal-body");
var modalContent = modal.querySelector(".modal-content");


function closeModal() {
modal.style.display = "none";
modalBody.innerHTML = "";

}

modalContent.addEventListener("click", function(event) {
event.stopPropagation();
});

close.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);
}); 