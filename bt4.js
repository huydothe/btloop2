let a;
let b;
for (i=1; i<=8; i++){
    for(j=1; j<=12; j++) {
        if (j == 1 || j == 12 || i == 1 || i == 8) {
            document.write('*')
        } else {
            document.write('&nbsp&nbsp');
        }
    }document.write('<br>');
}