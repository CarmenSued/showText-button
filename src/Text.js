import React, { useState, useEffect } from "react";

export const Text =() =>{
    const [text, setText] = useState("");

    useEffect(() =>{
        console.log("Text component mounted");

        return ()=>{
            console.log("Text component unmounted")
        }
    },[]);

    return(
        <div>
            <input onChange={(e) => {
                setText(e.target.value);
            }}
            />
            <p>{text}</p>
        </div>
    )
}