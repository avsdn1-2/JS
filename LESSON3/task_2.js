/*
####Задача 2
Напишите функцию `f` которая возвращает сумму всех параметров. Количество параметров может быть любым. Данная функция должна обязательно содержать проверку входных параметров, потому что принимать она может только числа.

```js
f(1,2,3); // 6
f(1,1,1,1,1,1,1,1); // 8
f(1,2,'s',4); // Error: all parameters type should be a Number
```
 */

function sum_par()
{
    for (let i of arguments){
        if (typeof i !== 'number'){
            throw new Error ('all parameters type should be a Number');
        }
    }
    let sum = 0;
    for (let i of arguments){
        sum += i;
    }
    return sum;
}

console.log(sum_par(1,2,3));
console.log(sum_par(1,2,3,10,'a'));