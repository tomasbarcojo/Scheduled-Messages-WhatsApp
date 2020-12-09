import React, { useState } from 'react'

export default function Timer() {
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    const updateTime = () => {
        var auxtime = new Date().toLocaleTimeString()
        setTime(auxtime)
    }

    setInterval(updateTime, 1000)

    if (time === '11:58:45') {
        alert('es la hora')
    }


    return (
        <div>
            <h1>{time}</h1>
            { time === '10:13:59' ?
            alert('es la hora')
        : null}
        </div>
    )
}

