function submitt(){
    const name=document.getElementById('one').value;
    const message=document.getElementById('three').value;
    const radio=document.getElementById('rad').value;

    document.getElementById('nameError').textContent='';
    document.getElementById('areaError').textContent='';
    // document.getElementById('radioError').textContent=;

    let check_isValid=true;

   
    if(name===''){
        document.getElementById('nameError').textContent='Name is required!';
        check_isValid=false;
    }
    if(message===''){
        document.getElementById('areaError').textContent='Message is required!';
        check_isValid=false;
    }
    if(message===''){
        document.getElementById('areaError').textContent='Message is required!';
        check_isValid=false;
    }
    if(check_isValid){
       
     setTimeout(()=>{
        window.location.href="index.html"

     })

}
    
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
