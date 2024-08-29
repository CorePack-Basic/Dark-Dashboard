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




// Data Of Task

let inputTitleTask = document.querySelector(".task-title input")

let inputMessageTask = document.querySelector(".custom-message input")

let levelTask = document.querySelector(".select-level select")

let addTask = document.querySelector(".add button")

let cancelTask = document.querySelector(".cancel button")

let showAddTask = document.querySelector(".add-task")


let dataOfTasks = [];

//Trigger Function
triggerLocalStorage()

// Function Adding
function AddDataToTask() {

    let task = {

        id: Date.now(),

        title: inputTitleTask.value,

        message: inputMessageTask.value,

        level: levelTask.value

    }

    if (inputMessageTask.value.trim() != "" && inputTitleTask.value.trim() != "") {
        dataOfTasks.push(task)
        localStorageOfDatatask()
        addDataFromArrayToPage(dataOfTasks)
        deleteElement()
        deleteBtn()

        inputMessageTask.value = "";
        inputTitleTask.value = "";

    }


}


function triggerLocalStorage() {

    if (window.localStorage.getItem("data-task")) {
        dataOfTasks = JSON.parse(window.localStorage.getItem("data-task"))
        addDataFromArrayToPage(dataOfTasks);
    }

}


function localStorageOfDatatask() {

    window.localStorage.setItem("data-task", JSON.stringify(dataOfTasks))
}

function addDataFromArrayToPage(dataOfTasks) {

    let contentBox = document.querySelector(".adding-element");

    contentBox.innerHTML = "";

    dataOfTasks.forEach((task) => {

        contentBox.innerHTML += `<div data-set = ${task.id} draggable="true" class="box bg-middle_color p-7  w-full xl:w-[49%] rounded-md">
                                    <div class="flex justify-between items-center">
                                        <div class="title flex items-center gap-3">
                                            <div class="task text-2xl font-semibold text-white">${task.title}</div>
                                            <span class="block bg-levels py-1 px-3 mt-[3px] rounded-lg text-red">${task.level}</span>
                                        </div>
                                          <div data-set=${task.id} class="dotted cursor-pointer relative transition  ">
                                            <i class="fa-solid fa-ellipsis-vertical text-gray-400 text-[17px]"></i>
                                            <div data-set=${task.id} class="delete transition absolute left-[-71px] top-[35px] bg-[#6a6a6a] px-4 py-2 text-[#f0f0f0] opacity-0 rounded-md scale-x-0 ">
                                                <span class="block">Delete</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="message-task block my-5 text-[17px] font-bold  text-secondary">${task.message}</span>
        
                                    <div class="images-middle flex items-center">
                                        <img src="./Images/main.png" class="w-10 h-10 -ml-1 rounded-full" alt="">
                                        <img src="./Images/main.png" class="w-10 h-10 -ml-1 rounded-full" alt="">
                                        <img src="./Images/main.png" class="w-10 h-10 -ml-1 rounded-full" alt="">
                                        <img src="./Images/main.png" class="w-10 h-10 -ml-1 rounded-full" alt="">
                                        <img src="./Images/main.png" class="w-10 h-10 -ml-1 rounded-full" alt="">
                                    </div>
                                </div>
                        `

    });

}
addDataFromArrayToPage(dataOfTasks)

openCloseTask()
function openCloseTask() {

    let addNewTask = document.querySelector(".main-box")

    let showAddTask = document.querySelector(".add-task")

    let closeTask = document.querySelector(".icon-x")

    addNewTask.addEventListener("click", () => {
        showAddTask.style.transform = 'translateX(0)'

    })



    closeTask.addEventListener("click", () => {
        showAddTask.style.transform = 'translateX(-200%)'
    })
}


addTask.addEventListener("click", AddDataToTask)


cancelTask.addEventListener("click", () => {
    showAddTask.style.transform = 'translateX(-200%)'
})
addTask.addEventListener("click", () => {
    showAddTask.style.transform = 'translateX(-200%)'

})


function deleteBtn() {

    let dotted = document.querySelectorAll(".dotted")

    dotted.forEach((e) => {
        e.addEventListener("click", () => {
            e.classList.toggle("scaling")
        })
    })
    deleteElement()
}
deleteBtn()



