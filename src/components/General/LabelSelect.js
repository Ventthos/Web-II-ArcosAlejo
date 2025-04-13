export function LabelSelect({text, options, id, ref}){
    return(
        <div className="labelSelect">
            <label htmlFor={id}>{text}</label>
            <select id={id} ref={ref}>
                {options.map((option, index) => {
                    return <option key={index} value={option}>{option}</option>
                })}
            </select>
        </div>
    )
}