import React, { useState } from 'react'
import './index.css'
import Clock from './Clock'
import MyCalendar from './Calendar'
import ToDoList from './ToDoList'
import Saying from './Saying'
import Note from './Note.js'

const App = () => {
    // 완료된 체크표시
    // <i class="fa-solid fa-circle-check"></i>
    // 쓰레기통 
    // <i class="fa-solid fa-trash-can"></i>

    const [date, setDate] = useState(new Date())
    const [memo, setMemo] = useState("")

    return <>
        <div id="clock"><Clock /></div>
        <div id="calendar"><MyCalendar date={date} setDate={setDate} /></div>
        <div id="board">
            <ToDoList date={date} />
            <div id='right-side'>
                <Saying />
                <Note memo={memo} setMemo={setMemo} />
            </div>
        </div>
    </>
}

export default App