/*
####Задача 7
Сделайте функцию `getDivisors`, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой). Данная функция должна обьязательно содержать проверку входного параметра, потому что принимать она может только число больше 0.
```js
getDivisors(12); // [1, 2, 3, 4, 6, 12]
getDivisors('Content'); // Error: parameter type is not a Number
getDivisors(0); // Error: parameter can't be a 0
```
 */

function getDivisors(n){
    if (!Number.isInteger(n)){
        throw new Error ('parameter type is not an integer Number');
    } else if (n === 0){
        throw new Error ('parameter can\'t be a 0');
    }
    let arr_divisors = [];
    for (let i=1;i<=n;i++){
        if (n % i == 0){
            arr_divisors.push(i);
        }
    }
    return arr_divisors;
}

console.log(getDivisors(18));