function submitt(){
    
    const user=document.getElementById('username').value;
    const password=document.getElementById('password').value;
    const cardnumber=document.getElementById('cardNUmber').value;
    const expire=document.getElementById('cardExpire').value;

    document.getElementById('userError').textContent='';
    document.getElementById('passwordError').textContent='';
    document.getElementById('dateError').textContent='';
    document.getElementById('cardError').textContent='';

    let check_isValid=true;

   
    if(user===''){
        document.getElementById('userError').textContent='User name is required!';
        check_isValid=false;
        alert("Username is required! Refreshing!!!")
        setTimeout(()=>{
            location.reload();
        },5000);
    }
    if(password===''){
        document.getElementById('passwordError').textContent='Password  is required!';
        check_isValid=false;
        alert("Password is required! Refreshing!!!")
        setTimeout(()=>{
            location.reload();
        },5000);
    }
    if(cardnumber===''){
        document.getElementById('cardError').textContent='Card number  is required!';
        check_isValid=false;
        alert("Card number is required! Refreshing!!!")
        setTimeout(()=>{
            location.reload();
        },5000);
    }else if(!CountOfCardNumber(cardnumber)){
        document.getElementById('cardError').textContent='Card number must be 16 numbers!';
        check_isValid=false;
        alert("Card number error! Refreshing!!!")
        setTimeout(()=>{
            location.reload();
        },2000);
    }

    if(expire===''){
        document.getElementById('dateError').textContent='Card expire date  is required!';
        check_isValid=false;
        alert("Card expire date! Refreshing!!!")
        setTimeout(()=>{
            location.reload();
        },5000);
    }

}

function CountOfCardNumber(cardnumber){
    return cardnumber.length===16
};


document.getElementById('login').addEventListener('submit',function(e){
    e.preventDefault();
    const name=document.getElementById('username').value;
    const email=document.getElementById('email').value;
    const cardnumber=document.getElementById('cardNUmber').value;
    const expire=document.getElementById('cardExpire').value;

    if(name){
        setTimeout(() =>{
            document.getElementById('loginContent').style.display='none';
            document.getElementById('profile-Details').style.display='block';
            document.getElementById('profile-Name').textContent=name;
            document.getElementById('card-Name').textContent=name;
            document.getElementById('card-number').textContent=cardnumber;
            document.getElementById('card-date').textContent=expire;
            document.getElementById('profile-email').textContent=email;

        },100);
    }
 });
 function logout(){
    document.getElementById('profile-Name').textContent=' ';
    document.getElementById('profile-email').textContent=' ';
    window.location.href="index.html"

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
