//큰 사진 선택
let bigPic = document.querySelector("#cup");

//작은 사진 선택
let smallPics = document.querySelectorAll(".small");

//onclick 이벤트
for(let i = 0; i < smallPics; i++){
    //smallPics[i].onclick = showBig; //showBig() 호출
    smallPics[i].addEventListener("click", showBig);
}

function showBig(){
    let newPic = this.src; //이벤트가 일어난 대상
    bigPic.setAttribute("src", newPic);
    //setAttribute("속성", 속성값)
}