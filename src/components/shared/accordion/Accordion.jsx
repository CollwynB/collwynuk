import React, { useState } from 'react';
import "./Accordion.css"
function Accordion({ children }) {
    const [shown, setShown] = useState(false)
    return (
        <>
            <div className={"accordion"} style={{ "maxHeight": shown ? "1000px" : "0px" }}>
                {children}
            </div>
            <div onClick={() => setShown(!shown)} className="button" style={{ "transform": shown ? "rotate(-45deg)" : "rotate(135deg)" }}>
            </div>
        </>
    )
}

export default Accordion