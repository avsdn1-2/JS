/*
####Задача 9
Сделайте функцию `arrayFill`, которая будет заполнять массив заданными значениями. Первым параметром функция
принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве.
Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только число, строку, объект, массив
- Второй параметр обязателен и может принимать только число
```javascript
arrayFill('x',5); // [x,x,x,x,x]
```
 */

const arrayFill = function(el,number){
    if (typeof el !== 'number' && typeof el !== 'string' && typeof el !== 'object' && !Array.isArray(el)){
        throw new Error('The 1st parameter should be string,object or array!');
    }
    if (typeof number !== 'number'){
        throw new Error('The 2nd parameter should be number!');
    }
    let result = [];
    for (let i=1;i<=number;i++){
        result.push(el);
    }
    console.log(result);
}
arrayFill('x',5); // [x,x,x,x,x]
//arrayFill(['apple','pear'],5);