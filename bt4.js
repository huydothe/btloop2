let a= prompt('Chiều dài');
let b= prompt('Chiều rộng');
for (i=1; i<=b; i++){
    for(j=1; j<=a; j++) {
        if (j == 1 || j == a || i == 1 || i == b) {
            document.write('*')
        } else {
            document.write('a');
        }
    }document.write('<br>');
}