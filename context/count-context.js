const {useState, createContext} = React;

const CountContext = createContext(null);

function CountContextProvider({children}){
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    return(
        <CountContext.Provider value={{count, setCount, count2, setCount2}}>
            {children}
        </CountContext.Provider>
    )

}

window.CountContext = CountContext;
window.CountContextPrivider = CountContextProvider;