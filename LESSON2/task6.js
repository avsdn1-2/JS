/*
####Задача 6
Написать код который посчитает сумму всех элементов в масиве.
```js
var arr = [1,2,3,4];
```
**Внимание**!
- Не разрашается использовать специальные методы массивов.
 */


//решение
var arr = [1,2,3,4];
let sum = 0;
for (let i of arr){
    sum += i;
}
console.log(sum);
