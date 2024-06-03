import { Link } from "react-router-dom"
import image from "../assets/hotel4.jpeg" 
export default function Hotel() {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 my-2">
            <div className="border-bottom border-top rounded mx-2">
                <div className="rounded p-2">
                    <img src={image} className="w-100 rounded" alt=""/>
                </div>
                <div className="p-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <h3>hotel name</h3>
                            <div>martil , tetouan</div>
                        </div>
                        <div className="custom-bg-primary p-1 text-white rounded">
                            9.3
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="cursor-pointer">
                            <Link className="text-secondary">show details</Link>
                        </div>
                        <strong className="h4">200$</strong>
                    </div>
                </div>
        </div>
        </div>
    )
}