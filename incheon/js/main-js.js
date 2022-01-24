//이미지 show
let picture = ["images/bg11.jpg", "images/bg22.jpg", "images/bg55.jpg"]
let msg_idx = 0;    //배열의 위치값을 맨 처음 값 설정

showPicture();  //호출


function showPicture(){
    let pic = document.getElementById("cup")
    pic.src = picture[msg_idx];
    msg_idx++;   //msg_idx += 1
    //다시 0번 인덱스로 설정
    console.log(picture.length);
    if(msg_idx === picture.length){   //배열의 크기와 같으면
        msg_idx = 0;
    }

    setTimeout(showPicture, 2000);  //콜백함수(함수의 매개변수로 함수를 설정)
}

//디지털 시계

setInterval(function(){
    const now = new Date();
    let watch = now.toLocaleTimeString();
    document.querySelector("#display").innerHTML = watch;
}, 1000);
