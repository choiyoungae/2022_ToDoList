import React, { useState } from "react"
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import './AddList.css'
import DatePicker from "react-datepicker"
import './DatePicker.css'
import { ko } from 'date-fns/esm/locale'


function DelayList({ openDelay, handleDelayClose, handleDelayAdd }) {

    const open = openDelay
    const [theDelayDate, setTheDelayDate] = useState(new Date())

    return <>
        <Dialog id="delayPicker" open={open} onClose={handleDelayClose}>
            <DialogTitle>일정 연기</DialogTitle>

            <DialogContent>
                
                <i className="fa-regular fa-calendar calendar-icon" ></i>
                <DatePicker 
                    selected={theDelayDate} 
                    dateFormat="yyyy.MM.dd" 
                    onChange={date => setTheDelayDate(date)} 
                    locale={ko} />

                <DialogActions>
                    <Button style={{fontFamily:"GongGothicLight"}} onClick={handleDelayClose}>취소</Button>
                    <Button style={{fontFamily:"GongGothicLight"}} onClick={() => handleDelayAdd(theDelayDate)}>확인</Button>
                </DialogActions>
                
            </DialogContent>
            
        </Dialog>

    </>
}

export default DelayList