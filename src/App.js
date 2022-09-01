import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import './index.css'
import Clock from './Clock'
import MyCalendar from './Calendar'
import ToDoList from './ToDoList'
import Saying from './Saying'
import Note from './Note.js'

const App = () => {
    // 완료된 체크표시
    // <i class="fa-solid fa-circle-check"></i>

    const [date, setDate] = useState(new Date())
    const [memo, setMemo] = useState("")

    const isMinWidth1000 = useMediaQuery({ minWidth: 1000 })

    return <>
        {isMinWidth1000 ? <div id="clock"><Clock /></div> : <></>}
        {isMinWidth1000 ? <MyCalendar date={date} setDate={setDate} /> : <></>}
        <div id="board" className={isMinWidth1000 ? "normal" : "full"}>
            <ToDoList date={date} />
            <div id='right-side'>
                <Saying />
                <Note memo={memo} setMemo={setMemo} />
            </div>
        </div>
    </>
}

export default App