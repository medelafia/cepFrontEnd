import image from "../assets/noItem.jpeg"
export default function NoItems() {
    return (
        <div className="w-100 my-5 text-danger d-flex align-items-center justify-content-center">
            <img src={image} style={{width : "300px" , height :"300px"}}/>
        </div>
    )
}