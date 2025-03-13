

function showAndRefresh(){
    const ticket=document.getElementById('ticket').value;
    const email=document.getElementById('email').value.trim();
    const mobile=document.getElementById('number').value.trim();

    document.getElementById('ticketError').textContent='';
    document.getElementById('EmailError').textContent='';
    document.getElementById('MobileError').textContent='';

    let check_isValid=true;

    function CountOfNumberMobile(mobile){
        return mobile.length===10 && /^\d+$/.test(mobile);
    };
    function CheckEmailValidation(email){
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    };
   

   
    if(ticket==='None'){
        document.getElementById('ticketError').textContent='Ticket Count is required!';
        check_isValid=false;
    }
    if(email==='None'){
        document.getElementById('EmailError').textContent='Email is required!';
        check_isValid=false;
    }else if(!CheckEmailValidation(email)){
        document.getElementById('EmailError').textContent='Invalid email format!';
        check_isValid=false;

    }
    
    if(mobile==='None'){
        document.getElementById('MobileError').textContent='Phone number is required!';
        check_isValid=false;
    }else if(!CountOfNumberMobile(mobile)){
        document.getElementById('MobileError').textContent='Phone number must be 10 digits!';
        check_isValid=false;
    }

    if(check_isValid){
        document.getElementById('sucessfulMessage').textContent ='Successfully submitted!'
    }

    const user=document.getElementById('number').value.trim();
    if(user.length !==10  ){
        alert("Error: Please enter valid informations!")
        location.reload();
        return false;

    }




    let ProcessisValid=true;

    if(ProcessisValid){
        document.getElementById('sucessfulMessage').textContent ='Successfully submitted!'
    }


    alert("Payment Completed!! Refreshing!!!")
    setTimeout(()=>{
        location.reload()
        window.location.href="index.html"
    },1000);
}


document.getElementById('ConfirmButton'),addEventListener('click',function(){
    const selectedCount=document.getElementById('ticket').value;
    const selectedEmail=document.getElementById('email').value;
    const mobile=document.getElementById('number').value;
    const phoneNUMBER = parseInt(mobile);
    const totalPrice=parseFloat(selectedCount) *2000;

    document.getElementById('givenCount').textContent= `Tickets Count---: ${selectedCount}` ;
    document.getElementById('givenEmail').textContent=`Email---------------: ${selectedEmail}` ;
    document.getElementById('givenMobile').textContent=`Mobile Number--: ${phoneNUMBER}` ;
    document.getElementById('FinalPrice').textContent=`Total Cost---------: ${totalPrice.toFixed(2)}`;



});



function ConfirmButton(){
    // got values from the user
    const ticket=document.getElementById('ticket').value;
    const email=document.getElementById('email').value.trim();
    const mobile=document.getElementById('number').value.trim();

    document.getElementById('ticketError').textContent='';
    document.getElementById('EmailError').textContent='';
    document.getElementById('MobileError').textContent='';

    let check_isValid=true;

    function CountOfNumberMobile(mobile){
        return mobile.length===10 && /^\d+$/.test(mobile);
    };
    function CheckEmailValidation(email){
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    };
   

   
    if(ticket===''){
        document.getElementById('ticketError').textContent='Ticket Count is required!';
        check_isValid=false;
    }
    if(email===''){
        document.getElementById('EmailError').textContent='Email is required!';
        check_isValid=false;
    }else if(!CheckEmailValidation(email)){
        document.getElementById('EmailError').textContent='Invalid email format!';
        check_isValid=false;

    }
    
    if(mobile===''){
        document.getElementById('MobileError').textContent='Phone number is required!';
        check_isValid=false;
    }else if(!CountOfNumberMobile(mobile)){
        document.getElementById('MobileError').textContent='Phone number must be 10 digits!';
        check_isValid=false;
    }

    if(check_isValid){
        document.getElementById('sucessfulMessage').textContent ='Successfully submitted!'
    }

    const user=document.getElementById('number').value.trim();
    if(user.length !==10  ){
        alert("Error: Please enter valid informations!")
        location.reload();
        return false;

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
