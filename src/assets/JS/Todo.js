function placetodo() {
    var todo = document.getElementById("textbox");
    var text = todo.value.trim();
    if(text.length===0) {
        alert('Enter a Todo');
        return;
    }
    var todoList = document.getElementById("todo-list");
    var div = document.createElement("div");
    todoList.appendChild(div);
    div.style.cssText = 'background-color:#f5f7fa;width:76%;min-height:50px;border-radius:5px;\
    color:black;padding-top:5px;padding-bottom-5px;padding-left:20px;padding-right:20px;font-size:25px;';
    div.setAttribute("class","overflow-visible");
    div.innerHTML = text;
    todo.value = '';
    var button = document.createElement("BUTTON");
    button.appendChild(document.createTextNode('Delete'));
    button.setAttribute("class","btn btn-sm btn-outline-danger py-0");
    button.style.cssText = 'float:right;margin-top:8px';
    div.appendChild(button);
    div.addEventListener('click', () => {
        div.style.textDecoration = "1px line-through";
    });
    button.addEventListener('click', () => {
        todoList.removeChild(div);
    });
}