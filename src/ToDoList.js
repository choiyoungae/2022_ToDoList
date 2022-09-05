import React, { useState } from "react";
import moment from "moment";
import './ToDoList.css'
import AddList from "./AddList";
import List from "./List";

function ToDoList({date}) {

    // addList 버튼 클릭 관련
    const [open, setOpen] = React.useState(false)

    // 전체 todo 리스트
    const [todos, setTodos] = React.useState(JSON.parse(localStorage.getItem("todos")) || [])
    
    // 지정 날짜 todo 리스트
    const [showList, setShowList] = React.useState([])

    // 달력 클릭 시, addList 시 보여줄 리스트 세팅 
    React.useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))

        let got = localStorage.getItem("todos")
        const currentTodos = JSON.parse(got)

        const filteredTodos = []
        currentTodos.forEach(element => {
            if(element.todoDate === moment(date).format("YYYY.MM.DD")) {
                filteredTodos.push(element)
            }
        });
        setShowList(filteredTodos)

    }, [todos, date])

    // addList 버튼 클릭시
    const handleClickOpen = () => {
        setOpen(true);
    };

    // 취소 클릭시 
    const handleClose = () => {
        setOpen(false);
    };

    // 추가 클릭시 
    const handleAdd = (title, content, priority) => {

        if(title === "") {
            alert("제목과 우선순위는 필수 설정 요소입니다.")
            return
        }
        if(priority === "") {
            alert("제목과 우선순위는 필수 설정 요소입니다.")
            return
        }

        setOpen(false);

        setTodos(
            [...todos, {
                priority, title, content, 
                todoDate: moment(date).format("YYYY.MM.DD"),
                id: new Date()
            }]
        )
    };

    // 개별 리스트 관련

    // 리스트 삭제
    const [deleteId, setDeleteId] = useState("")
    React.useEffect(() => {
        setTodos(todos.filter(todo => todo.id !== deleteId))
        setDeleteId("")
    }, [deleteId])

    // 리스트 수정
    const [modifyId, setModifyId] = useState("")
    const [modifyTitle, setModifyTitle] = useState("")
    const [modifyContent, setModifyContent] = useState("")
    const [modifyPriority, setModifyPriority] = useState("")

    React.useEffect(() => {
        let findIdx = todos.findIndex(todo => todo.id === modifyId)
        let copiedTodos = [...todos]

        if(findIdx !== -1) {
            copiedTodos[findIdx].title = modifyTitle
            copiedTodos[findIdx].content = modifyContent
            copiedTodos[findIdx].priority = modifyPriority
        }
        setTodos(copiedTodos)
    }, [modifyTitle])

    // 리스트 연기
    const [delayId, setDelayId] = useState("")
    const [delayDate, setDelayDate] = useState("")

    React.useEffect(() => {
        let findIdx = todos.findIndex(todo => todo.id === delayId)
        let copiedTodos = [...todos]

        if(findIdx !== -1) {
            copiedTodos[findIdx].todoDate = delayDate
        }
        setTodos(copiedTodos)
    }, [delayDate])


    return <div id="toDoList">
        <p className="clickedDate">
            {moment(date).format("YYYY.MM.DD")}
        </p>
        <button className="addList" onClick={handleClickOpen}>+</button>
        <AddList open={open} handleClose={handleClose} handleAdd={handleAdd} />
        <div id="list">
            {showList.map((aList, index) => 
            <List key={index} aList={aList} setDeleteId={setDeleteId} 
            setModifyId={setModifyId} setModifyTitle={setModifyTitle} setModifyContent={setModifyContent} setModifyPriority={setModifyPriority}
            setDelayId={setDelayId} setDelayDate={setDelayDate} />)}
        </div>
    </div>
}

export default ToDoList