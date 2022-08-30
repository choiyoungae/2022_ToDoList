import React, { useState } from 'react'
import './index.css'
import Clock from './Clock'
import MyCalendar from './Calendar'
import ToDoList from './ToDoList'

const App = () => {
    // 완료된 체크표시
    // <i class="fa-solid fa-circle-check"></i>
    // 쓰레기통 
    // <i class="fa-solid fa-trash-can"></i>

    const [date, setDate] = useState(new Date())

    return <>
        <div id="clock"><Clock /></div>
        <div id="calendar"><MyCalendar date={date} setDate={setDate} /></div>
        <div id="board">
            <ToDoList date={date} />
        </div>
    </>
}

export default App