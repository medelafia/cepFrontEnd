export default function TopDestination({destinationName , destinationImage }) {
    return (
        <div className="w-100 h-100">
            <h1 className="position-absolute bottom-0 text-white text-capitalize" style={{transform :"translateX(50%)"}}>
                {destinationName}
            </h1>
            <img src={destinationImage} alt="" style={{width : "100%" , height : "100%"}} className="rounded"/>
        </div>
    )
}