var hideNav = document.querySelector(".hide_nav");
var showNav = document.querySelector(".close_nav");
var fullContent = document.querySelector(".kanban_content_wrapper");
var sidebar = document.querySelector(".kanban_sidebar");
var content = document.querySelectorAll(".kanban_content");
var tabBtn = document.querySelectorAll(".tab-btn");
var themeSwitch = document.querySelector("#themeSwitch");
var ellipseToggle = document.querySelector("#ellipseToggle");


let changeImg = false;
themeSwitch.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-theme');
    if (changeImg === true) {
        document.querySelector('.logo_desktop').src = './assets/logo-light.svg';
    } else {
        document.querySelector('.logo_desktop').src  = './assets/logo-dark.svg';
    }
    changeImg = !changeImg;
});

var obj = [];
document.addEventListener("DOMContentLoaded", function(){
    const fetchData = async () => {
    const dataGet = await fetch("data.json");
    const res = await dataGet.json();
    console.log(res)
    // Object.entries(res).forEach(function(key, index) {
    //     console.log(key[1][index].name);
    // });
        for(var item in res){
            obj = res[item];
            // console.log(obj.push({name: "amit"}))
            // console.log(obj);
            // obj.splice(0,3)
            // console.log(obj);
            const newTabEle = obj.map((i, index)=>{
                const newData = {
                    tab_name: i.name,
                    task_status: i.columns[index].name,
                    task_title: i.columns[0].tasks[0].title,
                    task_desc: i.columns[0].tasks[0].description, 
                    task_current_status: i.columns[0].tasks[0].status, 
                }
                return  `<li>
                            <a class="tab-btn ${index == 0 ? 'active':''}" data-id="${i.name.toLowerCase().split(" ")[0]}" href="#"><img class="active-img" src="./assets/icon-board.svg" alt="icon b0ard"><span>${i.name}</span></a>
                        </li>`
            }).join("");
            document.querySelector(".blank_list").innerHTML = newTabEle;
        }
        obj.push({
            name: 'Sports',
            columns:[
                {
                    name: "Cricket",
                    tasks: [
                        {
                            title: "Batting",
                            description: "",
                            status: "Todo",
                            subtasks: [
                                {
                                    title: "Sign up page",
                                    isCompleted: true
                                },
                            ]
                        },
                         {
                            title: "Batting",
                            description: "",
                            status: "Todo",
                            subtasks: [
                                {
                                    title: "Sign up page",
                                    isCompleted: true
                                },
                            ]
                        }
                    ]
                }
            ] 
        })
       
    }
    fetchData();
});

//     document.querySelector(".blank_list").innerHTML = newTabEle;
//    }


    // for(var item in jsonData){
    //     var obj = jsonData[item];
    //     console.log(obj);
    //     const newContentEle = obj.map((i, index)=>{
    //         const newData = {
    //             tab_name: i.name,
    //             task_status: i.columns[index].name,
    //             task_title: i.columns[0].tasks[0].title,
    //             task_desc: i.columns[0].tasks[0].description, 
    //             task_current_status: i.columns[0].tasks[0].status, 
    //         }
            // console.log(newData)
//             return  `<div class="item2 vertical_car">
//                         <div class="card_heading">
//                             <span class="circle"></span>
//                             <p class="p_text">${newData.task_status}</p>
//                         </div>
//                         <div class="card_content">
//                             <p class="task_title heading_xl">${newData.task_title}</p>
//                             <p class="subtask_title p_text">${i.columns[0].tasks[0].descriptionc}</p>
//                         </div>
//                     </div>`
//         }).join("");
//         document.querySelector(".kanban_content").innerHTML = newContentEle;
//     }




sidebar.addEventListener("click", function(e){
    const id = e.target.dataset.id;
    if(id){
        // remove active from buttons
        tabBtn.forEach(function(btn){
            btn.classList.remove("active");
            e.target.classList.add("active");
            console.log(e.target);
        })
        // remove active from other content
        content.forEach(function(singleContent){
            singleContent.classList.remove("active");
            singleContent.classList.add("d-none");
        })
        const contentElement = document.getElementById(id);
        contentElement.classList.remove("d-none");
        contentElement.classList.add("active");
    }
})

hideNav.addEventListener("click", function(){
    fullContent.classList.remove("kanban_content_wrapper");
    fullContent.classList.add("full_content_wrapper");
    sidebar.classList.remove("kanban_sidebar");
    sidebar.classList.add("d-none");
    showNav.classList.remove("d-none");
    showNav.classList.add("d-block");
})

showNav.addEventListener("click", function(){
    fullContent.classList.add("kanban_content_wrapper");
    fullContent.classList.remove("full_content_wrapper");
    sidebar.classList.add("kanban_sidebar");
    sidebar.classList.remove("d-none");
    showNav.classList.add("d-none");
    showNav.classList.remove("d-block");
})

/* ----------------------Jquery------------------------------------------ */
$(document).ready(function(){
    $("#ellipseToggle").click(function(){
        $(".add_task_sidenav").toggle();
    })
}); 
$(".add_task_sidenav .p_text").click(function(){
    $(".add_task_sidenav").hide();
})

// Your JSON data
const jsonData = obj;

// Find the "Marketing Plan" section in the JSON
const marketingPlan = jsonData.find(section => console.log(section) );
console.log(marketingPlan, "new data");

// Check if "Marketing Plan" was found and it has a "Todo" column
if (marketingPlan) {
  const todoColumn = marketingPlan.columns.find(column => column.name === "Todo");
  
  // Check if "Todo" column was found
  if (todoColumn) {
    // Find the second subtask (index 1) in the "tasks" array
    const secondSubtask = todoColumn.tasks[1];
    
    // Check if the second subtask was found
    if (secondSubtask) {
      // Change the "isCompleted" property to true
      secondSubtask.subtasks[1].isCompleted = true;
      
      // Output the updated JSON
      console.log(JSON.stringify(jsonData, null, 2));
    } else {
      console.error("Second subtask not found.");
    }
  } else {
    console.error("Todo column not found in Marketing Plan.");
  }
} else {
  console.error("Marketing Plan section not found.");
}
