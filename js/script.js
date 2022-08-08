const consoleHeaderStyle =
  "color: #f9008e; background: black; font-size: 20px; padding: 15px; border-radius: 10px; font-weight: bold;";
console.log("%cArrays y Objetos en JavaScript", consoleHeaderStyle);

const numericArray = [3, 56, 8, 1, 70, 65, 2, 40, 9, 8, 25, 3, 5];

const createArray = () => {
  // usar let cuando se va a modificar un array posteriormente
  let emptyArray = ["primer valor"];
  emptyArray[1] = "2 valor";
  emptyArray[2] = 3 + " valor";
  emptyArray[5] = "cuarto valor"; // si me salto indices se crean espacios vacios en el array
  console.log("output:", emptyArray);
  // output :
  // ['primer valor', '2 valor', '3 valor', empty × 2, 'cuarto valor']

  let cars = ["Saab", "Volvo", "BMW"];
  console.log(cars);
  cars = ["Toyota", "Volvo", "Audi"]; // GOOD
  console.log(cars);
};

const createFilledArray = () => {
  // usar const si NO se va a modificar el array posteriormente
  const filledArray = [
    "primer valor",
    "2 valor",
    3 + " valor", // al agregar una ',' y no colocar valores se crea un espacio vacio en el array
    ,
    ,
    "cuarto valor",
  ];
  console.log("output: ", filledArray);
  // ['primer valor', '2 valor', '3 valor', empty × 2, 'cuarto valor']

  const cars = ["Saab", "Volvo", "BMW"];
  console.log(cars);
  cars = ["Toyota", "Volvo", "Audi"]; // ERROR
  console.log(cars);
};

const createArrayWithFunction = () => {
  // la declaracion de new Array no permite crear campos vacios ya que crea un array nuevo a partir de unos valores dados y en orden
  const newArray = new Array(
    "primer valor",
    "2 valor",
    3 + " valor",
    "cuarto valor"
  );
  console.log(newArray);

  // ADVERTENCIA -> el metodo new Array puede generar errores inesperados
  const newArray2 = new Array(20);
  console.log("array con 20 espacios vacios", newArray2);
};

const arrayLength = () => {
  console.log("numeric array:", numericArray);
  console.log("numeric array length:", numericArray.length);
};

const arrayAccess = () => {
  console.log("numeric array:", numericArray);
  // accede al registro del index = 1 es decir el segundo registro
  console.log("index = 0:", numericArray[0]);
  // accede al registro del index = 1 es decir el segundo registro
  console.log("index = 1:", numericArray[1]);
  // accede al ultimo registro, como el primer indice es 0 por logica
  // el ultimo registro es igual a la longitud del array - 1
  console.log("index = last:", numericArray[numericArray.length - 1]);
};

const knowIfIsArray = () => {
  console.log("numeric array:", numericArray);
  // typeof reconoce los arrays como objetos
  console.log("typeof numericArray", typeof numericArray);
  // Array.isArray es un metodo de ECMAScript que reconoce si algo es un array
  console.log("Array.isArray(numericArray)", Array.isArray(numericArray));
  console.log('Array.isArray("soy un array?")', Array.isArray("soy un array?"));
  // instandeof verifica si un objeto en su cadena de prototipos contiene la propiedad prototype de un constructor dado
  console.log("numericArray instanceof Array", numericArray instanceof Array);
};
