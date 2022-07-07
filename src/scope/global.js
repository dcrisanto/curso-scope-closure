// variables
 var a; // declarando la variable a
 var b = 'b'; // declarando y asignamos 
 b = 'bb'; // reasignación
 var a = 'aa'; // redeclaración

 // Global Scope
 var fruit = 'apple'; // global
 console.log(fruit);

 function bestFruit () {
     console.log(fruit);
 }

 bestFruit(); // ejecutando la función

 function countries() {
     country = 'Perú'; // global, al asignarla sin declararla
     console.log(country);
 }

 countries();
 console.log(country);