function deleteElement() {
    let deleteElement = document.querySelectorAll(".delete");

    deleteElement.forEach((e) => {
        e.addEventListener("click", () => {

            let closestElement = e.closest(".box")


            if (closestElement) {
                let idElement = closestElement.getAttribute("data-set")

                closestElement.remove()

                dataOfTasks = dataOfTasks.filter((e) => e.id != idElement)

                localStorageOfDatatask()

                addDataFromArrayToPage(dataOfTasks)

                deleteBtn()
            }
        })
    })

}
deleteElement()

// Dragging

let items = document.querySelectorAll(".box")
let sortableList = document.querySelector(".adding-element")


items.forEach((item) => {
    item.addEventListener("dragstart", () => {
        setTimeout(() => {
            item.classList.add("dragging")
        }, 0);
    })

    item.addEventListener("dragend", () => {
        item.classList.remove("dragging")
    })
})

const initSortableList = (e) => {
    let draggingItem = sortableList.querySelector(".dragging");

   
    if (!draggingItem) return;

    let siblings = [...sortableList.querySelectorAll(".box:not(.dragging)")];
    let nextSibling = siblings.find((sibling) => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });


    if (nextSibling && draggingItem) {
        sortableList.insertBefore(draggingItem, nextSibling);
    } else if (draggingItem) {
        sortableList.appendChild(draggingItem); 
    }
}

sortableList.addEventListener("dragover", initSortableList);


sortableList.addEventListener("dragover", initSortableList);


// Project

let processing = {

    going: {
        title: ["Startup Web with Responsive", "Work On Design With Responsive", "Professional at Responsive", "End Project with customer"],
    },
    pending: {
        title: ["Product Design & App Desgin", "How Can i Buy only the design", "Start up New Design", "ReChange For Some Tamplates at Small Media"]
    }

}

let buttonsProcessing = document.querySelectorAll(".project-index button")



buttonsProcessing.forEach((btn) => {


    btn.addEventListener("click", () => {
        buttonsProcessing.forEach((e) => {
            e.classList.remove("active_btn")
        })
        btn.classList.add("active_btn")
    })

})

