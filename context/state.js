import {createContext, useContext, useState} from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {

// Mémoire de l'animation du bloc nous dans la landing
    const [ourTeamAnimationDone, setOurTeamAnimationDone] = useState(false)
    // Mémoire de l'animation du logo dans la nav
    const [logoAnimation, setLogoAnimation] = useState(false)
    // Compteur bisous
    const [bisous, setBisous] = useState(0);
    // Change l'état pour l'anim bloc nous
    const setState = () => {
        setOurTeamAnimationDone(true)
    }
    // Change l'état pour l'anim du logo
    const setLogoAnimationState = ( ) => {
        setLogoAnimation(true)
    }
    // Ajouter un bisou
    const ajouterBisous = () => {
        setBisous(bisous +1)
    }





    const value = {
        ourTeamAnimationDone,
        logoAnimation,
        setState,
        setLogoAnimationState,
        bisous,
        ajouterBisous
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