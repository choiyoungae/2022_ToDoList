import React from "react"
import './Note.css'

function Note({ memo, setMemo }) {

    return <>
    <div id="note">
        <h3>[MEMO]</h3>
        <textarea className="memo-text" defaultValue={localStorage.getItem("memo")} onChange={(e) => { 
            
            setMemo(e.target.value)
            localStorage.setItem("memo", e.target.value)
            
        }}></textarea>
    </div>
    </>
}

export default Note