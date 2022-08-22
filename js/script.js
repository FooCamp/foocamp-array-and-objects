const consoleHeaderStyle =
  "color: #f9008e; background: black; font-size: 20px; padding: 15px; border-radius: 10px; font-weight: bold;";
console.log("%cArrays y Objetos en JavaScript", consoleHeaderStyle);

const numericArray = [3, 56, 8, 1, 70, 65, 2, 40, 9, 8, 25, 3, 5];
const namesArray = [
  "andres",
  "camilo",
  "carolina",
  "felipe",
  "anna",
  "ramiro",
  "juan",
  "pedro",
  "luis",
  "salvador",
  "david",
  "anselmo",
  "florinda",
];

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

const concatArrays = () => {
  // array1.concat(array2, array3, ..., arrayX)
  const arr1 = ["Cecilie", "Lone"];
  const arr2 = ["Emil", "Tobias", "Linus"];
  const arr3 = ["Robin"];
  console.log("Array 1:", arr1);
  console.log("Array 2:", arr2);
  console.log("Array 3:", arr3);
  const nombres = arr1.concat(arr2, arr3);
  console.log("arr1.concat(arr2, arr3)", nombres);
};

const everyArray = () => {
  function checkAge(age, value) {
    return age > value;
  }
  // array.every(function(currentValue, index, arr), thisValue)
  const ages = [32, 33, 16, 40];
  console.log(
    "todos son > 18",
    ages.every((age) => checkAge(age, 18))
  );
  console.log(
    "todos son > 0",
    ages.every((age) => checkAge(age, 0))
  );
};

const sortArray = () => {
  const fruits = ["Banana", 2, "Orange", 1, "Apple", 3, "Mango"];
  console.log("sort", fruits.sort());
  console.log("reverse", fruits.reverse());
};

const pushArray = () => {
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  console.log("fruits", fruits);
  fruits.push("Kiwi", "Lemon");
  console.log('fruits.push("Kiwi", "Lemon")', fruits);
};

const spliceArray = () => {
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  console.log("fruits", fruits);
  fruits.splice(2, 0, "Lemon", "Kiwi");
  console.log('fruits.splice(2, 0, "Lemon", "Kiwi")', fruits);

  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.splice(2, 2);
  console.log("fruits.splice(2, 2)", fruits);

  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.splice(2, 1, "Lemon", "Kiwi");
  console.log('fruits.splice(2, 1, "Lemon", "Kiwi")', fruits);
};

const sliceArray = () => {
  const fruits = [
    "Banana",
    "Orange",
    "Lemon",
    "Apple",
    "Mango",
    "Papaya",
    "Kiwi",
  ];
  console.log("fruits", fruits);
  const positiveSplice = fruits.slice(1, 4);
  console.log("fruits.slice(1, 4)", positiveSplice);
  const negativeSplice = fruits.slice(-3, -1);
  console.log("fruits.slice(-3, -1)", negativeSplice);
};

const mapArray = () => {
  // recorrer un array con un ciclo
  console.log("ciclo FOR");
  for (let i = 0; i < namesArray.length; i++) {
    console.log("index:", i, "value:", namesArray[i]);
  }

  console.log("funcion map()");
  // funcion .map()
  namesArray.map((name, index) => {
    console.log("index:", index, "value:", name);
  });

  const numbers = [1, 5, 10, 15];
  const doubles = numbers.map(function (x) {
    return x * 2;
  });
  console.log("numbers", numbers);
  console.log("doubles", doubles);
};

const createObject = () => {
  const myCar = new Object();
  myCar.make = "Ford";
  myCar.model = "Mustang";
  myCar.year = 1969;

  console.log(myCar);
  // un objeto puede contener otros objetos dentro del mismo
  let pikachu = {
    nombre: "billy",
    edad: 10,
    comidaFavorita: "sancocho",
    tipo: "electrico",
    movimientos: {
      mov1: { nombreMovimiento: "impact trueno", potencia: 80 },
      mov2: { nombreMovimiento: "cola de hierro", potencia: 100 },
      mov3: { nombreMovimiento: "bola trueno", potencia: 60 },
      mov4: { nombreMovimiento: "ataque rapido", potencia: 20 },
    },
  };

  pikachu.edad = 15;
  console.log(pikachu);
};

const accessObject = () => {
  const gato = {
    nombre: "kiki",
    raza: "carey",
    edad: 5,
  };
  // puedo llamar el campo desde una variable tambien
  const key = "edad";
  console.log(
    `nombre: ${gato.nombre}`,
    "raza:",
    gato["raza"],
    "edad:",
    gato[key]
  );

  let pikachu = {
    nombre: "billy",
    edad: 10,
    comidaFavorita: "sancocho",
    tipo: "electrico",
    movimientos: {
      mov1: { nombreMovimiento: "impact trueno", potencia: 80 },
      mov2: { nombreMovimiento: "cola de hierro", potencia: 100 },
      mov3: { nombreMovimiento: "bola trueno", potencia: 60 },
      mov4: { nombreMovimiento: "ataque rapido", potencia: 20 },
    },
  };

  // misma manera de obtener los campos de un objeto
  console.log(pikachu.movimientos.mov1.nombreMovimiento);
  console.log(pikachu["movimientos"]["mov1"]["nombreMovimiento"]);
  console.log(pikachu["movimientos"].mov1["nombreMovimiento"]);
};

const objectMethod = () => {
  const persona = {
    nombre: "Andres",
    age: 30,
    // usar una funcion como valor
    saludo: function () {
      console.log("Hola como estas");
    },
  };

  persona.saludo(); // hola como estas
};

const filterObject = () => {
  const users = {
    John: { username: "johncam112", age: 19 },
    Daniel: { username: "Dandandel1", age: 21 },
    Ruth: { username: "rutie01", age: 24 },
    Joe: { username: "Joemathuel", age: 28 },
  };

  console.log("usuarios:", users);
  const selectedUsers = ["Ruth", "Daniel", "Andres"];
  console.log("usuarios a buscar:", selectedUsers);

  // extraer las 'keys' de un objeto (revisar el constructor del objeto)
  console.log("llaves de usuarios:", Object.keys(users));

  console.log(
    "usuarios que coinciden con las llaves",
    Object.keys(users).filter((key) => selectedUsers.includes(key))
  );
  console.log(
    "extraer registros de el objeto users",
    Object.keys(users)
      .filter((key) => selectedUsers.includes(key))
      .reduce((obj, key) => {
        obj[key] = users[key];
        return obj;
      }, {})
  );

  const filteredUsers = Object.keys(users)
    .filter((key) => selectedUsers.includes(key))
    .reduce((obj, key) => {
      obj[key] = users[key];
      return obj;
    }, {});
};
