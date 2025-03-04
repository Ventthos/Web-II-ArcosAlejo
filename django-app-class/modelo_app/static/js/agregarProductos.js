const buttonAdd = document.querySelector("#addEvent")
const freeSpace = document.querySelector(".freeSpace")

function showLast(){
    fetch(PRODUCT_ENDPOINT)
    .then((res)=>res.json())
    .then((value)=>{
        const lastFiveProduct = value.productos.slice(0,5)
        const table = document.querySelector("table")
        table.innerHTML = `
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Localidad</th>
                <th>Acción</th>
            </tr>
        `
        lastFiveProduct.forEach((producto)=>{
            const row = document.createElement("tr")
            row.innerHTML = `
                <td>${producto.name}</td>
                <td>${producto.precio}</td>
                <td>${producto.localidad}</td>
            `
            const deleteButton = document.createElement("button")
            deleteButton.innerHTML = "Eliminar"
            deleteButton.classList.add("butonEliminar")
            deleteButton.addEventListener("click", function(){
                deleteProduct(producto.id)
            })
            const actions = document.createElement("td")
            actions.appendChild(deleteButton)
            row.appendChild(actions)
            
            table.appendChild(row)
        })
    }).catch((error) =>{
        console.log(error)
    })
}

function deleteProduct(id){
    const token = document.querySelector("#csrf_token").value
    fetch(PRODUCT_ENDPOINT, {
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
            <p>Producto agregado correctamente</p>
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

    fetch(PRODUCT_ENDPOINT, {
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

document.addEventListener("DOMContentLoaded", function(){
    showLast()
})
