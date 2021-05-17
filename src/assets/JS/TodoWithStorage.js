window.onload = () => {
    var mainDiv = document.getElementById("s-todo-list");
    if(mainDiv) {
        showTodoList();
        var submitbtn = document.getElementById("s-button");
        var inputTodo = document.getElementById("s-textbox");
        
        submitbtn.addEventListener('click', () => {
            var mylist = [];
            var getList = localStorage.getItem('todolist');
            var text = inputTodo.value;
            if(text.trim().length==0) {
                alert('Enter a Todo');
                return;
            }
            if(getList!=null) mylist = JSON.parse(getList);
            mylist.push(text);
            inputTodo.value='';
            localStorage.setItem('todolist',JSON.stringify(mylist));
            showTodoList();
        });

        function showTodoList() {
            var getList = localStorage.getItem('todolist');
            mainDiv.innerHTML='';
            var mylist = [];
            if(getList!=null) mylist = JSON.parse(getList);
            mylist.forEach((element, index) => {
                var div = document.createElement("DIV");
                mainDiv.appendChild(div);
                div.style.cssText = 'background-color:#f5f7fa;width:76%;min-height:50px;border-radius:5px;\
                color:black;padding-top:5px;padding-bottom-5px;padding-left:20px;padding-right:20px;font-size:25px;';
                div.innerHTML = element;
                var button = document.createElement("BUTTON");
                button.appendChild(document.createTextNode('Delete'));
                button.setAttribute("class","btn btn-sm btn-outline-danger py-0");
                button.style.cssText = 'float:right;margin-top:8px';
                button.addEventListener('click', () => {
                    mainDiv.removeChild(mainDiv.childNodes[index]);
                    mylist.splice(index,1);
                    localStorage.setItem('todolist',JSON.stringify(mylist));
                    showTodoList();
                })
                div.appendChild(button);
            });
        }
    }
}