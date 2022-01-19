/*
####Задача 3
Сделайте функцию `f`, которая отнимает от первого числа второе и делит на третье. Данная функция должна обьязательно содержать проверку входных параметров, потому что принимать она может только числа.

```js
f(9,3,2); // 3
f('s',9,3) // Error: all parameters type should be a Number
```
 */

let f = function(a,b,c){
    for (let i of arguments){
        if (typeof i !== 'number'){
            throw new Error ('all parameters type should be a Number');
        }
    }
    return (a - b) / c;
}

console.log(f(12,2,4));
console.log(f(12,2,'f'));