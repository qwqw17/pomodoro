// if(img === "null"){
    // document.querySelector(".img").remove();
// }

let per = parseInt((pos * 10000) / (pos - neg)) / 100;
document.querySelector(".npos").innerHTML = `${pos}`;
document.querySelector(".nval").innerHTML = `${neg}`;
document.querySelector(".per").innerHTML = `${per}`;

if (localStorage.getItem("img") === "null"){
    document.querySelector(".img").remove();
    document.querySelector(".itype").style.fontSize = "7vh";
    document.querySelector(".itype").style.color = "red";
    document.querySelector(".itype").style.textShadow = "2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff";
    document.querySelector(".itype").innerHTML = `Work  -  ${ctr%35}`;
    beep();
}

function play(e){
    e.remove();
    localStorage.setItem("img", "null")
    localStorage.setItem("ctr", "1")    
    ctr = 1;
    document.querySelector(".itype").style.fontSize = "7vh";
    document.querySelector(".itype").style.color = "red";
    document.querySelector(".itype").style.textShadow = "2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff";
    document.querySelector(".itype").innerHTML = `Work  -  ${ctr % 35}`;
    beep();
}

function reset(){
    localStorage.clear();
    pos = 4;
    neg = 0;
    ctr = -1;
    img = "play.jpg"
    window.location.reload();
}

function incrementPos(){
    pos += 1;
    let per = parseInt((pos * 10000) / (pos - neg)) / 100;
    document.querySelector(".npos").innerHTML = `${pos}`;
    document.querySelector(".per").innerHTML = `${per}`;
    localStorage.setItem("pos", `${pos}`)
}

function decrementPos() {
    pos -= 2;
    let per = parseInt((pos * 10000) / (pos - neg)) / 100;
    document.querySelector(".npos").innerHTML = `${pos}`;
    document.querySelector(".per").innerHTML = `${per}`;
    localStorage.setItem("pos", `${pos}`)
}

function incrementNeg() {
    neg += 4;
    let per = parseInt((pos * 10000) / (pos - neg)) / 100;
    document.querySelector(".nval").innerHTML = `${neg}`;
    document.querySelector(".per").innerHTML = `${per}`;
    localStorage.setItem("neg", `${neg}`)
}

function decrementNeg() {
    neg -= 2;
    let per = parseInt((pos * 10000) / (pos - neg)) / 100;
    document.querySelector(".nval").innerHTML = `${neg}`;
    document.querySelector(".per").innerHTML = `${per}`;
    localStorage.setItem("neg", `${neg}`)
}

let audio = new Audio("beep.mp3");
let audio2 = new Audio("beep3.mp3");
let audio3 = new Audio("beep4.mp3");

function beep(){
    if (ctr < 0) {

    }
    else if (ctr % 35) {
        setTimeout(() => {
            audio.play();
            ctr += 1;
            localStorage.setItem("ctr", ctr);
            if(ctr%140 === 0){
                audio2.play();
                document.querySelector(".itype").innerHTML = "Long Break";
            }
            else if(ctr%35 === 0){
                audio2.play();
                document.querySelector(".itype").innerHTML = "Short Break";
            }
            else{
                document.querySelector(".itype").innerHTML = `Work  -  ${ctr % 35}`;
            }
            beep();
        }, 45000)
    }
    else if (ctr % 140 === 0) {
        setTimeout(() => {
            audio2.play();
            ctr += 1;
            localStorage.setItem("ctr", ctr);
            document.querySelector(".itype").innerHTML = `Work  -  ${ctr % 35}`;
            beep();
        }, 900000);
    }
    else {
        setTimeout(() => {
            audio2.play();
            ctr += 1;
            localStorage.setItem("ctr", ctr);
            document.querySelector(".itype").innerHTML = `Work  -  ${ctr % 35}`;
            beep();
        }, 300000);
    }
}