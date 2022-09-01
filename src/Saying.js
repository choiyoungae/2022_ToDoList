import React from "react"
import './Saying.css'
import { SayingContents } from "./SayingContents"

const Saying = React.memo(() => {

    const idx = Math.floor(Math.random() * SayingContents.length)

    return <>
    <div id="saying-wrap">
        <div className="saying">
            <p className="line">{SayingContents[idx].line}</p>
            <p className="author">- {SayingContents[idx].author}</p>
        </div>
    </div>
    </>
})

export default Saying