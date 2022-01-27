/*
####Задача 5
Создать имплементацию функции `reduce`, логика работы такая же как и у родного метода.
Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
- Третий параметр обязателен и может принимать только строку или число
```javascript
const arr = [1,2,3];
const acc = 0;
reduce(arr, function(acc, item, i, arr) {}, acc);
```
 */

function reduce(arr,cb,acc){
    if (!Array.isArray(arr)){
        throw new Error('The 1st argument should be array!');
    }
    if (typeof cb !== 'function'){
        throw new Error('The 2nd argument should be function');
    }
    if (typeof acc !== 'number' && typeof acc !== 'string'){
        throw new Error('The 3rd argument should be number or string');
    }

    let res = acc;
    for (let i=0;i<arr.length;i++){
        res += cb(arr[i]);
    }
    return res;
}
//var arr = [1,2,3];
var arr = ['a','b','c'];
console.log(reduce(arr,el => el + ' ',''));

