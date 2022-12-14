let myArray = []
const inputBtnEl = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let retrievedData = localStorage.getItem("myArray");// retrieving our data and converting it back into an array
let myArraylist = JSON.parse(retrievedData);// retrieving our data and converting it back into an array
const deleteBtn = document.getElementById("delete-btn")
const saveBtn = document.getElementById("save-btn");



if (myArraylist) {

myArray = myArraylist
renderUrls()

}

saveBtn.addEventListener("click", ()=> {
chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
myArray.push(tabs[0].url)
localStorage.setItem("myArray", JSON.stringify(myArray)); //storing our array as a string
renderUrls(myArray) 

})

})


//Adding parameter for refactoring the code(urls)
function renderUrls(urls) {

    let listItems = ""
    for (let i = 0; i < urls.length; i++) {
        
        listItems += 
        `<li>
            <a target='_blank' href='${urls[i]}'>
            ${urls[i]}
    
            </a>
    
        </li>`
        
    }
    ulEl.innerHTML = listItems  
    }
    
saveBtn.addEventListener("click", ()=> {

  
    

})

deleteBtn.addEventListener("dblclick", ()=> {
 localStorage.clear()
    myArray = []
    renderUrls(myArray)
})

inputBtnEl.addEventListener("click",function() {
    
    myArray.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myArray", JSON.stringify(myArray)); //storing our array as a string
    renderUrls(myArray) 
})

