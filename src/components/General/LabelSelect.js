export function LabelSelect({ text, options = [], id, name }) {
    return (
        <div className="labelSelect">
            <label htmlFor={id}>{text}</label>
            <select id={id} name={name}>
                {options.map((opt, idx) => (
                    <option key={idx} value={opt}>
                        {opt}
                    </option>
                ))}
            </select>
        </div>
    );
}