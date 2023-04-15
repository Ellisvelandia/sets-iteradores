const sym = Symbol();
const sym2 = Symbol();

if (sym === sym2) {
  console.log("Son iguales");
} else {
  console.log("Son diferentes");
}

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

//agregar nombre y apellido
persona[nombre] = "ellis";
persona[apellido] = "velandia";
persona.tipoDeCliente = "Premium";
console.log(persona);
console.log(persona[nombre]);

// /las propiedas que se utilizan en un symbol no es iterable
for (let i in persona) {
  console.log(i);
}



//definir una descripcion del symbol
const nombreCliente = Symbol('Nombre del cliente');
const cliente = {}

cliente[nombreCliente] = "crisanto"

console.log(cliente)