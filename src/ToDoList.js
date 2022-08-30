import React from "react";
import moment from "moment";
import './ToDoList.css'
import AddList from "./AddList";

function ToDoList({date}) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    // 취소 클릭시 
    const handleClose = () => {
        setOpen(false);
    };

    // 추가 클릭시 
    const handleAdd = (title, content) => {
        setOpen(false);
        console.log("title : " + title)
        console.log("content : " + content)
    };


    return <div id="toDoList">
        <p className="clickedDate">
            {moment(date).format("YYYY.MM.DD")}
        </p>
        <button className="addList" onClick={handleClickOpen}>+</button>
        <AddList open={open} handleClose={handleClose} handleAdd={handleAdd} />
    </div>
}

export default ToDoList