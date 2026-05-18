"use client"
import { useState } from "react"


export default function AddLoopyComponent() {
    const [amout, setAmout] = useState(0);
    return (
            <div className="flex items-center gap-2 mt-4">
                <button onClick={() => setAmout(amout + 1)} className="  rounded border   hover:bg-pink-500 w-6 h-6"
                >+</button>
                <span> {amout}</span>
                <button onClick={() => setAmout(amout - 1)} disabled={amout <= 0} className=" rounded border   hover:bg-red-500  w-6 h-6"
                >-</button>
                <button className="rounded bg-blue-500 hover:bg-blue-800 h-10 w-20 ml-15"
                >Add Cart</button>
            </div>
    )
}