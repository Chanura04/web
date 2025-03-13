function loadPage(){
    const httpHost=new XMLHttpRequest();
    httpHost.open("GET" ,"pastEvent.xml",true); //using GET request connect the xml file
    httpHost.onreadystatechange=function(){
        // this if statement will check request is complete or not
        if(httpHost.readyState===4 && httpHost.status===200){
            const doc=httpHost.responseXML;  // get the xml file 
            const pastEvents=doc.getElementsByTagName("pastEvent");  //get all the pastEvent tage included tags
            const grid=document.getElementById("eventsGrid"); //get the page strucute form html file

            // this line will crear all the exitinng content in page
            grid.innerHTML="";

            // this loop will through each event and genarate a event card
            for(let i=0;i<pastEvents.length;i++){
                const eventImage=pastEvents[i].getElementsByTagName("eventImg")[0].textContent; //get img in xml
                const eventDate=pastEvents[i].getElementsByTagName("eventDate")[0].textContent;//get date in xml
                const eventLocation=pastEvents[i].getElementsByTagName("eventLocation")[0].textContent;//get location in xml
                const eventPrice=pastEvents[i].getElementsByTagName("eventPrice")[0].textContent;//get price in  xml

                //built the html for card
                const eventCard=`
                    <div class="card">
                        <img src="${eventImage}" alt="EventImg" class="cardImg">
                        <div class="eventDetails">
                            <h3>${eventLocation}</h3>
                            <p><b>Date:</b> ${eventDate}</p>
                            <p><b>Price: </b>${eventPrice}</p>
                        </div>
                    </div>
                `;
                // add all the cards to grid
                grid.innerHTML+=eventCard
            }
        }
    };httpHost.send();//this will send request to fetch the xml data
}
// loead all the cards when the page open
window.onload=loadPage;




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
