var lik = document.querySelector("#like");
var spn = document.querySelector(".material-icons-outlined");
var ech5 = document.querySelector("h5");
var main = document.querySelector("body");
var crsr = document.querySelector("#crsrs");
function animateBtn(){
main.addEventListener("mousemove", function(dets){
	crsr.style.top = dets.y + 5 + "px";
  crsr.style.left = dets.x + 5 + "px";
})
main.addEventListener("mousedown", function(){
	crsr.style.width = "50px";
  crsr.style.height = "50px";
})

main.addEventListener("mouseup", function(){
	crsr.style.width = "30px";
  crsr.style.height = "30px";
})
var flag = 0;
lik.addEventListener("click", function() {
  if (flag == 0) {
    spn.style.visibility = "visible";
    spn.style.animation = "hart 1s ease-in forwards";
    flag = 1;
    spn.addEventListener("animationend", () => {
      spn.style.visibility = "visible";
    })

  } else {
    spn.style.animation = "hart1 1s ease-in 1 forwards";
    flag = 0;
    spn.addEventListener("animationend", () => {
      spn.style.visibility = "hidden";
    })

  }

})
}
animateBtn();
