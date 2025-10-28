let employees: string[] = ['Fernando', 'Melissa', 'Eduardo'];
let salaries: number[] = [1500, 2400, 3200];

for (let index = 0; index < employees.length; index++) {
  const employee = employees[index];
  const salary = salaries[index];
  console.log(`${employee} tiene un salario de ${salary}`);
}
