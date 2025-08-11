document.getElementById("contact-form").addEventListener("submit",function(event){
    event.preventDefault();
    alert ("Thank you for contacting SecureTech! We will get back to you soon.");
    this.reset();

})


function toggleDiv(){
    const div=document.getElementById("myDiv");
    const button=document.querySelector(".menu-toggle")
    const headtitle=document.getElementsByClassName("h1")
    div.classList.toggle("open");

    if(div.classList.contains("open")) {
        button.textContent="Close"
    }else{
        button.textContent="Menu";
    }

    
}

