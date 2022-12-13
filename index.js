let myArray = []
const buttonEl = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const UrlsFromLocalStorage = JSON.parse(localStorage("myArray"))
const deleteBtn = documnet.getElementById("delete-btn")



if (UrlsFromLocalStorage) {

myArray = UrlsFromLocalStorage
renderUrls()

}

deleteBtn.addEventListener("dblick", ()=>{

    localStorage.clear()
    myArray = []
    renderUrls()

})

buttonEl.addEventListener("click",function() {
    
    myArray.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myArray", JSON.stringify(myArray))
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
