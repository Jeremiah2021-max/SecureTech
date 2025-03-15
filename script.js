document.getElementById("contact-form").addEventListener("submit",function(event){
    event.preventDefault();
    alert("Thank you for contacting SecureTech! We will get back to you soon.");
    this.reset()
});


document.getElementsByClassName("menu-toggle").addEventListener("click",
    function(){
    document. querySelector(".nav-links").classList.toggle("active");
})
