const input = document.querySelector(".input-b");
const button = document.querySelector(".btn");
const todolist = document.querySelector(".todo-list");

button.addEventListener("click",addtodo);
todolist.addEventListener("click", deltodo);

function addtodo(event){
    event.preventDefault();

    const tododiv = document.createElement("div");
    tododiv.classList.add("todo-container");

   
    const todoitem = document.createElement("li");
    todoitem.classList.add("todo-item");
    todoitem.innerText = input.value;
    tododiv.appendChild(todoitem);

    
    const dbtn = document.createElement("button");
    dbtn.classList.add("delet-btn");
    dbtn.innerHTML='<i class="fa-solid fa-trash"></i>';
    tododiv.appendChild(dbtn);

    const cmpbtn = document.createElement("button");
    cmpbtn.classList.add("complete-btn");
    cmpbtn.innerHTML='<i class="fa-solid fa-check"></i>';
    tododiv.appendChild(cmpbtn);

    todolist.appendChild(tododiv);
    input.value="";
}

function deltodo(event){
   // console.log(event.target);
    const item = event.target;
    if (item.classList[0] === "delet-btn"){
       const delitem = item.parentElement;
       delitem.remove();
    }
    if (item.classList[0] === "complete-btn"){
        console.log(item.classlist);
        const delitem = item.parentElement;
        delitem.classList.toggle("completed");
    }
}
