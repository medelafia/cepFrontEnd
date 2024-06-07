import { StartSharp } from "@mui/icons-material";

export default function Rating({score}) {
    return (
        <div className="d-flex align-items-center justify-content-center py-3 custom-text-primary">
            <i class="fa-solid fa-star mx-2"></i> 
            <i class="fa-solid fa-star mx-2"></i>
            <i class="fa-solid fa-star mx-2"></i>
            <i class="fa-regular fa-star-half-stroke mx-2"></i>
            <i class="fa-regular fa-star mx-2"></i>
        </div>
    )
}