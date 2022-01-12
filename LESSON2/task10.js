/*
#### Задача 10
Отсортировать массив по возрастанию.

```javascript
var arr = [6,5,4,3,2,1];
// [1,2,3,4,5,6]
```
**Внимание**!
- Не разрашается использовать специальные методы массивов.
 */

//решение
var arr = [6,5,4,3,2,1];
do {
    var flag = false;
    for (let i = 0;i <= arr.length - 2;i++){
        if (arr[i] > arr[i+1]){
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
            flag = true;
        }
    }
} while (flag == true);
console.log(arr);