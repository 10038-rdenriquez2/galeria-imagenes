let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let box = document.querySelector(".box");

let dagress = 0;

prev.addEventListener('click', function(){
	dagress += 45;
	box.style = `transform: perspective(1000px) rotateY(${dagress}deg)`;
})

next.addEventListener('click', function(){
	dagress -= 45;
	box.style = `transform: perspective(1000px) rotateY(${dagress}deg)`;
})

function abrirModal(rutaImagen) {
  document.getElementById('modalImage').src = rutaImagen;
  $('#imagenModal').modal('show');
}

$(document).on('click', function (e) {
  if ($(e.target).is('.modal')) {
    $('#imagenModal').modal('hide');
  }
});

