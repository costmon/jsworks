//상세 설명 보기
function showText(){
    let text = document.getElementById('detail');  //text 선택
    text.style.display = "block";   //텍스트 보이기

    let btn = document.getElementById('show');  //보기 버튼 선택
    btn.style.display = 'none';  //버튼 숨기기
}

function hideText(){
    let text = document.getElementById('detail');  
    text.style.display = "none";  //텍스트 숨기기

    let btn = document.getElementById('show');
    btn.style.display = 'block';  //버튼 보이기

}