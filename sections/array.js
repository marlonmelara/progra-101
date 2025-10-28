let fruits = ["banana", "mango", "frutilla", "coco"];
console.log(fruits);

let fruit1 = "banana";
let fruit2 = "mango";

let cart = [];

cart.push("banana");
cart.push("mango");
cart.push("frutilla", "coco", "cerezas");
cart.shift();
cart.pop();
cart.unshift("cerezas");
cart.push("tomate");
console.log(cart.length);

console.log(cart);

for (i = 0; i < cart.length; i++) {
  console.log(cart[i]);
}
