/*
####Задача 10
Создать имплементацию функции `reverse`, которая принимает массив в качестве параметра, а возвращает массив
только в обратном порядке. Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Генерировать ошибку если был передан пустой массив
```javascript
const arr = [3,2,1];
reverse(arr); // [1,2,3]
```
 */

const reverse = function(arr){
    if (!Array.isArray(arr) || arr.length == 0){
        throw new Error('The parameter should be not empty array!');
    }
    let reversed = [];
    for (let i=arr.length-1;i>=0;i--){
        reversed.push(arr[i]);
    }
    console.log(reversed);
}

const arr = [3,2,1];
reverse(arr); // [1,2,3]