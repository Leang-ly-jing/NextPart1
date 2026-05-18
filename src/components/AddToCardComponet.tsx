"use client"
import { useState } from "react"

export default function AddToCardComponent(){

    //create state
    //      state , function update state  = hook (initialize value)
    const [count, setCount] = useState(0);
    //update state value
    // setCount(count+1); error if put this place
    return (
        <div>
            <h1>Cart : {count}</h1>
            <button onClick={()=>setCount(count+1)}  className="border p-4 rounded  hover:bg-red-300"
            >Add To Cart</button>
            <button onClick={()=>setCount(0)}  className="border p-4 rounded hover:bg-pink-300">
                Reset</button>
        </div>
    )
}