import { Skeleton } from "@mui/material";

export default function AirlineSkeleton() {
    return (
        <div className="col-lg-3 col-md-6 my-3 col-sm-12">
            <div className="container border flex-column d-flex align-items-center justify-content-center" style={{height : "200px"}}>
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} className="w-75" />
                <Skeleton variant="rectangular" className="w-100 h-50"  />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} className="w-50" />
            </div>
        </div>
    )
}