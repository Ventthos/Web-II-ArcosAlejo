export default function Calculadora() {
    const [numero_1, setNumero_1] = useState(0)
    const [numero_2, setNumero_2] = useState(0)
    const [total, setTotal] = useState(0)
    const [operador, setOperador] = useState("")

    function sumar(){
        const total = numero_1 + numero_2
        setTotal(total)
    }

    function restar(){
        const total = numero_1 - numero_2
        setTotal(total)
    }

    function asignarValores(numero){
        
    }

    return(
        <div>
            <h1>Calculadora</h1>
            <div className="calculadora">
                <button className="btn">1</button>
                <button className="btn">2</button>
                <button className="btn">3</button>
                <button className="btn" onClick={()=>setOperador("+")}>+</button>
                <br/>
                <button className="btn">4</button>
                <button className="btn">5</button>
                <button className="btn">6</button>
                <button className="btn" onClick={()=>setOperador("-")}>-</button>
                <br/>
                <button className="btn">7</button>
                <button className="btn">8</button>
                <button className="btn">9</button>
                <button className="btn" onClick={()=>setOperador("*")}>*</button>
                <br/>
                <button className="btn">0</button>
                <br/>
            </div>
        </div>
    )
}