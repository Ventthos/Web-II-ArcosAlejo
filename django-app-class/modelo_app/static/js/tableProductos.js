function showLast(){
    fetch(DATA_ENDPOINT)
    .then((res)=>res.json())
    .then((value)=>{
        console.log(value)
        const lastFiveProduct = value.productos.slice(0,10)
        const table = document.querySelector("table")
        table.innerHTML = `
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Localidad</th>
                <th>Creado: </th>
                <th>Acción</th>
            </tr>
        `
        lastFiveProduct.forEach((producto)=>{
            const row = document.createElement("tr")
            row.innerHTML = `
                <td>${producto.name}</td>
                <td>$${producto.precio}</td>
                <td>${producto.localidad}</td>
                <td>${producto.created_at}</td>
            `
            const deleteButton = document.createElement("button")
            deleteButton.innerHTML = "Eliminar"
            deleteButton.classList.add("butonEliminar")
            deleteButton.addEventListener("click", function(){
                deleteData(producto.id)
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


document.addEventListener("DOMContentLoaded", function(){
    showLast()
})
