'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";



interface ContextProps {
    geust: userDto,
    setGeust: Dispatch<SetStateAction<userDto>>,
}

const GlobalContext = createContext<ContextProps>({
    geust: {
        id: 0,
        email: '',
        name: '',
        avatar: '',
    },
    setGeust: () => { },
})



export const GlobalContextProvider = ({ children }: {
    children: React.ReactNode;
}) => {

    const [geust, setGeust] = useState<userDto>({
        id: 0,
        email: '',
        name: '',
        avatar: '',
    })

    return (
        <GlobalContext.Provider value={{ geust, setGeust }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);