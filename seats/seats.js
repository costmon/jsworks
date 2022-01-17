//자리 배치도
let customer = prompt("입장객 수는 몇 명인가요? ");
let col = prompt("한 줄에 몇명 앉나요?"); //열의 수
let row;  //행의 수

if(customer % col == 0){
    row = parseInt(customer / col);  //4.0 -> 4로 변환
}
else{
    row = parseInt(customer / col) + 1;
}

document.write('<table>');
for(let i = 0; i <= row; i++){ 
    document.write('<tr>')  
    for(let j = 1; j <= col; j++){ 
        let num = i * col + j;  //좌석 번호
        if(num > customer)  //true일때
            break;    //빠져 나옴
        document.write("<td>좌석" + num + " </td>");
    }
    document.write('</tr>');  
}
document.write('</table>');


