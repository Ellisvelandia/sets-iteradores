const carrito = new Set()
carrito.add('Camisa');
carrito.add('Disco');
carrito.add("Paleta");
carrito.has("Camisa")

console.log(carrito.size)
console.log(carrito);

carrito.forEach(producto => {
  console.log(producto)
})

//del siguiente arreglo eliminar los duplicados
const numeros = [10,20,30,40,50,10,20];

const noDuplicado = new Set(numeros);
console.log(noDuplicado)