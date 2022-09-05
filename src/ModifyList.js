import React, {useState} from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import './AddList.css'

function ModifyList({ openModify, handleModifyClose, handleModifyAdd, aList }) {

    const open = openModify

    const [ title, setTitle ] = useState(aList.title)
    const [ content, setContent ] = useState(aList.content)
    const [ priority, setPriority ] = useState(aList.priority)

    return <>
        <Dialog open={open} onClose={handleModifyClose}>
            <DialogTitle>할 일 추가</DialogTitle>

            <DialogContent>
                
                <div>
                <textarea className="title-text" placeholder="제목" required="required" onChange={(e) => setTitle(e.target.value)} defaultValue={aList.title}></textarea>
                </div>
                <select name="priority" required="required" onChange={(e) => setPriority(e.target.value)}>
                    <option value="">우선순위</option>
                    <option value="high">높음</option>
                    <option value="little-high">다소 높음</option>
                    <option value="middle">중간</option>
                    <option value="little-low">다소 낮음</option>
                    <option value="low">낮음</option>
                </select>
                <div>
                    <textarea className="content-text" placeholder="세부내용" onChange={(e) => setContent(e.target.value)} defaultValue={aList.content}></textarea>
                </div>

                <DialogActions>
                    <Button style={{fontFamily:"GongGothicLight"}} onClick={handleModifyClose}>취소</Button>
                    <Button style={{fontFamily:"GongGothicLight"}} onClick={() => handleModifyAdd(title, content, priority)}>확인</Button>
                </DialogActions>
                
            </DialogContent>
            
        </Dialog>

    </>
}

export default ModifyList