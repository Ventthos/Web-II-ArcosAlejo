export function LabelInput({ text, placeholder, type = "text", id, name }) {
    return (
        <div className="labelInput">
            <label htmlFor={id}>{text}</label>
            <input type={type} id={id} placeholder={placeholder} name={name} />
        </div>
    );
}