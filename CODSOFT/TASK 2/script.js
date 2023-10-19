document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="check">
                <i class="fa-solid fa-check" style="color: #ffffff;"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".check");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        document.querySelector("#newtask input").value = "";
    }
}

let form = document.querySelector("form");
let ls = localStorage.getItem('todo');
let todo = ls? JSON.parse(ls) : [];

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let inpData = form[0].value;
    todo.push(inpData)
    localStorage.setItem('todo', JSON.stringify(todo))
})