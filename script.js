  var paragraph = document.querySelector('#result');
  var r = document.querySelector("#im1");
  var p = document.querySelector("#im2");
  var s = document.querySelector("#im3");
  var shot="null";
  var computerChoice=0;
  r.addEventListener('click', rockk);
  p.addEventListener('click', papel);
  s.addEventListener('click', scis);

function rockk(){
    shot="Rock";
    updateImage();
}
function papel(){
    shot="Paper";
    updateImage();
}
function scis(){
    shot="Scissors";
    updateImage();
}

function updateImage() {
    var computerChoice = Math.random();
        if (computerChoice < 0.34) {
            computerChoice = "Rock";
        }
        else if(computerChoice <= 0.67) {
            computerChoice = "Paper";
        }
        else {
            computerChoice = "Scissors";
        }
    if (shot === computerChoice){
            paragraph.textContent = 'あいこでしょ!TIE';
        }
    else if (shot === "Rock"){
        if (computerChoice === "Scissors"){
            paragraph.textContent = 'あなたが勝ちました!WIN';
        }
        else{
            paragraph.textContent = 'あなたが負けた!LOSE';
        }
    } 
    else if (shot === "Paper"){
        if (computerChoice === "Rock"){
            paragraph.textContent = 'あなたが勝ちました!WIN';
        }
        else{
            paragraph.textContent = 'あなたが負けた!LOSE';
        }
    } 
    else if (shot === "Scissors"){
        if (computerChoice === "Paper"){
            paragraph.textContent = 'あなたが勝ちました!WIN';
        }
        else{
            paragraph.textContent = 'あなたが負けた!LOSE';
        }
    }
    else{
        paragraph.textContent = 'ERR';
    }
    } 
