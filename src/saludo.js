function sayHi() {
  console.log("hola");
  document.getElementById('app').innerText = "El texto ha sido incrustado desde JS, y estamos monitoreando los cambios en tiempo real";
}

export { sayHi };
