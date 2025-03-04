function showLast(){
    fetch(DATA_ENDPOINT)
    .then((res)=>res.json())
    .then((value)=>{
        const lastFiveEvents = value.eventos.slice(0,5)
        const table = document.querySelector("table")
        table.innerHTML = `
            <tr>
                <th>Nombre</th>
                <th>Fecha de inicio</th>
                <th>Fecha de fin</th>
                <th>Localidad</th>
                <th>Acciones</th>
            </tr>
        `
        lastFiveEvents.forEach((evento)=>{
            const row = document.createElement("tr")
            row.innerHTML = `
                <td>${evento.nombre}</td>
                <td>${evento.fecha_inicio}</td>
                <td>${evento.fecha_fin}</td>
                <td>${evento.localidad}</td>
            `
            const deleteButton = document.createElement("button")
            deleteButton.innerHTML = "Eliminar"
            deleteButton.classList.add("butonEliminar")
            deleteButton.addEventListener("click", function(){
                deleteData(evento.id)
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
