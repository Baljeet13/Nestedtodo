// const section = document.querySelector(".section-category");
const form = document.querySelector(".form-category");

// const text = document.querySelector(".text-category");
// console.log(text.textContent);

const input_text = document.querySelector("#input");
const category_ul = document.querySelector(".mainul");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = input_text.value;
    const newul = document.createElement("ul");
     newul.setAttribute("id","ul")
    newul.setAttribute("ondragstart","dragStart(event)")
    newul.setAttribute("draggable","true")
    newul.setAttribute("ondragover","dragOver(event)")
    const innerLIHTML = `
  <li class='pop text-white text-uppercase'style="backdrop-filter:blur(3px) " >
                <div class="text-category">${inputValue}</div>
                <input type="text" placeholder='enter task' class="text-category"/>
                <div class="btn1 " style="margin-bottom:14px"> 
                    <button class ="subList1  btn btn-outline-success"  onclick="add()">Add</button>
                    <button class ="subList2  btn btn-outline-warning"   onclick="edit()">Edit</button>
                    <button class ="subList3  btn btn-outline-danger"   onclick="del()">Delete</button>
                    
                </div>
     </li>      `;

    newul.innerHTML = innerLIHTML;
    console.log(newul)
    category_ul.append(newul);
    input_text.value = "";
});

function add() {
    let newinputval = event.target.parentNode.parentNode.children;
    console.log(newinputval)
    // console.log(newinputval[1].value)
    const inputValue = newinputval[1].value;
    console.log(inputValue)
    const newLi = document.createElement("li");
    // newLi.setAttribute("id","li")
    newLi.setAttribute("ondragstart","dragStart(event)")
    newLi.setAttribute("draggable","true")
    newLi.setAttribute("ondragover","dragOver(event)")
    const innerLIHTML = `<div class='pop' style="backdrop-filter:blur(4px)">
                <span class="text-category text-light text-uppercase">${inputValue}</span>
            
                <input  class="text-category" placeholder='enter another' />
                
                <div class="btn2" style='margin-left:45px;margin-bottom:12px '> 
                    <button class ="subList1  btn btn-outline-success"   onclick="add()">Add</button>
                    <button class ="subList2  btn btn-outline-warning"   onclick="edit()">Edit</button>
                    <button class ="subList3  btn btn-outline-danger"  onclick="del()">Delete</button>
                  
                </div>
                </div>
                
           `;

    newLi.innerHTML = innerLIHTML;
    let li = event.target.parentNode.parentNode;
    console.log(li)
    li.append(newLi);
    newinputval[1].value="";
}


function del(){
    
    let li=event.target.parentNode.parentNode.parentNode;
    console.log(li)
    li.remove();;
    
}

function edit(){
    
    let edit=event.target.parentNode.parentNode.children;
    console.log(edit)
    let index0=edit[0]
    if(edit[1].value!=""){ 
    let inner=edit[1].value
    index0.innerHTML=inner;
    edit[1].value="";}
    
}

var row;
function dragStart(event) {
    row = event.target;
}
function dragOver(event) {
    
    event.preventDefault();
    let over=event.target.parentNode;
    over.append(row)
}