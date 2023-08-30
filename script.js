var lik = document.querySelector("#like");
var spn = document.querySelector(".material-icons-outlined");
var ech5 = document.querySelector("h5");
var flag = 0;
lik.addEventListener("click", function(){
    if (flag==0){
        ech5.innerHTML="OSAMPOOOO OSAMPOOOO";
        spn.style.visibility="visible";
        spn.style.animation="hart 1s ease-in forwards";
        lik.innerHTML="Unlike";
        flag = 1;
        spn.addEventListener("animationend",()=>{
            spn.style.visibility="visible";
        })
            
    }
    else {
        spn.style.animation="hart1 1s ease-in 1 forwards";
        ech5.innerHTML="I cannnntttooooooo";
        lik.innerHTML="Like";
        flag = 0;
        spn.addEventListener("animationend",()=>{
            spn.style.visibility="hidden";
        })
            
    }
    
})

