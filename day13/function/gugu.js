//구구단 함수 정의
function gugudan(dan){
    for(var i = 1; i <= 9; i++){
        document.write(dan + " x " + i + "=" + (dan * i) + "<br>");
    }
}

gugudan(6);   //호출