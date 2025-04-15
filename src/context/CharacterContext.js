import { createContext, useState } from 'react';
export const CharacterContext = createContext({
    currrentCharacter: null,
    setCurrentCharacter: () => {}
});

export function CharacterContextProvider({children}){
    const [currentCharacter, setCurrentCharacter] = useState(null);

    return(
        <CharacterContext.Provider value={{currentCharacter, setCurrentCharacter}}>
            {children}
        </CharacterContext.Provider>
    )
}