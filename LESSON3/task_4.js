/*
####Задача 4
Сделайте функцию `f`, которая принимает параметром число от 1 до 7, а затем возвращает день недели на русском языке. Данная функция должна обьязательно содержать проверку входного параметра, потому что принимать она может только числа от 1 до 7.
```js
f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number
```
 */

function f(n){
    if (!(Number.isInteger(n) && n >= 1 && n <= 7)){
        throw new Error ('Parameter should be integer number from 1 to 7');
    }
    switch (n){
        case 1:
            return 'Понедельник';
            break;
        case 2:
            return 'Вторник';
            break;
        case 3:
            return 'Среда';
            break;
        case 4:
            return 'Четверг';
            break;
        case 5:
            return 'Пятница';
            break;
        case 6:
            return 'Суббота';
            break;
        case 7:
            return 'Воскресенье';
            break;
    }
}

console.log(f(5));
console.log(f('j'));
