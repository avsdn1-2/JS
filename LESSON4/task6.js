/*
####Задача 6
Создать имплементацию функции `reduceRight`, логика работы такая же как и у родного метода.
Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
- Третий параметр обязателен и может принимать только строку или число
```javascript
const arr = [1,2,3];
const acc = 0;
reduceRight(arr, function(acc, item, i, arr) {}, acc);
```
 */

function reduceRight(arr,cb,acc){
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
    for (let i=arr.length-1;i>=0;i--){
        res += cb(arr[i]);
    }
    return res;
}
//var arr = [1,2,3];
var arr = ['a','b','c'];
//console.log(reduceRight(arr,el => el + ' ',''));
console.log(reduceRight(arr,el => el + '*',''));

