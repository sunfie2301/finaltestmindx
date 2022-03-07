let a = prompt('Enter a: ');
let b = prompt('Enter  b: ');
let primenumber = [];
for (let index = parseInt(a); index <= parseInt(b); index++) {
    let d = 0;
    for (let i = 1; i <= index ; i++) {
        if (index % i == 0) {
            d++
        }
    }
    if (d == 2) {
        primenumber.push(index);
    }
}
alert(primenumber);