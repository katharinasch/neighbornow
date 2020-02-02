document.addEventListener("DOMContentLoaded", function() {
var modal = document.getElementById("myModal");
if (!modal) return;

var close = modal.querySelector(".dismiss-close");
var modalBody = modal.querySelector(".modal-body");
var modalContent = modal.querySelector(".modal-content");



window.onclick = function(event) {
  if (event.target == modal) {
    $('#myModal').modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
    modalBody.removeChild(modalBody.querySelector('#alertElement'));
    
  }
}

function closeModal() {
	$('#myModal').modal('hide');
  $('body').removeClass('modal-open');
  $('.modal-backdrop').remove();
	modalBody.removeChild(modalBody.querySelector('#alertElement'));


}

modalContent.addEventListener("click", function(event) {
event.stopPropagation();
});

close.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

}); 
