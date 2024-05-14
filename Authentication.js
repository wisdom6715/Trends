var signupButton = document.querySelector("#sign-up");
var loginink = document.querySelector(".log-in");
var signUpPage = document.querySelector(".signup")
var introPage = document.querySelector(".intro-page");
var loginPage = document.querySelector(".login");
var outLine = document.querySelector(".outline");
var linkOutline =document.querySelector(".out-line")

function clicks (){
    signupButton.addEventListener("click", function(){
        if(introPage.style.display ==="flex"){
            introPage.style.display ="none"
        } if(signUpPage.style.display ==="none"){
            signUpPage.style.display ="block"
        } else{
            signUpPage.style.display ="block"
            introPage.style.display ="none"
        }
    })
    loginink.addEventListener("click", function(){
        if(introPage.style.display ==="flex"){
            introPage.style.display ="none"
        } if(loginPage.style.display ==="none"){
            loginPage.style.display ="block"
        } else{
            loginPage.style.display ="block"
            introPage.style.display ="none"
        }
    })
   outLine.addEventListener("click", function(){
    if(introPage.style.display ==="none"){
        introPage.style.display ="flex"
    } if(signUpPage.style.display ==="block"){
           signUpPage.style.display ="none"
        
    } 
   })
   linkOutline.addEventListener("click", function(){
    if(introPage.style.display ==="none"){
        introPage.style.display ="flex"
    } if(loginPage.style.display ==="block"){
        loginPage.style.display ="none"
    } 
   })
}
clicks();
