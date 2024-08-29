
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





   const prevBtns = document.querySelectorAll(".btn-prev");
   const nextBtns = document.querySelectorAll(".btn-next");
   const progress = document.getElementById("progress");
   const formSteps = document.querySelectorAll(".form-step");
   const progressSteps = document.querySelectorAll(".progress-step");
   
   let formStepsNum = 0;
   
   nextBtns.forEach((btn) => {
     btn.addEventListener("click", () => {
       
       const currentFormStep = formSteps[formStepsNum];
       const inputs = currentFormStep.querySelectorAll("input");
       let allFilled = true;
   
       inputs.forEach((input) => {
         if (input.value.trim() === "") {
           allFilled = false;
           input.classList.add("border-red-500"); 
           input.focus(); 
         } else {
           input.classList.remove("border-red-500"); 
         }
       });
   
       if (allFilled) {
         formStepsNum++;
         updateFormSteps();
         updateProgressbar();
       }
     });
   });
   
   prevBtns.forEach((btn) => {
     btn.addEventListener("click", () => {
       formStepsNum--;
       updateFormSteps();
       updateProgressbar();
     });
   });
   
   function updateFormSteps() {
     formSteps.forEach((formStep) => {
       formStep.classList.contains("form-step-active") &&
         formStep.classList.remove("form-step-active");
     });
   
     formSteps[formStepsNum].classList.add("form-step-active");
   }
   
   function updateProgressbar() {
     progressSteps.forEach((progressStep, idx) => {
       if (idx < formStepsNum + 1) {
         progressStep.classList.add("progress-step-active");
       } else {
         progressStep.classList.remove("progress-step-active");
       }
     });
   
     const progressActive = document.querySelectorAll(".progress-step-active");
   
     progress.style.width =
       ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
   }
   