
function filmFilerSection(){
    const LocationSelected=document.getElementById('selectLocation').value; //get user selected values
    const DateSelected=document.getElementById('concertDate').value;

    const movies=document.querySelectorAll('.FilmImg'); //get movie details

    movies.forEach(film =>{
        const LocationAttribute=film.getAttribute('LocationData'); //get movie card date and location
        const DateAttribute=film.getAttribute('DateData');

        const MatchTheLocation= LocationSelected==='CINEMA HALL' ||LocationAttribute===LocationSelected;//check the values
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
