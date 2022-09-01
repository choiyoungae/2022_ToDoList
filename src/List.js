import React from "react"

const List = ({ aList }) => {

    const [isChecked, setIsChecked] = React.useState(false)

    console.log("aList :", aList)

    return <>
        <div id="aList" className={isChecked ? "checked" : "going"}>
            <div className="list">
                {isChecked ? <i onClick={() => setIsChecked(!isChecked)} className={`${aList.priority} circle fa-solid fa-circle-check circle-color`}></i> : 
                <i onClick={() => setIsChecked(!isChecked)} className={`${aList.priority} circle fa-regular fa-circle`}></i>}
                <p className="title">{aList.title}</p>
                <p className="content">{aList.content}</p>
            </div>
            <div id="functions">
                <i class="fa-solid fa-arrow-right"></i>
                <i class="fa-solid fa-pencil"></i>
                <i class="fa-solid fa-trash-can"></i>
            </div>
        </div>

    </>
}

export default List