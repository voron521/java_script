'use strict'

// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
let i = 1;

while( i <= 100 ) {
    let count = 0;
    let j = 1;
    while( j < i ){
        if ( i % j == 0 ) {
            count++;
        }
        j++;
    } 
    if (count == 1) {
        console.log(i);

    }
    i++;
 }

