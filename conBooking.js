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

 



function ConfirmButton(){
    // got values from the user
    const date=document.getElementById('datee').value;
    const count=document.getElementById('numberr').value;
    const time=document.getElementById('timee').value;
    const email=document.getElementById('emaill').value.trim();
    const discription=document.getElementById('area').value.trim();

    document.getElementById('dateError').textContent='';
    document.getElementById('EmailError').textContent='';
    document.getElementById('timeError').textContent='';
    document.getElementById('memberError').textContent='';
    document.getElementById('DiscriptionError').textContent='';

    let check_isValid=true;

    function CountOfNumberMobile(mobile){
        return mobile.length===10 && /^\d+$/.test(mobile);
    };
    function CheckEmailValidation(email){
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    };
   

   
    if(date===''){
        document.getElementById('dateError').textContent='Date is required!';
        check_isValid=false;
    }
    if(time===''){
        document.getElementById('timeError').textContent='Time is required!';
        check_isValid=false;
    }
    if(discription===''){
        document.getElementById('DiscriptionError').textContent='Discription is required!';
        check_isValid=false;
    }
    if(email===''){
        document.getElementById('EmailError').textContent='Email is required!';
        check_isValid=false;
    }else if(!CheckEmailValidation(email)){
        document.getElementById('EmailError').textContent='Invalid email format!';
        check_isValid=false;

    }
    
    if(count===''){
        document.getElementById('memberError').textContent='People count is required!';
        check_isValid=false;
    } 

    if(check_isValid){
        document.getElementById('successMessage').textContent ='Successfully submitted!'
        let ProcessisValid=true;
        setTimeout(()=>{
        window.location.href="index.html"
        },1000);

    }


if(ProcessisValid){
    document.getElementById('successMessage').textContent ='Successfully submitted!';
    alert("Request Completed!! Refreshing!!!")
    

} 



}