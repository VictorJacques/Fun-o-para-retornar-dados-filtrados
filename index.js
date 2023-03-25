console.log("Oi");

let array = [
  { nome: "luis", idade: 26 },

  { nome: "norma", idade: 16 },

  { nome: "daiana", idade: 26 },

  { nome: "jorge", idade: 16 },

  { nome: "kauan", idade: 16 },

  { nome: "charles", idade: 26 },

  { nome: "marco", idade: 16 },

  { nome: "bruno", idade: 16 },
];

console.log(array.filter((object) => object.idade < 18));
console.log(array.filter((object) => object.idade >= 18));
/* for (i=0;i<array.length;i++){

} */
