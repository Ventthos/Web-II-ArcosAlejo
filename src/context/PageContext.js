import { useState, createContext, useEffect } from 'react';
export const PageContext = createContext({
    pageQuantity: 0,
    setPageQuantity: () => 0
});

export function PageContextProvider({children}){
    const [pageQuantity, setPageQuantity] = useState(0);

    useEffect(() => {
        alert(pageQuantity)
    }, [pageQuantity])

    return(
        <PageContext.Provider value={{pageQuantity, setPageQuantity}}>
            {children}
        </PageContext.Provider>
    )
}
