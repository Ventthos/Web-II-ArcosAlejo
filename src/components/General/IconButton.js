export function ButtonImage({
    iconURL,
    onClick,
    text,
    className
  }) {
    return (
      <button onClick={(e) => {
        e.stopPropagation();
        onClick(e); 
    }} className={"iconButton " + className}>
        <img src={iconURL} alt=""/>
        {text && <p>{text}</p>}
      </button>
    );
  }