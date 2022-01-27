/*
####Задача 3
Создать имплементацию функции `every`, логика работы такая же как и у родного метода.
Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
```javascript
const arr = [1,2,3];
every(arr, function(item, i, arr) {});
```
 */

const every = function(arr,cb){
    if (!Array.isArray(arr)){
        throw new Error('The 1st argument should be array!');
    }
    if (typeof cb !== 'function'){
        throw new Error('The 2nd argument should be function');
    }

    for (let i=0;i<arr.length;i++){
        if (!cb(arr[i])){
            return false;
        }
    }
    return true;
}

const arr = [1,2,3,-1,-2,-3];
console.log(every(arr,el => el > -4));