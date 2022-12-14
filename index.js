let myArray = []
const inputBtnEl = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let retrievedData = localStorage.getItem("myArray");// retrieving our data and converting it back into an array
let myArraylist = JSON.parse(retrievedData);// retrieving our data and converting it back into an array
const deleteBtn = document.getElementById("delete-btn")



/*if (myArraylist) {

myArray = myArraylist
renderUrls()

}*/

deleteBtn.addEventListener("dblclick", ()=> {
 localStorage.clear()
    myArray = []
    renderUrls()
})

inputBtnEl.addEventListener("click",function() {
    
    myArray.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myArray", JSON.stringify(myArray)); //storing our array as a string
    renderUrls() 
})

function renderUrls() {

let listItems = ""
for (let i = 0; i < myArray.length; i++) {
    
    listItems += 
    `<li>
        <a target='_blank' href='${myArray[i]}'>
        ${myArray[i]}

        </a>

    </li>`
    
}
ulEl.innerHTML = listItems  
}
