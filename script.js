const addbox = document.querySelector("#addbox")
const tasklist = document.querySelector("#tasklist")

addbox.addEventListener(
    "keyup",
    function(event) {
        if (event.key == "Enter") {
            addlist(this.value)
            this.value = ""
        }
    }
)

const addlist = (item) => {

    const todo = document.createElement("li");
    todo.innerHTML = `
    <input type="checkbox" id="box" name="checkbox"> ${item}
    <i class = "fas fa-times"></i>    
    `;

  
      todo.querySelector("input[name=checkbox]").addEventListener(
        'change', 
        function() {
      todo.classList.toggle("done");
      }
        )

todo.querySelector("i").addEventListener(
"click",
function(){
    todo.remove()
   }
)

tasklist.appendChild(todo)
}


