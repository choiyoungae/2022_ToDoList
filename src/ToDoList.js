import React from "react";
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

    // addList 하면 todo리스트 목록 로컬로 저장
    // React.useEffect(() => {
    //     localStorage.setItem("todos", JSON.stringify(todos))
    // }, [todos])

    // 달력 클릭 시, addList 시 보여줄 리스트 세팅 
    React.useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
        let got = localStorage.getItem("todos")
        const currentTodos = JSON.parse(got)

        const filteredTodos = []
        currentTodos.forEach(element => {
            if(element.todoDate == moment(date).format("YYYY.MM.DD")) {
                filteredTodos.push(element)
            }
        });
        setShowList(filteredTodos)

    }, [todos, date])

    // React.useEffect(() => {
    //     let got = localStorage.getItem("todos")
    //     const currentTodos = JSON.parse(got)

    //     const filteredTodos = []
    //     currentTodos.forEach(element => {
    //         if(element.todoDate == moment(date).format("YYYY.MM.DD")) {
    //             filteredTodos.push(element)
    //         }
    //     });
    //     setShowList(filteredTodos)

    // }, [])

    const handleClickOpen = () => {
        setOpen(true);
    };

    // 취소 클릭시 
    const handleClose = () => {
        setOpen(false);
    };

    // 추가 클릭시 
    const handleAdd = (title, content, priority) => {

        if(title == "") {
            alert("제목과 우선순위는 필수 설정 요소입니다.")
            return
        }
        if(priority == "") {
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


    return <div id="toDoList">
        <p className="clickedDate">
            {moment(date).format("YYYY.MM.DD")}
        </p>
        <button className="addList" onClick={handleClickOpen}>+</button>
        <AddList open={open} handleClose={handleClose} handleAdd={handleAdd} />
        <div id="list">
            {showList.map((aList, index) => <List key={index} aList={aList}/>)}
        </div>
    </div>
}

export default ToDoList