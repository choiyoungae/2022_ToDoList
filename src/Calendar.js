import { useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.css"
import moment from "moment";

function MyCalendar() {
    
    const [date, setDate] = useState(new Date())

    return <>
        <div className='app'>
            <Calendar onChange={setDate} value={date}
            formatDay={(locale, date) => moment(date).format("DD")}
            showNeighboringMonth={false} />
            
        </div>
    </>
}

{/* <p className="clickedDate">
    {moment(date).format("YYYY년 MM월 DD일")}
</p> */}

export default MyCalendar