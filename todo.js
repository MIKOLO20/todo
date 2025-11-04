let todo = []
let show;
let k;
document.getElementById("update").style.display = "none"

let localtodo = JSON.parse(localStorage.getItem("todo"))

if(localtodo){
    todo = localtodo;
}
displayTodo()

let todayDate = new Date();
let myDate = new Date("02-02-2000/01:45:20");
console.log(todayDate);
console.log(myDate);

let dueTask = todo.find((task)=>{
 let taskDate = new Date(task.date);
 console.log(task.date);
console.log(taskDate);
 return taskDate <= todayDate;
});

if(dueTask){
    alert("You have a pending task:" +  dueTask.task);
}



function addTodo(){
    let task = document.getElementById("task").value;
     let date = document.getElementById("date").value;
     let comments = document.getElementById("comments").value;

 if(task == "" || date == "" || comments == ""){
    alert("All fields are required")
 }
else{
    let todoObj = {
        task,
        date,
        comments,
          }
    todo.push(todoObj);

       document.getElementById("task").value = "";
      document.getElementById("date").value = "";
      document.getElementById("comments").value = "";

      displayTodo();
    console.log(todo);
    localStorage.setItem("todo", JSON.stringify(todo));
}
}


function displayTodo(){
  show = "";
  for (let i in todo){
    show += `<tr>
    <td>${Number(i)}</td>
     <td>${todo[i].task}</td>
      <td>${todo[i].date}</td>
       <td>${todo[i].comments}</td>
        <td><button class="btn btn-warning text-white" onclick="editTodo(${i})">Edit</button></td>
        <td><button class="btn btn-danger text-white" onclick="deleteTodo(${i})">Delete</button></td>
      </tr>`;
       }
       document.getElementById("display").innerHTML = show;
}

function editTodo(i){
    document.getElementById("update").style.display = "block";
    document.getElementById("add").style.display = "none";


    let oldTask = todo[i].task;
    let oldDate = todo[i].date;
    let oldComments = todo[i].comments;

    document.getElementById("task").value = oldTask;
    document.getElementById("date").value = oldDate;
    document.getElementById("comments").value = oldComments;

    k = i;
}
function updateTodo(){
      let newTask =  document.getElementById("task").value;
      let newDate =  document.getElementById("date").value;
      let newComments =  document.getElementById("comments").value;

      todo[k].task = newTask;
      todo[k].date = newDate;
      todo[k].comments = newComments;

       document.getElementById("task").value = "";
        document.getElementById("date").value = "";
         document.getElementById("comments").value = "";


   document.getElementById("update").style.display = "none";
    document.getElementById("add").style.display = "block";

    displayTodo()
}
function deleteTodo(i){
    todo.splice(i, 1);
     localStorage.setItem("todo", JSON.stringify(todo));
    displayTodo()
}