// PROBLEM 1 - MULTIPLES OF 3 AND 5

let answer1 = 0;
for (var i = 1; i < 1000; i++) {
    if ((i % 3 == 0) || (i % 5 == 0)) {
        answer1 += i;
    }
};
console.log(answer1);

// --------------------------------------------------

// PROBLEM 2 - EVEN FIBONACCI NUMBERS

let answer2 = 0;
let hold;
let a = 1;
for (let b = 2; b <= 4000000; b) {
    if (b % 2 == 0) {
        answer2 += b;
    }
    hold = b
    b += a;
    a = hold;
}
console.log(answer2);

// --------------------------------------------------

// PROBLEM 3 - LARGEST PRIME FACTOR
