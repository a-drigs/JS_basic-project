function Table7() {
    let num = 7;
    let a = '';
    let b = 1;
    while (b <= 10) {
        a += `${num} x ${b} = ${num * b} \n`;
        b++;
    }
    return a;
}
alert(Table7());