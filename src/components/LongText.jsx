import { useState } from "react"

export default function LongText({text}) {
    const [showMore , setShowMore] = useState(false) ; 
    return (
        <p>
            {text.length < 100 ? text : text.substring(0 , 100 ) + "..."} 
        </p>
    )
}