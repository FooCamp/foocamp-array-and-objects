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
};

const arrayLength = () => {
  console.log("numeric array:", numericArray);
  console.log("numeric array length:", numericArray.length);
};
