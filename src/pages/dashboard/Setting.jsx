import { Outbound } from "@mui/icons-material";
import { Outlet } from "react-router-dom";
import CurrentPath from "../../components/CurrentPath";

export default function Setting(){
    return (
        <div className='px-5 py-3'>
            <CurrentPath className="pb-3"/>
            <Outlet />
        </div>
    )
}