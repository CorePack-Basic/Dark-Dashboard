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
   
function calanderBg() {

    let calanderColor = document.querySelectorAll(".calc")
    calanderColor.forEach((day) => {
        
        day.addEventListener("click" , () => {

            calanderColor.forEach((remove) => {
                remove.classList.remove("calender-bg")
            })
            
            day.classList.add("calender-bg")

      
        })
   
    })


}
calanderBg()