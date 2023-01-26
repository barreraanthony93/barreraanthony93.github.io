import React, { Children, ReactNode, useMemo } from 'react';


type AppContent = {
    value?: object
}

type ElementChild = {
    children: React.ReactElement
}


export const AppContext = React.createContext<AppContent>({});

function AppProvider({children}: ElementChild){
    
    
    const value = useMemo(() => ({

    }), [])

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppProvider;
