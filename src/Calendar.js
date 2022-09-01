import { useState } from "react";
import { useMediaQuery } from 'react-responsive'
import Calendar from "react-calendar";
import "./Calendar.css"
import moment from "moment";

function MyCalendar({ date, setDate }) {

    const isMinWidth1000AndMaxWidth1500 = useMediaQuery({ minWidth: 1000, maxWidth: 1500 })

    return <div id="calendar" className={isMinWidth1000AndMaxWidth1500 ? "big" : "small"}>
        <div className={isMinWidth1000AndMaxWidth1500 ? "big" : "small"}>
            <Calendar onChange={setDate} value={date}
            formatDay={(locale, date) => moment(date).format("DD")}
            showNeighboringMonth={false} />
        </div>
    </div>
}

{/* <p className="clickedDate">
    {moment(date).format("YYYY년 MM월 DD일")}
</p> */}

export default MyCalendar