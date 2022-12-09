//chrome://extensions/
let myArray = []
const buttonEl = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")


buttonEl.addEventListener("click",function() {
    
    myArray.push(inputEl.value)
    inputEl.value = ""
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
