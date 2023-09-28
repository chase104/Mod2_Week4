import { createContext, useState } from "react";

export const mainContext = createContext();

const MainProvider = (props) => {
    const [count, setCount] = useState();
    const [background, setBackground] = useState();
    const [userIcon, setUserIcon] = useState();


    return (
        <mainContext.Provider value={{
            count, setCount,
            background, setBackground,
            userIcon, setUserIcon
        }}>
            {props.children}
        </mainContext.Provider>
    )
};

export default MainProvider;