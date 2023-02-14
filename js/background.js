const images = ["2.jpg", "3.jpg"];
//새로고침하면 이미지 랜덤
const todaysImages = images[Math.floor(Math.random() * images.length)];
//랜덤으로 이미지을 하나씩 뽑아서 화면에 출력해준다.
//math.random * quotes.length는 어레이 길이 안에서 랜덤으로 [i]번째 번호를 뽑아준다.(소수점으로 반환된다. ex:0.548646545 >> 0번째 image "1.jpg")
//images 어레이에서 math.floor은 랜덤으로 뽑은 번호의 소수점을 모두 버려준다. (즉, 몇번째 이미지를 뽑아준다.)

//console.log(todaysImages);

const bgImage = document.createElement("img");   //img태그를 html에 createElement로 만들어준다.
bgImage.src = `img/${todaysImages}`;               //img파일 안에 있는 몇번째 이미지를 scr에 넣어줌
document.body.appendChild(bgImage);              //body 맨 아래에 추가해주기
//document.body.prepend(bgImage);                //body 맨 위에 추가하기