function goingPending() {
    let content_project = document.querySelector(".content-project")
    let goingBtn = document.querySelector(".going");
    let pendingBtn = document.querySelector(".pending");

    processing.going.title.forEach((e) => {
        content_project.innerHTML += `
                   <div class="box-project bg-middle_color p-4  w-full xl:w-[49%] rounded-md">
                                <div class="up flex gap-5 items-center mb-3">
                                    <div class="icon-rocket flex justify-center items-center w-10 h-10 bg-[#1a1c20] rounded-full">
                                        <i class="fa-solid fa-rocket text-xl mt-1 text-[#777777]"></i>
                                    </div>

                                    <div class="date-progress">
                                        <h3 class="text-white font-normal text-[17px] md:*:font-bold mb-1 md:text-xl">${e}</h3>
                                        <p class="text-secondary">
                                            <i class="fa-solid fa-clock"></i>
                                            12:00 PM - 8:30 PM
                                        </p>
                                    </div>
                           
                                </div>

                                <span class="block text-secondary">6 days left</span>

                                <div class="flex justify-between items-center mb-3">
                                    <div class="process w-4/5 h-[5px]  rounded-lg  bg-[#1a1c20]">
                                        <span class="block w-3/4 h-[5px] bg-slate-500"></span>
                                    </div>

                                    <span class="block text-white font-bold">78%</span>
                                </div>

                                <div class="btn-project flex flex-col flex-wrap gap-4  justify-start md:flex md:justify-between md:items-center md:flex-row mt-7">
                                    <div class="flex-images flex items-center gap-4">
                                        <div class="images flex items-center">
                                            <img src="./Images/Project_Image/1.jpg" class="w-8 h-8 rounded-full "  alt="">
                                            <img src="./Images/Project_Image/2.jpg" class="w-8 h-8 rounded-full -ml-2"  alt="">
                                            <img src="./Images/Project_Image/3.jpg" class="w-8 h-8 rounded-full -ml-2"  alt="">
                                            <img src="./Images/Project_Image/4.jpg" class="w-8 h-8 rounded-full -ml-2"  alt="">
                                            <img src="./Images/Project_Image/5.jpg"  class="w-8 h-8 rounded-full -ml-2"  alt="">
                                        </div>
                                        <span class="text-white font-bold font-sans">T:Will</span>
                                    </div>

                                    <button class="block bg-bluer text-white py-1 px-4 rounded-md ">View Project</button>
                                </div>
                        </div>
        `
    })

    goingBtn.addEventListener("click", () => {

        content_project.innerHTML = "";

        processing.going.title.forEach((e) => {
            content_project.innerHTML += `
                       <div class="box-project bg-middle_color p-4  w-full xl:w-[49%] rounded-md">
                                    <div class="up flex gap-5 items-center mb-3">
                                        <div class="icon-rocket flex justify-center items-center w-10 h-10 bg-[#1a1c20] rounded-full">
                                            <i class="fa-solid fa-rocket text-xl mt-1 text-[#777777]"></i>
                                        </div>
    
                                        <div class="date-progress">
                                            <h3 class="text-white font-normal text-[17px] md:*:font-bold mb-1 md:text-xl">${e}</h3>
                                            <p class="text-secondary">
                                                <i class="fa-solid fa-clock"></i>
                                                12:00 PM - 8:30 PM
                                            </p>
                                        </div>
                               
                                    </div>
    
                                    <span class="block text-secondary">6 days left</span>
    
                                    <div class="flex justify-between items-center mb-3">
                                        <div class="process w-4/5 h-[5px]  rounded-lg  bg-[#1a1c20]">
                                            <span class="block w-3/4 h-[5px] bg-slate-500"></span>
                                        </div>
    
                                        <span class="block text-white font-bold">78%</span>
                                    </div>
    
                                    <div class="btn-project flex flex-col flex-wrap gap-4  justify-start md:flex md:justify-between md:items-center md:flex-row mt-7">
                                        <div class="flex-images flex items-center gap-4">
                                            <div class="images flex items-center">
                                                <img src="./Images/Project_Image/1.jpg" class="w-8 h-8 rounded-full "  alt="">
                                                <img src="./Images/Project_Image/2.jpg" class="w-8 h-8 rounded-full -ml-2"  alt="">
                                                <img src="./Images/Project_Image/3.jpg" class="w-8 h-8 rounded-full -ml-2"  alt="">
                                                <img src="./Images/Project_Image/4.jpg" class="w-8 h-8 rounded-full -ml-2"  alt="">
                                                <img src="./Images/Project_Image/5.jpg"  class="w-8 h-8 rounded-full -ml-2"  alt="">
                                            </div>
                                            <span class="text-white font-bold font-sans">T:Will</span>
                                        </div>
    
                                        <button class="block bg-bluer text-white py-1 px-4 rounded-md ">View Project</button>
                                    </div>
                            </div>
            `
        })

    })

    pendingBtn.addEventListener("click", () => {
        content_project.innerHTML = "";

        processing.pending.title.forEach((e, index) => {
            content_project.innerHTML += `
                       <div class="box-project bg-middle_color p-4  w-full xl:w-[49%] rounded-md">
                                    <div class="up flex gap-5 items-center mb-3">
                                        <div class="icon-rocket flex justify-center items-center w-10 h-10 bg-[#1a1c20] rounded-full">
                                            <i class="fa-solid fa-rocket text-xl mt-1 text-[#777777]"></i>
                                        </div>
    
                                        <div class="date-progress">
                                            <h3 class="text-white font-normal text-[17px] md:*:font-bold mb-1 md:text-xl">${e}</h3>
                                            <p class="text-secondary">
                                                <i class="fa-solid fa-clock"></i>
                                                12:00 PM - 8:30 PM
                                            </p>
                                        </div>
                               
                                    </div>
    
                                    <span class="block text-secondary">6 days left</span>
    
                                    <div class="flex justify-between items-center mb-3">
                                        <div class="process w-4/5 h-[5px] rounded-lg  bg-[#1a1c20]">
                                            <span class="block w-3/4 h-[5px] bg-slate-500"></span>
                                        </div>
    
                                        <span class="block text-white font-bold">78%</span>
                                    </div>
    
                                    <div class="btn-project flex flex-col flex-wrap gap-4  justify-start md:flex md:justify-between md:items-center md:flex-row mt-7">
                                        <div class="flex-images flex items-center gap-4">
                                            <div class="images flex items-center">
                                                <img src="./Images/Project_Image/1.jpg" class="w-8 h-8 rounded-full "  alt="">
                                                <img src="./Images/Project_Image/2.jpg" class="w-8 h-8 rounded-full -ml-2"  alt="">
                                                <img src="./Images/Project_Image/3.jpg" class="w-8 h-8 rounded-full -ml-2"  alt="">
                                                <img src="./Images/Project_Image/4.jpg" class="w-8 h-8 rounded-full -ml-2"  alt="">
                                                <img src="./Images/Project_Image/5.jpg"  class="w-8 h-8 rounded-full -ml-2"  alt="">
                                            </div>
                                            <span class="text-white font-bold font-sans">T:Will</span>
                                        </div>
    
                                        <button class="block bg-bluer text-white py-1 px-4 rounded-md ">View Project</button>
                                    </div>
                            </div>
            `
        })
    })


}
goingPending()



