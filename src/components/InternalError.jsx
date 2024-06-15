import image from "../assets/505Error.jpg"
export default function InternalError() {
    return (
        <div className="d-flex align-items-center justify-content-center flex-column">
            <img src={image} alt="" style={{width : "300px" , height : "300px"}} />
            <h1 className="text-danger text-capitalize">internal error server</h1>
            <p>travelboot is sorry for this error</p>
        </div>
    )
}