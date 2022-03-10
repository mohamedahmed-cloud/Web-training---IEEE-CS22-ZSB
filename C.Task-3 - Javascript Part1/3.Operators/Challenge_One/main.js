let a = 10;
let b = "20";
let c = 80;
console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
    [++a] [+] [+b++] [+] [+] [c++] [-] [+] [a++]

    [++a] 
        - Value:   11
        - Explain: pre increment
    [+]
        - Explain: Arithmetical  Operator
    [+]
        Explain: unary plus
    [b++]
        value: 20 => Number
        Explain : post increment
    [+]
         Explain: Arithmetical  Operator
    [+]
        Explain : Unary Plus

    [c++]
        Explain: post increment
        value:80

    [-]
        Explain : Arithmetical  Operator
    [+]
        Explain : Unary Plus
    [a++]
        value: 11
    

*/

/*
    [++a] [+] [-b ] [+] [+] [c++] [-] [-] [a++] [+] [+a]

    [++a]
        value: 13
        Explanation : pre increment
    [+]
        Explanation :Arithmetical  Operator
    [-b ]
        value: -21
        Explanation : unary negation
    [+]
        Explanation :Arithmetical  Operator
    [+]
        unary plus
    [c++]
        value: 81
        Explanation : post increment
    [-]
        Explanation :Arithmetical  Operator
    [-]
        Explanation : unary Negation
    [a++]
        value: -13
        Explanation : post increment
    [+]
        Explanation : Arithmetical  Operator
    [+a]
        value: 14
        Explanation : unary plus


 */
/*
Last One in the Same Sequence
*/
let d = "-100";
let e = "20";
let f = 30;
let g = true;
console.log(-d * e);
console.log(-d + ++e * ++g + ++f);
