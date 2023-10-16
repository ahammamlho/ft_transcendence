'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";



interface ContextProps {
    user: userDto,
    setUser: Dispatch<SetStateAction<userDto>>,


    geust: userDto,
    setGeust: Dispatch<SetStateAction<userDto>>,
}

const GlobalContext = createContext<ContextProps>({
    user: {
        id: 0,
        email: '',
        name: '',
        avatar: '',
    },
    setUser: () => { },

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

    const [user, setUser] = useState<userDto>({
        id: 0,
        email: '',
        name: '',
        avatar: '',
    })

    const [geust, setGeust] = useState<userDto>({
        id: 0,
        email: '',
        name: '',
        avatar: '',
    })

    return (
        <GlobalContext.Provider value={{ geust, setGeust, user, setUser }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);