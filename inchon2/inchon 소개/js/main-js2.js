//배경 이미지 show
let picture = ["./images/ani1.jpg", "./images/ani2.jpg", "./images/ani3.jpg"];
let idx = 0;

showPicture();

function showPicture(){
    let img = document.querySelector("#pic")
    img.src = picture[idx];
    idx += 1;  //idx++
    if(idx == picture.length)
        idx = 0

    setTimeout(showPicture, 2000); //2초 간격으로 콜백함수(자신을 호출)
}

//디지털 시계
setInterval(myWatch, 1000);

function myWatch(){
    const date = new Date();
    let now = date.toLocaleTimeString()
    document.getElementById("demo").innerHTML = now;
}