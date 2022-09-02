import React, { useState } from "react"
import ModifyList from './ModifyList'

const List = ({ aList, setDeleteId, setModifyId, setModifyTitle, setModifyContent, setModifyPriority }) => {
    
    // 게시글 수정 관련
    const [doModify, setDoModify] = React.useState(false)

    // 연필 아이콘 클릭시
    const handleClickOpen = () => {
        setOpen(true);
    };

    // 수정 창 관련
    const [open, setOpen] = React.useState(false)

    // 수정 창 내 취소 클릭시 
    const handleClose = () => {
        setOpen(false);
        setDoModify(false)
    };

    // 수정 창 내 추가 클릭시 
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
        setDoModify(false)

        setModifyTitle(title)
        setModifyContent(content)
        setModifyPriority(priority)
    };

    const [isChecked, setIsChecked] = React.useState(false)

    return <>
        <div id="aList" className={isChecked ? "checked" : "going"}>
            <div className="list">
                {isChecked ? <i onClick={() => setIsChecked(!isChecked)} className={`${aList.priority} circle fa-solid fa-circle-check circle-color`}></i> : 
                <i onClick={() => setIsChecked(!isChecked)} className={`${aList.priority} circle fa-regular fa-circle`}></i>}
                <p className="title">{aList.title}</p>
                <p className="content">{aList.content}</p>
            </div>
            <div id="functions">
                <i className="fa-solid fa-arrow-right">
                    <p>연기</p>
                </i>
                <i className="fa-solid fa-pencil" onClick={() => {
                    setModifyId(aList.id)
                    setDoModify(true)
                    handleClickOpen()
                }}>
                    <p>수정</p>
                </i>
                {doModify ? <ModifyList open={open} handleClose={handleClose} handleAdd={handleAdd} aList={aList} /> : <></>}
                <i className="fa-solid fa-trash-can" onClick={() => setDeleteId(aList.id)}>
                    <p>삭제</p>
                </i>
            </div>
        </div>

    </>
}

export default List