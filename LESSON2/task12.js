/*
#### Задача 12
Дан массив с числами: `[1,2,3,-5,-2,1,-4]`
Найдите сумму положительных элементов массива. В результате вы должны получить число `7`

**Внимание**!
- Не разрашается использовать специальные методы массивов.
 */

//решение
var arr = [1,2,3,-5,-2,1,-4];
let sum = 0;
for (let i of arr){
    if (i > 0){
        sum += i;
    }
}
console.log(sum);