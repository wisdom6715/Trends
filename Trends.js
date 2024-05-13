var launchMobile = document.querySelector(".add-icon-for-mobile-live-launch");
var launchIcon = document.querySelector("#Layer_1");
var launchLiveMobile = document.querySelector(".main-live-launching-page-for-phone-only-mobile-size");
var ProfileMobile = document.querySelector(".icon-profile-mobile");

var explorePageMobile = document.querySelector(".explore-page");
var exploreSearchMobile = document.querySelector("#search-trends");
var searchIconMobile = document.querySelector(".search-icon");

var homePageMobile = document.querySelector(".home-page");
var trendsLogo = document.querySelector(".trends-logo-menu");
var homeIconMobile = document.querySelector(".home-icon");

var mainLivePage = document.querySelector("#main-live-page");
var mainLiveIcon = document.querySelector(".main-live-icon");

var mainProfilePage = document.querySelector(".main-profile-page");

var exploreIcon = document.querySelector(".explore-icon");

var profileIcon = document.querySelector(".profile-icon");

var messageTabPage = document.querySelector("#tablets-messaging-page");
var messageIcon =document.querySelector(".message-icon")

var launchIcon = document.querySelector(".launch-live");
var launchPage = document.querySelector(".main-live-launching-page")

var searchPage = document.querySelector(".search-page")
var searchIcon = document.querySelector(".search-icon")

var notificationIcon = document.querySelector(".notification-icon")
var notificationPage = document.querySelector("#notification-page")

var moreIcon = document.querySelector(".more-icon");
var morePage = document.querySelector(".more-popup-icon");

var homePath = document.querySelector(".home-path")
var homePage = document.querySelector(".home-page")

var searchPath = document.querySelector(".search-path");
var searchPage = document.querySelector(".search-page");

var notificationPath = document.querySelector(".notification-path");
var notificationPage = document.querySelector("#notification-page");

var explorePath = document.querySelector(".explore-path");
var explorePage = document.querySelector(".explore-page");

var livePath = document.querySelector(".live-path");
var livePage = document.querySelector("#main-live-page");

var profilePath = document.querySelector(".profile-path");
var profilePage = document.querySelector(".main-profile-page");

var messagePath = document.querySelector(".message-path");
var messagePage = document.querySelector(".main-messaging-page");

var launchPath = document.querySelector(".launch-path");
var launchPage = document.querySelector(".main-live-launching-page")

var morePath = document.querySelector(".more-path");
var morePage = document.querySelector(".more-popup-icon")

function replaceSVG() {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    if(isMobile){
        launchMobile.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="nav-icon" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="24" height="24"><title>Launch live</title><path d="M17,12c0,.553-.448,1-1,1h-3v3c0,.553-.448,1-1,1s-1-.447-1-1v-3h-3c-.552,0-1-.447-1-1s.448-1,1-1h3v-3c0-.553,.448-1,1-1s1,.447,1,1v3h3c.552,0,1,.447,1,1Zm7-7v14c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5V5C0,2.243,2.243,0,5,0h14c2.757,0,5,2.243,5,5Zm-2,0c0-1.654-1.346-3-3-3H5c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V5Z"/></svg>'
    }    
    else{
        launchMobile.innerHTML ='<svg aria-label="Explore" class="add-icon-for-mobile-live-launch" fill="currentColor"  role="img" viewBox="0 0 24 24"><title>Explore</title><polygon fill="none" points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon><polygon fill-rule="evenodd" points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"></polygon><circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle></svg>'
    }
   
    if(isMobile){
        ProfileMobile.innerHTML =  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><g id="_01_align_center" data-name="01 align center"><path d="M21,24H19V18.957A2.96,2.96,0,0,0,16.043,16H7.957A2.96,2.96,0,0,0,5,18.957V24H3V18.957A4.963,4.963,0,0,1,7.957,14h8.086A4.963,4.963,0,0,1,21,18.957Z"/><path d="M12,12a6,6,0,1,1,6-6A6.006,6.006,0,0,1,12,12ZM12,2a4,4,0,1,0,4,4A4,4,0,0,0,12,2Z"/></g></svg>'
    }
}
replaceSVG();


