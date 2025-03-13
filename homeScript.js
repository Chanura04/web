const slideVideos=[
    "one.png",
    "two.png",
    "three.png",
    "four.png",
    "five.png",
    "six.png"

];

// change slides every 6s
setInterval(()=>{
    changeVideos(CurrentIndexNumber + 1)
},7000);

let CurrentIndexNumber=0;
const slideVideoPlayer=document.querySelectorAll('.images');

  function changeVideos(index){
   
     if(index >= slideVideos.length){
         index=0;   //get back to the first video by loop
     } else if (index<0){
          index=slideVideos.length -1; //go back to the last video in slideVideos
     }

    CurrentIndexNumber=index;
//     slideVideoPlayer.src=slideVideos[CurrentIndexNumber];

// hide all added images
    slideVideoPlayer.forEach((player,i)=>{
        player.style.display=(i===CurrentIndexNumber)?'block':'none'
    });

  }
// // give the first video
changeVideos(CurrentIndexNumber);


// //next button
document.getElementById("next_slide").addEventListener("click",()=>{
    changeVideos(CurrentIndexNumber+1);
});
// //previous button
document.getElementById("previous_slide").addEventListener("click",()=>{
    changeVideos(CurrentIndexNumber-1);
});



  

// const filmBoookingPage  =document.getElementById("filmBoookingPage");
// filmBoookingPage.addEventListener('click',function(){
//     window.location.href
// })

function openPanel(){
    const Filterpanel =document.getElementById('filterArea');
    Filterpanel.classList.toggle('active');
}

function film1(){
    window.location.href="mufasa.html"
}
function film2(){
    window.location.href="lilo.html"
}
function film3(){
    window.location.href="wild.html"
}
function film4(){
    window.location.href="snow.html"
}
function film5(){
    window.location.href="gladi.html"
}
function film6(){
    window.location.href="close.html"
}
function film7(){
    window.location.href="deadpool.html"
}
function film8(){
    window.location.href="frozen.html"
}
function film9(){
    window.location.href="carol.html"
}
function film10(){
    window.location.href="installer.html"
}
function film11(){
    window.location.href="taken.html"
}
function film12(){
    window.location.href="inception.html"
}
function film13(){
    window.location.href="mad.html"
}
function film14(){
    window.location.href="smile.html"
}
function film15(){
    window.location.href="jaws.html"
}
function film16(){
    window.location.href="Amsterdam.html"
}
function film17(){
    window.location.href="jungleCruice.html"
}
function film18(){
    window.location.href="Despicable.html"
}
function film19(){
    window.location.href="avengers.html"
}
function film20(){
    window.location.href="godFather.html"
}
function film21(){
    window.location.href="django.html"
}
function film22(){
    window.location.href="quietPlace.html"
}
function film23(){
    window.location.href="revenent.html"
}
function film24(){
    window.location.href="prestige.html"
}
function film25(){
    window.location.href="fightClub.html"
}
function film26(){
    window.location.href="tenet.html"
}
function film27(){
    window.location.href="joker.html"
}
function film28(){
    window.location.href="batman.html"
}
function film29(){
    window.location.href="openheimer.html"
}
function film30(){
    window.location.href="deadpool2.html"
}



function con1(){
    window.location.href="con1.html"
}

function con2(){
    window.location.href="con2.html"
}

function con3(){
    window.location.href="con3.html"
}

function con4(){
    window.location.href="con4.html"
}

function con5(){
    window.location.href="con5.html"
}

function con6(){
    window.location.href="con6.html"
}

function con7(){
    window.location.href="con7.html"
}

function con8(){
    window.location.href="con8.html"
}

function con9(){
    window.location.href="con9.html"
}

function con10(){
    window.location.href="con10.html"
}

function con11(){
    window.location.href="con11.html"
}

function con12(){
    window.location.href="con12.html"
}

function con13(){
    window.location.href="con13.html"
}

function con14(){
    window.location.href="con14.html"
}

function con15(){
    window.location.href="con15.html"
}


function conf1(){
    window.location.href="conf1.html"
}
function conf2(){
    window.location.href="conf2.html"
}
function conf3(){
    window.location.href="conf3.html"
}
function conf4(){
    window.location.href="conf4.html"
}
function conf5(){
    window.location.href="conf5.html"
}
function conf6(){
    window.location.href="conf6.html"
}
function conf7(){
    window.location.href="conf7.html"
}
function conf8(){
    window.location.href="conf8.html"
}
function conf9(){
    window.location.href="conf9.html"
}
function conf10(){
    window.location.href="conf10.html"
}
function conf11(){
    window.location.href="conf11.html"
}
function conf12(){
    window.location.href="conf12.html"
}
function conf13(){
    window.location.href="conf13.html"
}
function conf14(){
    window.location.href="conf14.html"
}
function conf15(){
    window.location.href="conf15.html"
}
function conf16(){
    window.location.href="conf16.html"
}



function filterMovies(){
    window.location.href="filterMovies.html"
}
function filterConferences(){
    window.location.href="filterConferences.html"
}
function filterConcerts(){
    window.location.href="filterConcerts.html"
}
function news(){
    window.location.href="news.html"
}
function DiscountMovies(){
    window.location.href="DiscountMovies.html"
}
function DiscountConcerts(){
    window.location.href="DiscountConcerts.html"
}
function signIn(){
    window.location.href="signIn.html"
}
function profile(){
    window.location.href="profile.html"
}
function aboutUS(){
    window.location.href="aboutUS.html"
}
function contactUs(){
    window.location.href="contactUs.html"
}
function feedback(){
    window.location.href="feedback.html"
}