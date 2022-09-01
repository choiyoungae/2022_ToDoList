import React from "react"
import './Note.css'

function Note({ memo, setMemo }) {

    return <>
    <div id="note">
        <h3>[MEMO]</h3>
        <textarea onChange={(e) => setMemo(e.target.value)}>{memo}</textarea>
    </div>
    </>
}

export default Note