let arrayOfTable = [
    {
        userName: "Ayman M.Mohamed",
        img: "./Images/TableImages/img-1.jpg",
        users: "3 Parents(Full Access)",
        role: "Admin",
        phone: "0122875469",
        expireDate: "8/6/2022",
        status: "Active"
    },
    {
        userName: "Mahmoud R.Khaled",
        img: "./Images/TableImages/img-2.jpg",
        users: "28 Customers",
        role: "Partner",
        phone: "(480)555-0218",
        expireDate: "8/6/2012",
        status: "Active"
    },
    {
        userName: "Ahmed M.Mohamed",
        img: "./Images/TableImages/img-3.jpg",
        users: "54 Customers",
        role: "Partner",
        phone: "(480)555-0218",
        expireDate: "1/3/2022",
        status: "Pending"
    },
    {
        userName: "Waleed M.Mohamed",
        img: "./Images/TableImages/img-4.jpg",
        users: "1 Customers",
        role: "Partner",
        phone: "(480)555-0218",
        expireDate: "2/3/2011",
        status: "Pending"
    },
    {
        userName: "Khaled S.Ahmed",
        img: "./Images/TableImages/img-5.jpg",
        users: "5 Customers",
        role: "Admin",
        phone: "(480)555-0218",
        expireDate: "8/10/2022",
        status: "Active"
    },
    {
        userName: "Mona W.Mohamed",
        img: "./Images/TableImages/img-6.jpg",
        users: "2 Customers",
        role: "Partner",
        phone: "(480)555-0218",
        expireDate: "8/10/2002",
        status: "Active"
    },
    {
        userName: "Ayman M.Mohamed",
        img: "./Images/TableImages/img-7.jpg",
        users: "21 Customers",
        role: "Admin",
        phone: "(480)555-0218",
        expireDate: "2/6/2022",
        status: "Pending"
    },
    {
        userName: "Noha M.Mohamed",
        img: "./Images/TableImages/img-8.jpg",
        users: "3 Parents(Full Access)",
        role: "Admin",
        phone: "0122875469",
        expireDate: "5/6/2022",
        status: "Active"
    },
    {
        userName: "Hend M.Mohamed",
        img: "./Images/TableImages/img-9.jpg",
        users: "7 Customers",
        role: "Partner",
        phone: "(480)555-0218",
        expireDate: "1/6/2022",
        status: "Active"
    },
    {
        userName: "Nada M.Mohamed",
        img: "./Images/TableImages/img-10.jpg",
        users: "3 Parents(Full Access)",
        role: "Partner",
        phone: "(480)555-0218",
        expireDate: "8/4/2022",
        status: "Active"
    },
    {
        userName: "Mohsen M.Mohamed",
        img: "./Images/TableImages/img-2.jpg",
        users: "3 Parents(Full Access)",
        role: "Admin",
        phone: "(480)555-0218	",
        expireDate: "2/3/2022",
        status: "Active"
    },
    {
        userName: "Ramy M.Mohamed",
        img: "./Images/TableImages/img-3.jpg",
        users: "28 Customers",
        role: "Partner",
        phone: "(480)555-0218	",
        expireDate: "1/1/2023",
        status: "Active"
    },
    {
        userName: "Samir M.Mohamed",
        img: "./Images/TableImages/img-1.jpg",
        users: "7 Customers	",
        role: "Admin",
        phone: "(480)555-0218",
        expireDate: "8/6/2022",
        status: "Pending"
    },
    {
        userName: "Mohamed M.Mohamed",
        img: "./Images/TableImages/img-10.jpg",
        users: "28 Customers",
        role: "Partner",
        phone: "(480)555-0218",
        expireDate: "8/6/2022",
        status: "Active"
    },
    {
        userName: "Nabil M.Mohamed",
        img: "./Images/TableImages/img-2.jpg",
        users: "21 Customers",
        role: "Admin",
        phone: "(480)555-0218",
        expireDate: "8/6/2022",
        status: "Pending"
    },
    {
        userName: "Shaker M.Mohamed",
        img: "./Images/TableImages/img-5.jpg",
        users: "45 Customers",
        role: "Partner",
        phone: "0122875469",
        expireDate: "8/6/2022",
        status: "Pending"
    },
    {
        userName: "Farouk M.Mohamed",
        img: "./Images/TableImages/img-6.jpg",
        users: "11 Customers",
        role: "Admin",
        phone: "(480)555-0218",
        expireDate: "8/6/2022",
        status: "Pending"
    },
    {
        userName: "Monir M.Mohamed",
        img: "./Images/TableImages/img-7.jpg",
        users: "60 Customers",
        role: "Partner",
        phone: "(480)555-0218	",
        expireDate: "8/6/2012",
        status: "Active"
    },
    {
        userName: "Tammer M.Mohamed",
        img: "./Images/TableImages/img-8.jpg",
        users: "3 Parents(Full Access)",
        role: "Partner",
        phone: "(480)555-0218",
        expireDate: "5/6/2002",
        status: "Pending"
    },
    {
        userName: "Zizi M.Mohamed",
        img: "./Images/TableImages/img-1.jpg",
        users: "10 Customers",
        role: "Admin",
        phone: "(480)555-0218",
        expireDate: "11/6/2022",
        status: "Active"
    },
    {
        userName: "Mahmoud M.Mohamed",
        img: "./Images/TableImages/img-9.jpg",
        users: "90 Customers",
        role: "Partner",
        phone: "(480)555-0218",
        expireDate: "12/6/2022",
        status: "Pending"
    },
]



