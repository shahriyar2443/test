// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);

let test = [
    'student one',
    'student two',
    'student thtee',
    'student four',
    'student five',
    'student six',
    'student seven',
    'student eight',
    'student nine',
    'student ten',
]


// for (let i = i; i <= 20; i++){
   console.log(test);
//}


// console.log(test[0]);
// console.log(test[1]);
// console.log(test[2]);
// console.log(test[3]);

    
for(let j = 0; j < test.length; j++) {
    console.log( test[j] );
}


let newArr = test.map(function(item) { return 'Name: ' + item;

});