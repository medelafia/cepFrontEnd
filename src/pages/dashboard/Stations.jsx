export default function Stations() {
    return (
        <div className="py-3 px-5 h-75">
            <div className="d-flex align-items-center justify-content-between">
                <div className="custom-text-secondary text-capitalize">dashboard / Cars </div>
                <button className="btn custom-btn-secondary"><i class="fa-solid fa-plus mx-1"></i>add station</button>
            </div>
            <div className="bg-white p-2 rounded my-2 h-100">
                <table className="table custom-text-secondary text-center">
                    <thead>
                        <th>name</th>
                        <th>address</th>
                        <th>country</th>
                        <th>city</th>
                        <th>long</th>
                        <th>lat</th>
                        <th>email</th>
                        <th>phone</th>
                    </thead>
                    <tbody className="text-secondary">
                    </tbody>
                </table>
            </div>
            <div className="bg-white rounded p-2">
                 x,,d
            </div>
        </div>
    )
}