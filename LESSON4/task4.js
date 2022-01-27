/*
####Задача 4
Создать имплементацию функции `some`, логика работы такая же как и у родного метода.
Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
```javascript
const arr = [1,2,3];
some(arr, function(item, i, arr) {});
```
 */
const some = function(arr,cb){
    if (!Array.isArray(arr)){
        throw new Error('The 1st argument should be array!');
    }
    if (typeof cb !== 'function'){
        throw new Error('The 2nd argument should be function');
    }
    for (let i=0;i<arr.length;i++){
        if (cb(arr[i])){
            return true;
        }
    }
    return false;
}

const arr = [1,2,3,-1,-2,-3];
console.log(some(arr,el => el > 2));

