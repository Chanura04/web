
function ConferencesFilerSection(){
    const LocationSelected=document.getElementById('selectLocation').value; //get user selected values
    const SpaceSelected=document.getElementById('selectSpace').value; //get user selected values
 
    const conference=document.querySelectorAll('.FilmImg4'); //get movie details

    conference.forEach(film =>{
        const LocationAttribute=film.getAttribute('location'); //get movie card date and location
        const SpaceAttribute=film.getAttribute('space');

        const MatchTheLocation= LocationSelected==='LOCATION' ||LocationAttribute===LocationSelected;//check the values
        const MatchTheSpace= SpaceSelected==='SPACE' ||SpaceAttribute===SpaceSelected;//check the values
         

        
        if (MatchTheSpace && MatchTheLocation){
            film.style.display='block'
        }else if (MatchTheSpace){
            film.style.display='block'      
        }else if (MatchTheLocation){
            film.style.display='block'

        }   else{
            film.style.display='none'

        }      
    });
};

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

function home(){
    window.location.href="index.html"
}
function pastEvent(){
    window.location.href="pastEvent.html"
}
