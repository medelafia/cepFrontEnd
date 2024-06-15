import { Skeleton } from "@mui/material";

export default function FlightSkeleton() {
    return (
        <div className="col-lg-12 my-2">
            <div className="container rounded d-flex border align-items-center justify-content-between" style={{height : "200px"}}>
                <Skeleton variant="rectangular" className="w-25 h-75"  />
                <div className="w-25 h-100">
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} className="w-100 h-50" />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} className="w-100 h-50"/>
                </div>
                <Skeleton variant="rounded" className="my-2 w-25 h-75" height={20} />
            </div>
        </div>
    )
}