let n=prompt('Enter a number');
for(let i=1; i<=n; i++){
    for(j=1; j<=n; j++){
        if(j<=n-i){
            document.write('a');
        }else {
            document.write('*')
        }
    }document.write('<br>');
}