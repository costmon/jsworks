// 놀이공원 입장료 계산
var age = 30;    //나이
var charge = 0;  //입장료

if(age < 8){
    document.write("취학전 아동입니다.<br>");
    charge = 1000; //입장료는 1000원을 저장   
}
else if(age >= 8 && age < 14){
    document.write("초등학생입니다.<br>");
    charge = 2000; //입장료는 2000원을 저장
}
else if(age >= 14 && age < 20){
    document.write("중,고등학생입니다.<br>");
    charge = 2500; //입장료는 2500원을 저장
}
else{
    document.write("일반인입니다.<br>");
    charge = 3000; //입장료는 3000원을 저장
}

document.write("입장료는 <span>" + charge + "원</span> 입니다.");