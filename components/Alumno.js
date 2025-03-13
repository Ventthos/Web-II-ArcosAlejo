function Alumno({nombre, materia, calificacion}){
    // Se debe poder ocultar con un botón
    const [mostrar, setMostrar] = React.useState(true);

    return(
        <div className="cardContainer">
            <div style={{display: mostrar? 'block':'None'}}>
                <p className="name">{nombre}</p>
                <br/>
                <p>{materia}</p>
                <br/>
                <p>{calificacion}</p>
                <br/>
            </div>
            <button onClick={()=>setMostrar(!mostrar)}>{mostrar?"Ocultar":"Mostrar"}</button>
        </div>
        
    )
}

window.Alumno = Alumno;