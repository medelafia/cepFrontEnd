import { Skeleton } from "@mui/material";

export default function DefaultSkelton() {
    return (
        <div className="col-lg-4">
            <div className="container" style={{height : "200px"}}>
                <Skeleton variant="rectangular" className="w-100 h-50"  />
                <div className="w-100 my-2 d-flex align-items-center justify-content-between">
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} className="w-50" />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} className="w-25"/>
                </div>
                <Skeleton variant="rounded"className="w-100 my-2" height={20} />
            </div>
        </div>
    )
}