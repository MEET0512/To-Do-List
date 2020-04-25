const btn = document.getElementById('addbtn');
const title = document.getElementById('title');

btn.onclick = function() {
    var list = document.getElementById('do_list');
    var text = title.value;
    if( text == "" ) {
        alert("Pleaes enter title");
        return;
    }
    var task = document.createElement("li");
    task.innerHTML = text;
    var span = document.createElement("span");
    span.innerHTML = "&#10005;";
    span.classList.add("close");
    
    task.onclick = function() {
        task.classList.toggle("checked");
    }
    
    span.onclick = function() {
        var pre = this.parentElement;
        pre.classList.remove("checked");
        setTimeout(function() { task.style.opacity = "0" }, 0);
        setTimeout(function() { list.removeChild(pre) }, 1000);
    }
    
    task.appendChild(span);
    list.appendChild(task);
    
    setTimeout(function() { task.style.opacity = "1" }, 100);
    
    title.value = "";
}