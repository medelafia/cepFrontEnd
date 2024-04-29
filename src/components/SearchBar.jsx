import { ConstructionOutlined } from "@mui/icons-material"
import { useState } from "react"
import "./components.css"
export default function SearchBar() {
    const [current , setCurrent] = useState("flights")
    const handleClick = (e) => {
        setCurrent(e.currentTarget.innerText.toLowerCase())
        document.querySelectorAll(".search-bar-item").forEach(li => {
            li.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
    }
    return (
        <div className="search-bar bg-white w-100">
            <ul className="d-flex align-items-center justify-content-center custom-text-secondary my-1">
                <li className="mx-2 active search-bar-item" onClick={handleClick}>flights</li>
                <li className="mx-2 search-bar-item" onClick={handleClick}>cars</li>
                <li className="mx-2 search-bar-item" onClick={handleClick}>hotels</li>
            </ul>
            <div className="p-3 d-flex align-items-center justify-content-center">
                { 
                    (current == "flights") ? 
                        <div className="d-flex w-100 mx-2">
                            <input type="text" className="form-control mx-1 custom-text-secondary" placeholder="from"/> 
                            <input type="text" className="form-control mx-1 custom-text-secondary" placeholder="to"/>
                            <input type="date" className="form-control mx-1 custom-text-secondary"/> 
                            <select name="" className="form-select custom-text-secondary">
                                <option value="">economy</option>
                                <option value="">premuim economy</option>
                                <option value="">first class</option>
                                <option value="">business class</option>
                            </select>
                        </div>
                        : ((current == "hotels") ?
                            <div className="d-flex w-100">
                                <input type="text" className="form-control mx-1 custom-text-secondary" placeholder="hotel name or destination"/> 
                                <input type="date" className="form-control mx-1 custom-text-secondary" placeholder="entry date"/>
                            </div>
                            : 
                            <div className="d-flex w-100 mx-2">
                                <input type="text" className="form-select mx-1 custom-text-secondary" placeholder="city or airport"/> 
                                <input type="date" className="form-control mx-1 custom-text-secondary" placeholder="pick up"/>
                                <input type="date" className="form-control mx-1 custom-text-secondary" placeholder="drop off"/> 
                                <select name="" className="form-select custom-text-secondary">
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                    <option value="">5</option>
                                </select>
                            </div>
                        )
                }
                <button className="custom-btn-secondary btn">search</button>
            </div>
        </div>
    )
}