/*
####Задача 2
Создать имплементацию функции `filter`, логика работы такая же как и у родного метода.
Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
```javascript
const arr = [1,2,3];
filter(arr, function(item, i, arr) {});
```
 */

const filter = function(arr,cb){
    if (!Array.isArray(arr)){
        throw new Error('The 1st argument should be array!');
    }
    if (typeof cb !== 'function'){
        throw new Error('The 2nd argument should be function');
    }
    let filtered = [];
    for (let i=0;i<arr.length;i++){
        if (cb(arr[i])){
            filtered.push(arr[i]);
        }
    }
    return filtered;
}

const arr = [1,2,3,-3,'c','f',-2];
let filtered = filter(arr,el => typeof el !== 'string');

console.log(filtered);