import {createContext, useContext, useState} from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {


    const [ourTeamAnimationDone, setOurTeamAnimationDone] = useState(false)
    const [logoAnimation, setLogoAnimation] = useState(false)
    const setState = () => {
        setOurTeamAnimationDone(true)
    }
    const setLogoAnimationState = ( ) => {
        setLogoAnimation(true)
    }



    const value = {
        ourTeamAnimationDone,
        logoAnimation,
        setState,
        setLogoAnimationState
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}