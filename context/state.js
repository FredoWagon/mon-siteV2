import {createContext, useContext, useState} from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {

// Mémoire de l'animation du bloc nous dans la landing
    const [ourTeamAnimationDone, setOurTeamAnimationDone] = useState(false)
    // Mémoire de l'animation du logo dans la nav
    const [logoAnimation, setLogoAnimation] = useState(false)
    // Change l'état pour l'anim bloc nous
    const setState = () => {
        setOurTeamAnimationDone(true)
    }
    // Change l'état pour l'anim du logo
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