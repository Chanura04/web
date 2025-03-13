
function ConcertFilerSection(){
    const LocationSelected=document.getElementById('selectLocation').value; //get user selected values
    const DateSelected=document.getElementById('concertDate').value;

    const movies=document.querySelectorAll('.FilmImg3'); //get movie details

    movies.forEach(film =>{
        const LocationAttribute=film.getAttribute('location'); //get movie card date and location
        const DateAttribute=film.getAttribute('date');

        const MatchTheLocation= LocationSelected==='LOCATION' ||LocationAttribute===LocationSelected;//check the values
        const MatchTheDate=! DateSelected || DateAttribute===DateSelected;

        
        if (MatchTheDate && MatchTheLocation){
            film.style.display='block'
        }else if (MatchTheDate){
            film.style.display='block'      
        }else if (MatchTheLocation){
            film.style.display='block'

        }   else{
            film.style.display='none'

        }      
    });
};


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
