'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";



interface ContextProps {
    user: userDto,
    setUser: Dispatch<SetStateAction<userDto>>,

    geust: userDto,
    setGeust: Dispatch<SetStateAction<userDto>>,

    valueNav: number,
    setValueNav: Dispatch<SetStateAction<number>>
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

    valueNav: 0,
    setValueNav: () => { }
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

    const [valueNav, setValueNav] = useState<number>(0);

    return (
        <GlobalContext.Provider value={{ geust, setGeust, user, setUser, valueNav, setValueNav }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);