
export default function CarProperty({carPropertyName}) {
    return (
        <div className="d-flex align-items-center justify-content-start my-2">
            <i class="fa-solid fa-plus mx-1"></i> 
            <span>{carPropertyName}</span>
        </div> 
    )
}