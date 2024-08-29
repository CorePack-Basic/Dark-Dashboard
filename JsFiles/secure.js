function switchPages() {
    //Dashboard Page
   
       let dashboard = document.querySelector(".dashboard")
   
       if(dashboard) {
           dashboard.addEventListener("click" , () => {
               window.open("index.html" , "_self")
           })
       }
       
       let setting = document.querySelector(".setting")
       
       if(setting) {
           setting.addEventListener("click" , () => {
               window.open("setting.html" , "_self")
           })
       }
   
       let security = document.querySelector(".security-page")
       if(security) {
           security.addEventListener("click" , () => {
               window.open("security.html" , "_self")
           })
       }
   
       let users = document.querySelector(".users-page")
           if(users) {
               users.addEventListener("click" , () => {
                   window.open("setting.html" , "_self")
               })
           }
   
       let calander = document.querySelector(".calander")
       if(calander) {
           calander.addEventListener("click"  , () => {
               window.open("calender.html" , "_self")
           })
       }
   
       let files = document.querySelector(".files")
   
       if(files) {
           files.addEventListener("click" , () => {
               window.open("files.html" , "_self")
           })
       }
   
       let contact = document.querySelector(".contact")
       if(contact) {
           contact.addEventListener("click" , () => {
               window.open("contact.html" , "_self")
           })
       }
   }
   switchPages()
   

let btn_toggle = document.querySelector(".btn-toggle")
let bg_toggle = document.querySelector(".bg-blue")
// let falseIcon = document.querySelector(".false")
// let trueIcon = document.querySelector("true")
let spanIcons = document.querySelectorAll(".icon-secure span")
let iconSecure = document.querySelector(".icon-secure ")


btn_toggle.addEventListener("click" , () => {
    bg_toggle.classList.toggle("go")

    spanIcons.forEach((span) => {
        
            if(span.classList.contains("hide")) {
                span.classList.remove("hide")
                
            }else if(!span.classList.contains("hide")) {
                span.classList.add("hide");
                iconSecure.classList.toggle("switch-icons")
            }
           
    })
    
})  

let twoToggle = document.querySelector(".two-toggle")
let bg_toggle_two = document.querySelector(".bg-blue-two")
// let rightIcon = document.querySelector(".right")
// let closeIcon = document.querySelector(".close")
let spanPasswords = document.querySelectorAll(".icon-password span")
let iconPassword = document.querySelector(".icon-password")

twoToggle.addEventListener("click" , () => {
    bg_toggle_two.classList.toggle("down")

    spanPasswords.forEach((span) => {
        
            if(span.classList.contains("hide")) {
                span.classList.remove("hide")
                
            }else if(!span.classList.contains("hide")) {
                span.classList.add("hide");
                iconPassword.classList.toggle("switch-password")
            }
           
    })
    
})  

