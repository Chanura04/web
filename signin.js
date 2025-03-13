 function sign(){
   //  document.getElementById('successMessage').textContent ='Successfully submitted!';

    const user=document.getElementById('user').value;
    const password=document.getElementById('password').value;

    document.getElementById('userError').textContent='';
    document.getElementById('passwordError').textContent='';
    let check_isValid=true;

   
    if(user===''){
        document.getElementById('userError').textContent='User name is required!';
        check_isValid=false;
        alert("Username is required! Refreshing!!!")
        setTimeout(()=>{
            location.reload();
        },3000);
    }
    if(password===''){
        document.getElementById('passwordError').textContent='Password  is required!';
        check_isValid=false;
        alert("Password is required! Refreshing!!!")
        setTimeout(()=>{
            location.reload();
        },3000);
    } if(check_isValid){
       
        setTimeout(()=>{
           window.location.href="profile.html"
   
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
