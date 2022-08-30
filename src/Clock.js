import React, { useState, useEffect } from 'react'
import moment from 'moment'

function Clock() {

    const [time, setTime] = useState(moment())

    useEffect(() => {
        let timer = setInterval(() => {
            setTime(moment())
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [])

    return <>
    <p>{time.format('HH:mm:ss')}</p>
    </>
}

export default Clock