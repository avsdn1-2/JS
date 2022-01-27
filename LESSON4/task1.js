/*
####Задача 1
Создать имплементацию функции `forEach`, логика работы такая же как и у родного метода.
Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
```javascript
const arr = [1,2,3];
forEach(arr, function(item, i, arr) {});
```
 */

const forEach = function(arr,cb){
    if (!Array.isArray(arr)){
        throw new Error('The 1st argument should be array!');
    }
    if (typeof cb !== 'function'){
        throw new Error('The 2nd argument should be function');
    }
    let transformed = [];
    for (let i=0;i<arr.length;i++){
        transformed.push(cb(arr[i]));
    }
    return transformed;
};

let arr = [2,4,6];
console.log(forEach(arr,el => el * el));






