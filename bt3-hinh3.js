let n=5;
for(let i=1; i<=5; i++){
    for(j=1; j<i; j++){
        document.write("&nbsp&nbsp&nbsp");
    }
    for(j=i; j<=5; j++){
        document.write('*  ');
    }document.write('<br>');
}