function tableData(arrayOfTable) {
    let tableTr = document.querySelector(".poem table tbody")
    tableTr.innerHTML = "";

    arrayOfTable.forEach((e) => {
        tableTr.innerHTML += `
                       <tr>
                                        <td class="p-2 flex items-center flex-wrap  border-b gap-y-2  border-b-[#393939]">
                                         <img src="${e.img}" class="w-8 h-8 mr-3 rounded-full" alt="">
                                            <span class="block">${e.userName}</span>   
                                        </td>
    
                                        <td class="p-2 border border-[#393939] ">${e.users}</td>
                                        <td class="p-2 border border-[#393939] " >${e.role}</td>
                                        <td class="p-2 border border-[#393939] " >${e.phone}</td>
                                        <td class="p-2 border border-[#393939] " >${e.expireDate}</td>
                                        <td class="p-2 border border-[#393939] " >${e.status}</td>
                         
                                    </tr>
      `
    })
}

tableData(arrayOfTable)


function filterTableData(arrayOfTable) {

    let selectRole = document.querySelector("#my_select")

    let selectSort = document.querySelector("#sortSelect")

    let cloneArray = [...arrayOfTable];

    // Select Sort

    selectSort.addEventListener("change", () => {


        if (selectSort.value == "basic") {

            tableData(arrayOfTable)

        }

        if (selectSort.value == "atp") {

            let adminToPartner = [...arrayOfTable];

            adminToPartner.sort((a, b) => {

                if (a.role == "Admin" && b.role == "Partner") {
                    return -1
                } else if (a.role == "Partner" && b.role == "Admin") {
                    return 1
                } else {
                    return 0
                }
            })

            tableData(adminToPartner)
        }

        if (selectSort.value == "pta") {

            let partnerToAdmin = [...arrayOfTable];

            partnerToAdmin.sort((a, b) => {

                if (a.role == "Partner" && b.role == "Admin") {
                    return -1
                } else if (a.role == "Admin" && b.role == "Partner") {
                    return 1
                } else {
                    return 0
                }
            })

            tableData(partnerToAdmin)
        }


    })

    // Select Role
    selectRole.addEventListener("change", () => {

        if (selectRole.value == "Admin") {

            let adminArray = [...arrayOfTable];

            adminArray = adminArray.filter((e) => e.role == "Admin")

            tableData(adminArray)

        }

        if (selectRole.value == "Partner") {

            let partnerArray = [...arrayOfTable];
            partnerArray = partnerArray.filter((e) => e.role == "Partner")

            tableData(partnerArray)

        }

        if (selectRole.value == "All") {
            tableData(arrayOfTable)
        }
    })



}
filterTableData(arrayOfTable)


let nums = document.querySelectorAll(".num")


function startCount(el) {
    let goal = parseInt(el.getAttribute("date-goal") * Math.random() * 7);
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count)
        }
    }, goal / 1000);


}
nums.forEach((num) => startCount(num))






