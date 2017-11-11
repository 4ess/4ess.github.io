var score = 0;
var score2 = 0;
var score3 = 0;
var score4 = 1000;
 /// var externa/globala
// se activeaza cand click
function shoot(){
  //cauta imaginea dupa #id - selector
var b1 = document.querySelector('#bird1');
    b1.style = "transform: rotate(360deg) translateY(200px); width:1px;";
    score+=10;
    alert(score);
}
function shoot2(){
var b2 = document.querySelector('#bird2');
    b2.style = "transform: rotate(360deg) translateY(200px); width:1px;";
    score2+=20;
    alert(score2);
}
function shoot3(){
var b3 = document.querySelector('#bird3');
    b3.style = "transform: rotate(360deg) translateY(200px); width:1px;";
    score3+=40;
    alert(score3);
}
function shoot4(){
var b4 = document.querySelector('#boss');
    b4.style = "transform:translateY(400px); width:200px;";
    alert(score4);
}
