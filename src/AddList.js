import React, {useState} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import './AddList.css'

function AddList({ open, handleClose, handleAdd}) {

    const [ title, setTitle ] = useState('')
    const [ content, setContent ] = useState('')

    return <>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>할 일 추가</DialogTitle>
        <DialogContent>
            <TextField
                autoFocus
                margin="dense"
                id="title"
                label="제목"
                type="text"
                fullWidth
                variant="standard"
                onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
                autoFocus
                margin="dense"
                id="content"
                label="세부내용"
                type="text"
                fullWidth
                variant="standard"
                onChange={(e) => setContent(e.target.value)}
            />
            <select>
                <option><i class="fa-solid fa-circle"></i></option>
                <option><i class="fa-solid fa-circle"></i></option>
                <option><i class="fa-solid fa-circle"></i></option>
                <option><i class="fa-solid fa-circle"></i></option>
            </select>
            
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>취소</Button>
            <Button onClick={() => handleAdd(title, content)}>추가</Button>
            </DialogActions>
        </Dialog>
    </>
}

export default AddList