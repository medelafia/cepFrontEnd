import { useState } from "react"

export default function Providers() {
    const [providers , setProviders] = useState([]) 
    const renderProviders = () => {
        return providers.map((provider , index) => <tr><td></td></tr>)
    } 
    return (
        <div className="py-3 px-5 h-75">
            <div className="d-flex align-items-center justify-content-between">
                <div className="custom-text-secondary text-capitalize">dashboard / Providers </div>
                <button className="btn custom-btn-secondary"><i class="fa-solid fa-plus mx-1"></i>add Provider</button>
            </div>
            <div className="bg-white p-2 rounded my-2 h-100">
                <table className="table custom-text-secondary text-center">
                    <thead>
                        <th>id</th>
                        <th>name</th>
                        <th>address</th>
                        <th>country</th>
                        <th>city</th>
                        <th>destination type</th>
                        <th>actions</th>
                    </thead>
                    <tbody className="text-secondary">
                        {
                            providers.length == 0
                            ? <tr><td colSpan="7">no items</td></tr>
                            : renderProviders() 
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}