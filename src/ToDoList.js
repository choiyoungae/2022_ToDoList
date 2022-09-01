import React from "react";
import moment from "moment";
import './ToDoList.css'
import AddList from "./AddList";
import List from "./List";

function ToDoList({date}) {

    const [open, setOpen] = React.useState(false)
    const [todos, setTodos] = React.useState([])
    const [showList, setShowList] = React.useState([])

    React.useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    React.useEffect(() => {
        let got = localStorage.getItem("todos")
        const currentTodos = JSON.parse(got)

        currentTodos.forEach(element => {
            console.log(element.todoDate)
            console.log(moment(date).format("YYYY.MM.DD"))
        });
    })

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
                todoDate: moment(date).format("YYYY.MM.DD")
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
            <List />
        </div>
    </div>
}

export default ToDoList