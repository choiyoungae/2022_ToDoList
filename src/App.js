import React from 'react'
import './index.css'
import Clock from './Clock'

const App = () => {
    // 완료된 체크표시
    // <i class="fa-solid fa-circle-check"></i>
    // 쓰레기통 
    // <i class="fa-solid fa-trash-can"></i>
    return <>
        <div id="clock">{Clock()}</div>
        <div id="calender"></div>
        <div id="toDoList"></div>
    </>
}

export default App