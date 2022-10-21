let myForm = document.querySelector("#test-form")


//aby se to neustale nevytvarelo nove a neprepisovalo stare hodnoty. proto i promenna var 
if (localStorage.getItem("criminals") == null) {
    var myArray = []
} else {
    myArray = JSON.parse(localStorage.getItem("criminals"))
}


myForm.addEventListener("submit", function(event) {
event.preventDefault()

myArray.push({
    id: "",
    firstName: event.target.elements.firstName.value,
    secondName: event.target.elements.secondName.value,
    crime: event.target.elements.crime.value
})

event.target.elements.firstName.value = ""
event.target.elements.secondName.value = ""
event.target.elements.crime.value = ""

myArrayJSON = JSON.stringify(myArray)
localStorage.setItem("criminals", myArrayJSON)

})

let toList = document.querySelector(".to-list")
toList.addEventListener("click", function() {   
    if (localStorage.getItem("criminals") == null) {

        let paragraph = document.createElement("p")
        paragraph.textContent = "Databaze je prazdna"
        document.querySelector(".list-criminals").appendChild(paragraph)
        
    } else {

        let myStorage = localStorage.getItem("criminals")
    let myStorageJSON = JSON.parse(myStorage)

    document.querySelector(".list-criminals").innerHTML = ""

    myStorageJSON.forEach(function(oneCriminal) {
        let paragraph = document.createElement("p")

        paragraph.innerHTML = `Jmeno: ${oneCriminal.firstName}, <br>
        Prijmeni: ${oneCriminal.secondName}, <br>
        Zlocin: ${oneCriminal.crime}`

        paragraph.classList.add("basic-styles")

        document.querySelector(".list-criminals").appendChild(paragraph)
    })

    }
    
})