function pageContents(){
    const mobileInteractiviness = window.matchMedia('(max-width: 768px)').matches 
    if(mobileInteractiviness){
        searchIconMobile.addEventListener("click", function(){
            if(explorePageMobile.style.display ==="none"){
                explorePageMobile.style.display ="grid"
            } if(exploreSearchMobile.style.visibility ==="hidden"){
                exploreSearchMobile.style.visibility ="visible"
            } if(homePageMobile.style.display ==="block"){
                homePageMobile.style.display ="none"
            } if(trendsLogo.style.display ==="flex"){
                trendsLogo.style.display ="none"
            } if(mainLivePage.style.display ==="grid"){
                mainLivePage.style.display ="none"
            } if(mainProfilePage.style.display ==="grid"){
                mainProfilePage.style.display ="none"
            } if(launchLiveMobile.style.display ==="block"){
                launchLiveMobile.style.display ="none"
            } else{
                explorePageMobile.style.display ="grid"
                exploreSearchMobile.style.visibility ="visible"
                trendsLogo.style.display ="none"
                homePageMobile.style.display ="none"
                mainLivePage.style.display ="none"
                mainProfilePage.style.display ="none"
                launchLiveMobile.style.display ="none"
            }

        })
        homeIconMobile.addEventListener("click", function(){
            if(homePageMobile.style.display ==="none"){
                homePageMobile.style.display ="block"
            } if(trendsLogo.style.display ==="none"){
                trendsLogo.style.display ="flex"
            } if(explorePageMobile.style.display ==="grid"){
                explorePageMobile.style.display ="none"
            } if(exploreSearchMobile.style.visibility ==="visible"){
                exploreSearchMobile.style.visibility ="hidden"
            } if(mainLivePage.style.display ==="grid"){
                mainLivePage.style.display ="none"
            } if(mainProfilePage.style.display ==="grid"){
                mainProfilePage.style.display ="none"
            } if(launchLiveMobile.style.display ==="block"){
                launchLiveMobile.style.display ="none"
            } else{
                trendsLogo.style.display ="flex"
                homePageMobile.style.display ="block"
                exploreSearchMobile.style.visibility ="hidden"
                explorePageMobile.style.display ="none"
                mainLivePage.style.display ="none"
                mainProfilePage.style.display ="none"
                launchLiveMobile.style.display ="none"
            }
        })
        mainLiveIcon.addEventListener("click", function(){
        if(mainLivePage.style.display ==="none"){
            mainLivePage.style.display ="grid"
        } if(explorePageMobile.style.display ==="grid"){
            explorePageMobile.style.display ="none"
        } if(exploreSearchMobile.style.visibility ==="visible"){
            exploreSearchMobile.style.visibility ="hidden"
        } if(homePageMobile.style.display ==="block"){
            homePageMobile.style.display ="none"
        } if(trendsLogo.style.display ==="flex"){
            trendsLogo.style.display ="none"
        } if(mainProfilePage.style.display ==="grid"){
            mainProfilePage.style.display ="none"
        } if(launchLiveMobile.style.display ==="block"){
            launchLiveMobile.style.display ="none"
        } else{
            mainLivePage.style.display ="grid"
            trendsLogo.style.display ="none"
            homePageMobile.style.display ="none"
            exploreSearchMobile.style.visibility ="hidden"
            explorePageMobile.style.display ="none"
            mainProfilePage.style.display ="none"
            launchLiveMobile.style.display ="none"
        }
        })
        ProfileMobile.addEventListener("click", function(){
            if(mainProfilePage.style.display ==="none"){
                mainProfilePage.style.display ="grid"
            } if(mainLivePage.style.display ==="grid"){
                mainLivePage.style.display ="none"
            } if(explorePageMobile.style.display ==="grid"){
                explorePageMobile.style.display ="none"
            } if(exploreSearchMobile.style.visibility ==="visible"){
                exploreSearchMobile.style.visibility ="hidden"
            } if(homePageMobile.style.display ==="block"){
                homePageMobile.style.display ="none"
            } if(trendsLogo.style.display ==="flex"){
                trendsLogo.style.display ="none"
            } if(launchLiveMobile.style.display ==="block"){
                launchLiveMobile.style.display ="none"
            } else{
                mainProfilePage.style.display ="grid"
                trendsLogo.style.display ="none"
                homePageMobile.style.display ="none"
                exploreSearchMobile.style.visibility ="hidden"
                explorePageMobile.style.display ="none"
                mainLivePage.style.display ="none"
                launchLiveMobile.style.display ="none"
            }
        })
        launchMobile.addEventListener("click", function(){
            if(launchLiveMobile.style.display ==="none"){
                launchLiveMobile.style.display ="block"
            } if(mainLivePage.style.display ==="grid"){
                mainLivePage.style.display ="none"
            } if(explorePageMobile.style.display ==="grid"){
                explorePageMobile.style.display ="none"
            } if(exploreSearchMobile.style.visibility ==="visible"){
                exploreSearchMobile.style.visibility ="hidden"
            } if(homePageMobile.style.display ==="block"){
                homePageMobile.style.display ="none"
            } if(trendsLogo.style.display ==="flex"){
                trendsLogo.style.display ="none"
            } if(mainProfilePage.style.display ==="grid"){
                mainProfilePage.style.display ="none"
            } else{
                launchLiveMobile.style.display ="block"
                trendsLogo.style.display ="none"
                homePageMobile.style.display ="none"
                exploreSearchMobile.style.visibility ="hidden"
                explorePageMobile.style.display ="none"
                mainLivePage.style.display ="none"
                mainProfilePage.style.display ="none"
            }
        })


    }

}
pageContents();


