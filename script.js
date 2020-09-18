var boxList = document.getElementsByClassName("item");
console.log(boxList);



for(var i=0; i<boxList.length;i++)
{
    var image = document.createElement("img");
    image.src="images/trash.svg";
    image.className="delete";
console.log(image);
    // boxList[i].nextElementSibling=image;
    boxList[i].insertAdjacentElement("afterend", image);
    console.log(boxList[i]);

}



var deleteImgs = document.getElementsByClassName("delete");
var i;
for(i =0; i<deleteImgs.length; i++){
    deleteImgs[i].onclick = function()
    {
        var divElement = this.parentElement;
        divElement.style.display = "none";
    }
}




function addTask(){
    console.log("enter");
    var taskDiv = document.createElement("div");
    taskDiv.className = "margin";
    console.log(taskDiv);
    var userTask = document.getElementById("task").value;
    document.getElementById("task").value="";
    
    console.log(userTask);
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.name = "check";
    checkBox.className = "box";
    checkBox.onchange = function(){
        check(this);
    }
    console.log(checkBox);
    // checkbox.value = "value";
    // checkbox.id = "id";
    var lable = document.createElement("lable");
    lable.className = "item";
    lable.innerHTML = userTask;
    console.log(lable);
    var binImg = document.createElement("img");
    binImg.src="images/trash.svg";
    binImg.className="delete";
       
    
    binImg.onclick = function(){
        var divElement = this.parentElement;
        divElement.style.display = "none";
    };


    taskDiv.appendChild(checkBox);
    taskDiv.appendChild(lable);
    taskDiv.appendChild(binImg);
    console.log(taskDiv);



    var mainDiv = document.getElementById("list");
    mainDiv.appendChild(taskDiv);
    var br = document.createElement("br");
    mainDiv.appendChild(br);
    console.log(mainDiv);


    console.log("exit");
} 

function removeAll(){
    var list = document.getElementById("list");
    list.innerHTML = "";
}

function check(checkbox){
    // if (checkbox.checked) {
    //     alert ("hi");
    //     } 
        // else {
    //     alert ("bye");
    //     }

    if (checkbox.checked) {
        // alert ("hi");
        var x = checkbox.nextElementSibling;
        console.log(x);
        var y =  x.innerHTML;
        y=y.strike();
        x.innerHTML=y;
        console.log(x);
    }
    else {
        // alert ("bye");
        // var x = document.getElementsByTagName('strike');
        // console.log(x);
        // lable.removeChild('strike');

        var x = checkbox.nextElementSibling;
        var child = x.firstElementChild.innerHTML;
        console.log(child);
        x.removeChild(x.firstElementChild);
        console.log(x);
          x.innerHTML=child;
        console.log(x);
    }
}


