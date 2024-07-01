let btn = document.getElementById('creat_btn')
let creat_note=document.getElementById('creat_note')
let inputbox=document.getElementById('inputbox')
function showstorege(){
    creat_note.innerHTML=localStorage.getItem("mynote")
}
showstorege();
function updatestorage(){
    localStorage.setItem("mynote",creat_note.innerHTML)
}
btn.addEventListener('click',()=>{
    let input=document.createElement("p")
    let img=document.createElement("img")
    input.setAttribute("spellcheck","false")
    img.setAttribute("id","delete_btn")
    input.setAttribute("id","inputbox")
    input.setAttribute("contenteditable","true")
    img.src="images/delet.png"
    creat_note.appendChild(input).appendChild(img)
})
 
creat_note.addEventListener('click',function(e){
    if(e.target.tagName==="IMG"){
       e.target.parentElement.remove(); 
       updatestorage();
    }
    else if(e.target.tagName==="P"){
        inputbox=document.querySelectorAll('#inputbox')
        inputbox.forEach(nt => {
            nt.onkeypress=function(){
                updatestorage();
            }
        });   
    }
}) 