/*   

2. Дан массив из объектов: 
- Вывести в консоль все имена
- Вывести в консоль имена всех совершеннолетних людей (от 18 лет)
- Вывести в консоль имена всех пенсионеров (старше 65 лет)
- Создайте функцию `addPeople()`, которая принимает два параметра - имя и возраст - 
и добавляет в массив `people` объект с именем и возрастом, которые были переданы в качестве параметров. Например:

*/

let people = [{name: 'Bradly', age: 74}, {name: 'Juliya', age: 20}, 
{name: 'Walter', age: 35}, {name: 'Kristen', age: 12}, {name: 'Sam', age: 2}];
addPeople('abdullah', 28)
for(let i = 0; i < people.length; i++) {
//   Вывести в консоль все имена
   console.log(people[i].name)
   // Вывести в консоль имена всех совершеннолетних людей (от 18 лет)
if(people[i].age > 18) {
   console.log(people[i].name)
}
//Вывести в консоль имена всех пенсионеров (старше 65 лет)
if(people[i].age > 65) {
   console.log(people[i].name)
}
}


function addPeople(name,age) {
   
people.push({name:name, age:age})
   return people
}
console.log(addPeople('abdullah', 28))


