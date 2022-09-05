import React from "react"
import ModifyList from './ModifyList'
import DelayList from "./DelayList";
import moment from "moment"

const List = ({ aList, setDeleteId, setModifyId, setModifyTitle, setModifyContent, setModifyPriority, setDelayId, setDelayDate }) => {
    
    // 리스트 수정 관련

    // 연필 아이콘 클릭시
    const handleModifyClickOpen = () => {
        setOpenModify(true);
    };

    // 수정 창 관련
    const [openModify, setOpenModify] = React.useState(false)

    // 수정 창 내 취소 클릭시 
    const handleModifyClose = () => {
        setOpenModify(false)
    };

    // 수정 창 내 추가 클릭시 
    const handleModifyAdd = (title, content, priority) => {

        if(title === "") {
            alert("제목과 우선순위는 필수 설정 요소입니다.")
            return
        }
        if(priority === "") {
            alert("제목과 우선순위는 필수 설정 요소입니다.")
            return
        }

        setOpenModify(false);

        setModifyTitle(title)
        setModifyContent(content)
        setModifyPriority(priority)
    };

    // 리스트 연기 관련

    // 화살표 아이콘 클릭시
    const handleDelayClickOpen = () => {
        setOpenDelay(true);
    };

    // 연기 창 관련
    const [openDelay, setOpenDelay] = React.useState(false)

    // 연기 창 내 취소 클릭시 
    const handleDelayClose = () => {
        setOpenDelay(false)
    };

    // 연기 창 내 추가 클릭시 
    const handleDelayAdd = (theDelayDate) => {

        setOpenDelay(false);

        setDelayDate(moment(theDelayDate).format("YYYY.MM.DD"))
    };

    // 완료된 리스트 항목인지 체크
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
                <i className="fa-solid fa-arrow-right" onClick={() => {
                    setDelayId(aList.id)
                    handleDelayClickOpen()
                }}>
                    <p>연기</p>
                </i>
                <DelayList openDelay={openDelay} handleDelayClose={handleDelayClose} handleDelayAdd={handleDelayAdd} />
                <i className="fa-solid fa-pencil" onClick={() => {
                    setModifyId(aList.id)
                    handleModifyClickOpen()
                }}>
                    <p>수정</p>
                </i>
                <ModifyList openModify={openModify} handleModifyClose={handleModifyClose} handleModifyAdd={handleModifyAdd} aList={aList} />
                <i className="fa-solid fa-trash-can" onClick={() => setDeleteId(aList.id)}>
                    <p>삭제</p>
                </i>
            </div>
        </div>

    </>
}

export default List