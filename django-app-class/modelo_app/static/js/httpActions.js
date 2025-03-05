const buttonAdd = document.querySelector("#addEvent")
const freeSpace = document.querySelector(".freeSpace")


function deleteData(id){
    const token = document.querySelector("#csrf_token").value
    fetch(DATA_ENDPOINT, {
        method: 'DELETE',
        headers:{
            "X-CSRFToken": token,
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({id: id})
    }).then((res)=>res.json())
    .then((value)=>{
        showLast()
        showAlert(value)
    }).catch((error) =>{
        console.log(error)
    })
}

function showAlert(data){
    console.log(data)
    const status = data.status == "success"
    const message = data.message
    let alert = document.createElement("div")
    alert.innerHTML = `
        <div class="alert alert-error">
            <p>${message}</p>
        </div>
        `

    if(status){
        alert.innerHTML = `
        <div class="alert alert-success">
            <p>${message}</p>
        </div>
        `    
    }


    
    freeSpace.appendChild(alert)
    setTimeout(()=>{
        freeSpace.removeChild(alert)
    }, 5000)  
}

buttonAdd.addEventListener("click", function(event){
    event.preventDefault()
    const form = document.querySelector("#formEvent")

    const formData = new FormData(form)

    const data = {}
    const token = document.querySelector("#csrf_token").value
    formData.forEach((value, key)=>{
        data[key] = value
    })

    console.log(data)

    fetch(DATA_ENDPOINT, {
        method: 'POST',
        headers:{
            "X-CSRFToken": token,
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)

    }).then((res)=>res.json())
    .then((value)=>{
        showAlert(value)
        showLast()
    }).catch((error) =>{
        console.log(error)
    })

})
