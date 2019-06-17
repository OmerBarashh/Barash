const form = document.getElementById("form")
const name = document.getElementById("name")
const button = document.getElementById("button")

const check = function(){
    const salary = document.getElementById("salary").value
    const nameL = name.value.length
    const bd = document.getElementById("bd").value.length
    const num = document.getElementById("num").value.length
    if(nameL <= 2){
       const a = document.createElement("div")
       a.innerHTML = "Name is missing"
       form.appendChild(a)
    }
    if(salary < 10000 || salary > 16000){
        const a = document.createElement("div")
        a.innerHTML = "Salary must be between 10,000 and 16,0000"
        form.appendChild(a)
        
    }
    if(bd != 10){
        const a = document.createElement("div")
        a.innerHTML = "Birthday must be formatted dd/mm/yyyy"
        form.appendChild(a)
    }
    if (num != 10){
        const a = document.createElement("div")
        a.innerHTML = "Phone number must be 10 digits"
        form.appendChild(a)
    }
}
