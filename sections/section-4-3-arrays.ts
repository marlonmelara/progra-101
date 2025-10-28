let flowers: string[] = ['rosa', 'girasol', 'lirio', 'crisantemo'];

console.log('---Iterar un array con for---');

for (let index = 0; index < flowers.length; index++) {
  const flower = flowers[index];
  console.log(flower);
}

console.log('---Iterar un array con for..of---');

// Iterar un array
for (const flower of flowers) {
  console.log(flower);
}
