import '../App.css';
import React, { useContext, useState } from 'react'
import Number from '../Context/Context'

export default function Home() {

    let [value, setvalue] = useContext(Number)

    const IncrementValue = () => {
        setvalue(value + 1)
    }
    const DecrementValue = () => {
        if (value) {
            setvalue(value - 1)
        }
    }
    const ResetValue = () => {
        setvalue(value = 0)
    }

    return (
        <div>
            <h1>Counter (Home)</h1>
            <h1 id='value'>{value}</h1>
            <button onClick={IncrementValue} id='incBtn'>Increament</button>
            <button onClick={ResetValue} id='ResBtn'>Reset</button>
            <button onClick={DecrementValue} id='decBtn'>Decreament</button>
        </div>
    )
}