function tabletsContents(){
    const tabletsInteractivity = window.matchMedia('(max-width: 991px) and (min-width: 761px)').matches;

    if (tabletsInteractivity) {
    searchIcon.addEventListener("click", function(){
        if(searchPage.style.display ==="none"){
            searchPage.style.display ="block";
        } else{
            searchPage.style.display ="none";
        }
    })
    notificationIcon.addEventListener("click", function(){
        if(notificationPage.style.display ==="none"){
            notificationPage.style.display ="block"
        } else{
            notificationPage.style.display ="none"
        }
    })
    moreIcon.addEventListener("click", function(){
        if(morePage.style.display ==="none"){
            morePage.style.display ="block"
        } else {
            morePage.style.display ="none"
        }
    })

    mainLiveIcon.addEventListener("click", function(){
       if( homePageMobile.style.display = "block"){
            homePageMobile.style.display = "none";
        }  if (mainLivePage.style.display ==="none") {
            mainLivePage.style.display = "grid";
        } if(explorePageMobile.style.display ==="grid"){
            explorePageMobile.style.display ="none"
        } if(mainProfilePage.style.display ==="grid"){
            mainProfilePage.style.display ="none"
        } if(messageTabPage.style.display ==="block"){
            messageTabPage.style.display ="none"
        } if(launchPage.style.display ==="block"){
            launchPage.style.display ="none"
        } else {
            mainLivePage.style.display = "grid";
            explorePageMobile.style.display ="none"
            mainProfilePage.style.display ="none"
            launchPage.style.display ="none"
            messageTabPage.style.display ="none"
        } 
       
    });
    homeIconMobile.addEventListener("click", function(){
        if(homePageMobile.style.display ==="none"){
            homePageMobile.style.display ="block"
        } if (mainLivePage.style.display ==="grid") {
            mainLivePage.style.display = "none";
        } if(explorePageMobile.style.display ==="grid"){
            explorePageMobile.style.display ="none"
        } if(mainProfilePage.style.display ==="grid"){
            mainProfilePage.style.display ="none"
        } if(messageTabPage.style.display ==="block"){
            messageTabPage.style.display ="none"
        } if(launchPage.style.display ==="block"){
            launchPage.style.display ="none"
        } else{
            homePageMobile.style.display ="block"
            mainLivePage.style.display = "none";
            explorePageMobile.style.display ="none"
            mainProfilePage.style.display ="none"
            launchPage.style.display ="none"
            messageTabPage.style.display ="none"
        }
    })
    exploreIcon.addEventListener("click", function(){
        if( homePageMobile.style.display === "block"){
            homePageMobile.style.display = "none";
        } if(explorePageMobile.style.display ==="none"){
            explorePageMobile.style.display ="grid"
        }  if (mainLivePage.style.display ==="grid") {
            mainLivePage.style.display = "none";
        } if(mainProfilePage.style.display ==="grid"){
            mainProfilePage.style.display ="none"
        } if(messageTabPage.style.display ==="block"){
            messageTabPage.style.display ="none"
        } if(launchPage.style.display ==="block"){
            launchPage.style.display ="none"
        } else{
            explorePageMobile.style.display ="grid"
            mainLivePage.style.display = "none";
            mainProfilePage.style.display ="none"
            launchPage.style.display ="none"
            homePageMobile.style.display = "none";
            messageTabPage.style.display ="none"
        }
    })
    profileIcon.addEventListener("click", function(){
        if( homePageMobile.style.display === "block"){
            homePageMobile.style.display = "none";
        }if(explorePageMobile.style.display ==="grid"){
            explorePageMobile.style.display ="none"
        } if (mainLivePage.style.display ==="grid") {
            mainLivePage.style.display = "none";
        } if(mainProfilePage.style.display ==="none"){
            mainProfilePage.style.display ="grid"
        } if(messageTabPage.style.display ==="block"){
            messageTabPage.style.display ="none"
        } if(launchPage.style.display ==="block"){
            launchPage.style.display ="none"
        } else{
            explorePageMobile.style.display ="none"
            mainLivePage.style.display = "none";
            homePageMobile.style.display = "none";
            launchPage.style.display ="none"
            mainProfilePage.style.display ="grid"
            messageTabPage.style.display ="none"
        }
    })
    messageIcon.addEventListener("click", function(){
        if(messageTabPage.style.display ==="none"){
            messageTabPage.style.display ="block";
        } if( homePageMobile.style.display === "block"){
            homePageMobile.style.display = "none";
        }if(explorePageMobile.style.display ==="grid"){
            explorePageMobile.style.display ="none"
        } if (mainLivePage.style.display ==="grid") {
            mainLivePage.style.display = "none";
        } if(mainProfilePage.style.display ==="grid"){
            mainProfilePage.style.display ="none"
        } if(launchPage.style.display ==="block"){
            launchPage.style.display ="none"
        } else{
            messageTabPage.style.display ="block";
            explorePageMobile.style.display ="none"
            mainLivePage.style.display = "none";
            homePageMobile.style.display = "none";
            launchPage.style.display ="none"
            mainProfilePage.style.display ="none"
        }
    })
    launchIcon.addEventListener("click", function(){
        if( homePageMobile.style.display === "block"){
            homePageMobile.style.display = "none";
        } if(explorePageMobile.style.display ==="grid"){
            explorePageMobile.style.display ="none"
        } if (mainLivePage.style.display ==="grid") {
            mainLivePage.style.display = "none";
        } if(messageTabPage.style.display ==="block"){
            messageTabPage.style.display ="none"
        } if(launchPage.style.display ==="none"){
            launchPage.style.display ="block"
        } else{
            explorePageMobile.style.display ="none"
            mainLivePage.style.display = "none";
            homePageMobile.style.display = "none";
            mainProfilePage.style.display ="none"
            messageTabPage.style.display ="none"
            launchPage.style.display ="block"
        }

    })
    
    }

}
tabletsContents();

