export function LabelInput({text, placeholder, type, id, ref}){
    return(
        <div className="labelInput">
            <label htmlFor={id}>{text}</label>
            <input type={type} id={id} placeholder={placeholder} ref={ref}/>
        </div>
    )
}