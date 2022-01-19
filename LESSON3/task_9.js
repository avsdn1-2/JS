function solution(a,b)
{
    let a_length = a.length;
    let b_length = b.length;
    let max_length = (a_length >= b_length)? a_length: b_length;

    let counter = max_length - 1;
    let result = [];
    let ad = 0;
    let i = 1;
    let res = 0;
    while (counter >= 0){
        let value_a = (a[a_length - i] === undefined)? 0: a[a_length - i];
        let value_b = (b[b_length - i] === undefined)? 0: b[b_length - i];
        if (value_a + value_b + ad < 10 ){
            res = value_a + value_b + ad;
            ad = 0;
        } else {
            res = value_a + value_b + ad - 10;
            ad = 1;
        }
        result.unshift(res);
        counter --;
        i ++;
    }
    if (ad === 1){
        result.unshift(ad);
    }
    return result;
}


console.log(solution([2,4,3],[5,6,4])); //[8,0,7]
//console.log(solution([1,4,5],[4,4,2])); //[5,8,7]
//console.log(solution([1,1,1],[])); //[1,1,1]
//console.log(solution([],[9,9,9])); //[9,9,9]
//console.log(solution([9,9,9],[9,9,9])); //[1,9,9,8]
//console.log(solution([],[])); //[]
//console.log(solution([],[0])); //[0]
//console.log(solution([0],[0])); //[0]
//console.log(solution([1,1,1,1,1,1,1,1],[1,0])); //[1,1,1,1,1,1,2,1]
//console.log(solution([9,9,9,9,9],[1])); //[1,0,0,0,0,0]
