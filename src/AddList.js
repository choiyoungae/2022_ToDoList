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
                    <input placeholder="제목" required="required" onChange={(e) => setTitle(e.target.value)}></input>
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
                    <textarea placeholder="세부내용" onChange={(e) => setContent(e.target.value)}></textarea>
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