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
   

const inviteMember = document.querySelector(".invite-member");
const invitePeopleButton = document.querySelector(".invite-people");
const closeX = document.querySelector(".close-x")

invitePeopleButton.addEventListener("click" , () => {
    inviteMember.classList.add("show-up")
})


closeX.addEventListener("click" , () => {
    inviteMember.classList.remove("show-up")
})



//Message Delete Member

function deleteMember() {

    let deleteIcon = document.querySelectorAll(".deleter")
    let deleteMember = document.querySelector(".delete-member")
    let keepMember = document.querySelector(".keep-member-btn")
    let iconDelete = document.querySelector(".icon-delete")
    let removeMember = document.querySelector(".remove-member-btn")
    let textDeleter = document.querySelector(".text-delete-member p")


    
    deleteIcon.forEach((deleter) => {
        deleter.addEventListener("click" , () => {
            deleteMember.classList.add("message-deleter")
        })
    })

    keepMember.addEventListener("click" , () => {   
        deleteMember.classList.remove("message-deleter")
    })

    iconDelete.addEventListener("click" , () => {
        deleteMember.classList.remove("message-deleter")
    })

    removeMember.addEventListener("click" , () => {
            textDeleter.textContent = "Hello Sir, Sorry You don't have Role to Delete This employer"
            setTimeout(() => {
                textDeleter.textContent = "You are about to remove a member which will not allow this Person to login into your organization anymore"
            }, 3000);
    })



}
deleteMember()





// InvitePeople and adding data to page


let arrayOfPeople = [];


if(window.localStorage.getItem("Users")) {
    arrayOfPeople = JSON.parse(window.localStorage.getItem("Users"))
}

triggerLocalStorage()


// FirstName
let firstNameInput = document.getElementById("firstName")
// LastName
let lastNameInput = document.getElementById("lastName")
// Email
let emailInput = document.getElementById("email")

// invite-role
let inviteRole = document.querySelector(".invite-role");
    inviteRole.addEventListener("click" , () => {
        inviteMember.classList.remove("show-up")
    })
// FunctionInvitePeople
function invitePeople() {


    let object = {
        id : Date.now() ,
        firstName : firstNameInput.value,
        lastName : lastNameInput.value,
        email : emailInput.value
    }

    if(firstNameInput.value.trim() != "" || lastNameInput.value.trim() != "" || emailInput.value.trim()) {
        arrayOfPeople.push(object)
        clearInputs()
        addDataToLocalstorage(arrayOfPeople)
        addPeopleToPage(arrayOfPeople)
        deleteInviteUser()
    }

}

inviteRole.addEventListener("click" , invitePeople)

// Function Clear Inputs

function clearInputs() {

    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";

}

// Add Data To LocalStorage

function addDataToLocalstorage(arrayOfPeople) {

    window.localStorage.setItem("Users" , JSON.stringify(arrayOfPeople))

}

//AddDataToPage

function addPeopleToPage(arrayOfPeople) {

    let contentInvite = document.querySelector(".content-invite")

    contentInvite.innerHTML = "";

    arrayOfPeople.forEach((e) => {
  
        
        contentInvite.innerHTML += `

                 <div class=" parent-delete flex justify-between items-center py-4 px-3 border-b-4 border-[#24252b] gap-4 flex-wrap" id = ${e.id}>
                  <div class="l-invite flex items-center gap-3 ">
                    <img src="./Images/main.png" class="w-9 h-9 rounded-full" alt="">
                    <div class="first-value ">
                      <span class="text-red font-bold text-xl inline-block">${e.firstName} ${e.lastName}</span>
                      <span class="text-white bg-secondary pt-1 pb-2 px-3 rounded-xl font-bold ml-0 md:ml-2 my-5 md:my-1 inline-block">Pending</span>
                      <p class="text-secondary text-[11px] font-bold tracking-wide">${e.email}</p>
                    </div>
                  </div>

                  <div class="r-invite flex flex-wrap  gap-4">
                    <button class="resend-invite bg-[#0075ff] text-white py-1 px-3 rounded-lg">Resend Invite</button>
                    <button class="remove-invite bg-[#ca5374] text-white py-1 px-3 rounded-lg">Remove Invite</button>
                  </div>
                </div>
        `

    })


}

// TriggerLocalStorage

function triggerLocalStorage() {

    let Data = window.localStorage.getItem("Users")

    if(Data) {

        addPeopleToPage(JSON.parse(window.localStorage.getItem("Users")))

    }


}

//DeleteUser


function deleteInviteUser() {


    let removeInviters = document.querySelectorAll(".remove-invite");

    removeInviters.forEach((removeInviter) => {
        removeInviter.addEventListener("click", (e) => {
            let parentOfInviter = e.target.closest(".parent-delete");
            let deleterId = parentOfInviter.id 
            
            if (parentOfInviter) {
                parentOfInviter.remove();
            }
            arrayOfPeople = arrayOfPeople.filter((e) => e.id != deleterId)
            
            addDataToLocalstorage(arrayOfPeople)
          
        });
    });


}
deleteInviteUser()


// user-security-bg


function removeBackground() {
    let switchBackground = document.querySelectorAll(".user-security li")

    switchBackground.forEach((li) => {
        li.addEventListener("click" , () => {
            switchBackground.forEach((li) => {
                li.classList.remove("securing")
            })
            li.classList.add("securing")
      
        })
    })
}
removeBackground()