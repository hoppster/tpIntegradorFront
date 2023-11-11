let precio = parseInt(document.getElementById("precio").innerText);
let botonBorrar = document.getElementById("borrar");
let botonCalcular = document.getElementById("calcular");

function calcular(precio, cantidad, categoria) {
  let total = precio * cantidad;
  let descuento = (total * categoria) / 100;
  return total - descuento;
}

botonCalcular.addEventListener("click", () => {
  let cantidad = parseInt(document.getElementById("cantidad").value);
  let categoria = parseInt(document.getElementById("categoria").value);
  document.getElementById("precioPagar").innerText = calcular(
    precio,
    cantidad,
    categoria
  );
});

botonBorrar.addEventListener("click", () => {
  document.getElementById("cantidad").value = 0;
  document.getElementById("precioPagar").innerText = 0;
});