function laptopContents(){
    const laptopInteractivity = window.matchMedia('(min-width: 992px) and (max-width: 6000px)').matches;
    if(laptopInteractivity){
       homePath.addEventListener("click", function(){
        if(homePage.style.display ==="none"){
            homePage.style.display ="block"
        } if(livePage.style.display ==="grid"){
            livePage.style.display ="none";
        } if(explorePage.style.display ==="grid"){
            explorePage.style.display ="none"
        } if(messagePage.style.display ==="grid"){
            messagePage.style.display ="none"
        } if(profilePage.style.display ==="grid"){
            profilePage.style.display ="none"
        } if(launchPage.style.display ==="block"){
            launchPage.style.display ="none"
        } else{
            homePage.style.display ="block";
            explorePage.style.display ="none";
            livePage.style.display ="none";
            messagePage.style.display ="none"
            profilePage.style.display ="none"
            launchPage.style.display ="none"
        } 
       })
       searchPath.addEventListener("click", function(){
        if(searchPage.style.display ==="none"){
            searchPage.style.display ="block"
        } else{
            searchPage.style.display ="none"
        }
       })
       explorePath.addEventListener("click", function(){
        if(homePage.style.display ==="block"){
            homePage.style.display ="none"
        }
        if(livePage.style.display ==="grid"){
            livePage.style.display ="none";
        }
        if(explorePage.style.display ==="none"){
            explorePage.style.display ="grid"
        } if(messagePage.style.display ==="grid"){
            messagePage.style.display ="none"
        } if(profilePage.style.display ==="grid"){
            profilePage.style.display ="none"
        } if(launchPage.style.display ==="block"){
            launchPage.style.display ="none"
        } else{
            explorePage.style.display ="grid"
            homePage.style.display ="none"
            livePage.style.display ="none"
            messagePage.style.display ="none"
            profilePage.style.display ="none"
            launchPage.style.display ="none"
        }
       })
       livePath.addEventListener("click", function(){
        if(homePage.style.display ==="block"){
            homePage.style.display ="none"
        }
        if(explorePage.style.display ==="grid"){
            explorePage.style.display ="none"
        }
        if(livePage.style.display ==="none"){
            livePage.style.display ="grid";
        } if(messagePage.style.display ==="grid"){
            messagePage.style.display ="none"
        } if(profilePage.style.display ==="grid"){
            profilePage.style.display ="none"
        } if(launchPage.style.display ==="block"){
            launchPage.style.display ="none"
        }else{
            livePage.style.display ="grid"
            homePage.style.display ="none"
            explorePage.style.display ="none"
            messagePage.style.display ="none"
            profilePage.style.display ="none"
            launchPage.style.display ="none"
        }
       })
       messagePath.addEventListener("click", function(){
        if(homePage.style.display ==="block"){
            homePage.style.display ="none"
        }
        if(explorePage.style.display ==="grid"){
            explorePage.style.display ="none"
        }
        if(livePage.style.display ==="grid"){
            livePage.style.display ="none";
        }
        if(messagePage.style.display ==="none"){
            messagePage.style.display ="grid"
        } if(profilePage.style.display ==="grid"){
            profilePage.style.display ="none"
        } if(launchPage.style.display ==="block"){
            launchPage.style.display ="none"
        } else{
            messagePage.style.display ="grid";
            livePage.style.display ="none";
            explorePage.style.display ="none"
            homePage.style.display ="none"
            profilePage.style.display ="none"
            launchPage.style.display ="none"
        }
       })
       notificationPath.addEventListener("click", function(){
        if(notificationPage.style.display ==="none"){
            notificationPage.style.display ="block"
        }
        else{
            notificationPage.style.display ="none"
        }
       })
       profilePath.addEventListener("click", function(){
        if(homePage.style.display ==="block"){
            homePage.style.display ="none"
        }
        if(explorePage.style.display ==="grid"){
            explorePage.style.display ="none"
        }
        if(livePage.style.display ==="grid"){
            livePage.style.display ="none";
        }
        if(messagePage.style.display ==="grid"){
            messagePage.style.display ="none"
        } if(profilePage.style.display ==="none"){
            profilePage.style.display ="grid"
        } if(launchPage.style.display ==="block"){
            launchPage.style.display ="none"
        }
         else{
            profilePage.style.display ="grid"
            messagePage.style.display ="none";
            livePage.style.display ="none";
            explorePage.style.display ="none"
            homePage.style.display ="none"
            launchPage.style.display ="none"
        }
       })
       launchPath.addEventListener("click", function(){
        if(homePage.style.display ==="block"){
            homePage.style.display ="none"
        }
        if(explorePage.style.display ==="grid"){
            explorePage.style.display ="none"
        }
        if(livePage.style.display ==="grid"){
            livePage.style.display ="none";
        }
        if(messagePage.style.display ==="grid"){
            messagePage.style.display ="none"
        } if(profilePage.style.display ==="grid"){
            profilePage.style.display ="none"
        } if(launchPage.style.display ==="none"){
            launchPage.style.display ="block"
        }  else{
            launchPage.style.display ="block"
            profilePage.style.display ="none"
            messagePage.style.display ="none";
            livePage.style.display ="none";
            explorePage.style.display ="none"
            homePage.style.display ="none"
        }
       })
       morePath.addEventListener("click", function(){
        if(morePage.style.display ==="none"){
            morePage.style.display ="block";
        }
        else{
            morePage.style.display ="none"; 
        }
       })
       

    }
}
laptopContents();