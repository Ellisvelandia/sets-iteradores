const cliente = new Map()

cliente.set("nombre", "ellis");
cliente.set("tipo", "premium")
cliente.set("saldo", 300)


console.log(cliente)
console.log(cliente.get("nombre"))
console.log(cliente.has("nombre"));
console.log(cliente.delete("nombre"))


cliente.forEach((item) => {
  console.log(item)
})

