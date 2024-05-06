import React ,{ useState,createContext } from "react";
import MyComponentB from "./MyComponentB";
export const UserContext=createContext();

function MyComponentA(){

    const [user,setUser]=useState("Anirban Sinha")

    return(
        <div className="component-a">
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2>

            <UserContext.Provider value={user}>
                <MyComponentB></MyComponentB>
            </UserContext.Provider>

        </div>
    );
}

export default MyComponentA