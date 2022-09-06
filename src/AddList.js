import React, {useState} from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import './AddList.css'

function AddList({ open, handleClose, handleAdd}) {

    const [ title, setTitle ] = useState('')
    const [ content, setContent ] = useState('')
    const [ priority, setPriority ] = useState('')

    return <>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>할 일 추가</DialogTitle>

            <DialogContent>
                
                <div>
                <textarea className="title-text" placeholder="제목" required="required" onChange={(e) => setTitle(e.target.value)}></textarea>
                </div>
                <select name="priority" required="required" onChange={(e) => setPriority(e.target.value)}>
                    <option value="">우선순위</option>
                    <option value="a">높음</option>
                    <option value="b">다소 높음</option>
                    <option value="c">중간</option>
                    <option value="d">다소 낮음</option>
                    <option value="e">낮음</option>
                </select>
                <div>
                    <textarea className="content-text" placeholder="세부내용" onChange={(e) => setContent(e.target.value)}></textarea>
                </div>

                <DialogActions>
                    <Button style={{fontFamily:"GongGothicLight"}} onClick={handleClose}>취소</Button>
                    <Button style={{fontFamily:"GongGothicLight"}} onClick={() => handleAdd(title, content, priority)}>추가</Button>
                </DialogActions>
                
            </DialogContent>
            
        </Dialog>

    </>
}

export default AddList