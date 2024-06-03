import { useState } from "react"

export default function HotelsSlider({hotels}) {
    const [from , setFrom] = useState(1) 
    return (
        <div className="row position-relative w-100">
            <button className="btn btn-outline-dark rounded-circle position-absolute end-0" style={{}}>p</button>
            <button className="btn btn-outline-dark rounded-circle position-absolute start-0">n</button>
        </div>
    )
}