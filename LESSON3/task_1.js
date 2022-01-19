/*
####Задача 1
Напишите функцию `f`, которая возвращает куб числа. Число передается параметром. Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число.
```js
f(2); // 8
f('Content'); // Error: parameter type is not a Number
```
 */

function kub(n){
    if (typeof n === "number"){
        return Math.pow(n,3); // или 5 ** 3
    } else {
        throw new Error ('Аргумент должен быть числом!');
    }
}
console.log(kub(5));
console.log(kub('b'));
