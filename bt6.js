let heartshape;
for (i=1; i<7; i++){
    for(j=1; j<=7; j++){
        if(i==1 && (j==1 || j==4 || j==7)
            || i==4 && (j==1 || j==7)
            || i==5 && (j==1 || j==2 || j==6 || j==7)
            || i==6 && (j==1 || j==2 || j==3 || j==5 || j==6 || j==7)) {
            document.write('&nbsp&nbsp&nbsp');
        }else {
            document.write('*  ');
        }
    }document.write('<br>');
}