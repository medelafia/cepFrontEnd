import { Skeleton } from "@mui/material";

export default function DefaultSkelton() {
    return (
        <div className="col-lg-4">
            <div className="container border-bottom">
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={210} height={60} />
                <Skeleton variant="rounded" width={210} height={60} />
            </div>
        </div>
    )
}