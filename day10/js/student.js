  // 학생의 학년, 반, 이름 정보를 출력
  var naming = "추신수";     //name이라는 변수를 선언
  var grade = 2;  //선언과 동시에 초기화
  // var class; //예약어는 변수로 사용할 수 없다.
  var schoolClass = 3;  //카멜표기법

  document.write(naming + '<br>');
  document.write(grade + '<br>');
  document.write(schoolClass + '<br>');

  document.write("<p><span>" + naming + "</span>학생은" + grade + "학년" + schoolClass
                      + "반입니다.</p>");