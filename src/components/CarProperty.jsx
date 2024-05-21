
export default function CarProperty({carPropertyName}) {
    return (
        <div className="d-flex align-items-center justify-content-start my-1">
            {carPropertyName == "seats" && <i class="fa-solid fa-person me-2"></i>}
            {carPropertyName == "bags" && <i class="fa-solid fa-bag-shopping me-2"></i>}
            {carPropertyName == "air" && <i class="fa-solid fa-wind me-2"></i>}
            {carPropertyName == "fuel" && <i class="fa-solid fa-gas-pump me-2"></i>}
            {carPropertyName == "" && <i class="fa-solid fa-person me-2"></i>}
            <span>{carPropertyName}</span>
        </div> 
    )
}