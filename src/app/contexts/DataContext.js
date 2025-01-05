'use client'
import { createContext, useContext, useState } from "react";
const DataContext = createContext();
export const DataProvider = ({ children }) => {
    const [data, setData] = useState({});

    const updateData = (newData) => {
        setData(newData);
    };
    return (
        <DataContext.Provider value={{ data, updateData }}>
            {children}
        </DataContext.Provider>
    );
}

// Hook para consumir el contexto
export const useData = () => {
    return useContext(DataContext);
}