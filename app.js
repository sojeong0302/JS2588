const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin': __dirname+'/example.txt';
let input = fs.readFileSync(filePath).toString().split("\n");

input1=input[0].split(" ").map((item)=>+item);
input2=input[1].split(" ").map((item)=>+item);

solution(input1[0,0],input2[1,0]);

A=input1[0,0]
B=input2[1,0]

function solution(A,B){
    console.log(A*(B%10))
    console.log(A*((Math.floor((B%100)/10))))
    console.log(A*(Math.floor(B/100)))
    console.log(A*B)
}

