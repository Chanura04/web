const Title=localStorage.getItem('FilmName');
document.getElementById('displayTitle').innerText= Title ? Title : 'None';







document.querySelectorAll('.TimeButton').forEach(button=>{
    button.addEventListener('click',function(){
        document.querySelectorAll('.TimeButton').forEach(btn=>btn.classList.remove('ButtonSelected'));

        this.classList.add('ButtonSelected');
    })
});

document.querySelectorAll('.DateButton').forEach(button=>{
    button.addEventListener('click',function(){
        document.querySelectorAll('.DateButton').forEach(btn=>btn.classList.remove('ButtonSelected'));

        this.classList.add('ButtonSelected');
    })
});



document.getElementById('ConfirmButton'),addEventListener('click',function(){
    const selectedCount=document.getElementById('TicketCount').value;
    const mobile=document.getElementById('ContactNumber').value;
    const totalPrice=5 *1000
    const selectedDate=document.querySelector('.DateButton.ButtonSelected');
    const selectedTime=document.querySelector('.TimeButton.ButtonSelected');
    const selectedTheater=document.getElementById('theater').value;
    const phoneNUMBER = parseInt(mobile)
    

    document.getElementById('FilledDate').textContent=selectedDate ? `Date-------------------: ${selectedDate.dataset.value}` : 'Date: None';
    document.getElementById('FilledTime').textContent=selectedTime ? `Time-------------------:${selectedTime.dataset.value}` : 'Time: None';
    document.getElementById('FilledTeater').textContent=`Theater----------------:${selectedTheater}`  ;
    document.getElementById('FilledCount').textContent= `Count------------------: ${selectedCount}` ;
    document.getElementById('FilledMobile').textContent=`Mobile Number-----: ${phoneNUMBER}` ;
    document.getElementById('FilledPrice').textContent=`Total Cost-------------: ${totalPrice.toFixed(2)}`;
});


 







function filmBoookingPage(){
     const film=document.getElementById('imgName')
}






function CountOfNumberMobile(mobile){
        return mobile.length===10 && /^\d+$/.test(mobile);
};





function checkValidation(){
    // got values from the user
    const theater=document.getElementById('theater').value;
    const count=document.getElementById('TicketCount').value.trim();
    const mobile=document.getElementById('ContactNumber').value.trim();

    document.getElementById('theaterError').textContent='';
    document.getElementById('countError').textContent='';
    document.getElementById('mobileError').textContent='';

    let check_isValid=true;

   
    if(theater===''){
        document.getElementById('theaterError').textContent='Theater is required!';
        
        check_isValid=false;
    }
    if(count===''){
        document.getElementById('countError').textContent='Count is required!';
        check_isValid=false;
    }
    if(mobile===''){
        document.getElementById('mobileError').textContent='Phone number is required!';
        check_isValid=false;
    }else if(!CountOfNumberMobile(mobile)){
        document.getElementById('mobileError').textContent='Phone number must be 10 digits!';
        check_isValid=false;
    }

    if(check_isValid){
        document.getElementById('successMessage').textContent ='Successfully submitted!'
    }

    const user=document.getElementById('ContactNumber').value.trim();
    if(user.length !==10  ){
        alert("Error: Please enter valid Mobile number!")
        setTimeout(()=>{
            location.reload();
        },4000);
        return false;

    }


}
function showAndRefresh(){
    let ProcessisValid=false;

    const mobile=document.getElementById('ContactNumber').value.trim();

    document.getElementById('mobileError').textContent='';

    let check_isValid=true;

    if(mobile==='None'){
        document.getElementById('mobileError').textContent='Phone number is required!';
        ProcessisValid=flase;
    }else if(!CountOfNumberMobile(mobile)){
        document.getElementById('mobileError').textContent='Phone number must be 10 digits!';
        ProcessisValid=flase;
    }

    if(check_isValid){
        document.getElementById('successMessage').textContent ='Successfully submitted!'
        ProcessisValid=true

    }


    if(ProcessisValid){
        document.getElementById('successMessage').textContent ='Successfully submitted!'
        alert("Payment Completed!! Refreshing!!!")
        setTimeout(()=>{
            location.reload();
            window.location.href="index.html"
    
        },2000);
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
















