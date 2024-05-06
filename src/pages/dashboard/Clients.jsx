import { useState } from "react";

export default function Clients() {
    const [clients, setClients ] = useState([]) ;
    const renderClients = () => {
        return clients.map((client,index)=> <tr>
            <td>{client.id}</td>
            <td>{client.email}</td>
            <td>{client.tel}</td>
            <td>{client.authority}</td>
            <td>

            </td>
        </tr>)
    }
    return (
        <div className="py-3 px-5 h-75">
            <div className="d-flex align-items-center justify-content-between">
                <div className="custom-text-secondary text-capitalize">dashboard / Cars </div>
            </div>
            <div className="bg-white p-2 rounded my-2 h-100">
                <table className="table custom-text-secondary text-center">
                    <thead>
                        <th>client id</th>
                        <th>email</th>
                        <th>tel</th>
                        <th>autority</th>
                        <th>actions</th>
                    </thead>
                    <tbody className="text-secondary">
                        {clients.length == 0 ? <tr><td colSpan="5">no items</td></tr> : renderClients() }
                    </tbody>
                </table>
            </div>
        </div>
    )
}