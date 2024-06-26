import { Outbound } from "@mui/icons-material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import CurrentPath from "../../components/CurrentPath";
import SettingRouting from "../../components/SettingRouting";

export default function Setting(){
    const [active,setActive] = useState("accountSettings") 

    return (
        <div className='py-3 h-100'>
            <div className="container">
            <CurrentPath className="pb-3"/>
            <div className="row">
                <div className="col-lg-4 col-sm-12 d-flex justify-content-start flex-column py-3 px-lg-5">
                    <SettingRouting title="account settings" to="/dashboard/settings/" active={active == "accountSettings"} onClickListener={()=>setActive("accountSettings")}>
                        <i class="fa-solid fa-building me-3"></i>
                    </SettingRouting>
                    <SettingRouting title="company settings" to="/dashboard/settings/company" active={active == "companySettings"}  onClickListener={()=>setActive("companySettings")}>
                        <i class="fa-solid fa-building me-3"></i>
                    </SettingRouting>
                    <SettingRouting title="payment settings" to="/dashboard/settings/payment" active={active == "paymentSettings"} onClickListener={()=>setActive("paymentSettings")}>
                        <i class="fa-solid fa-credit-card me-3"></i>
                    </SettingRouting>
                </div>
                <div className="col-lg-8 col-sm-12">
                    <h5 className="text-center bold font-secondary text-capitalize">
                        {active.slice(0 , active.indexOf("Settings")) + " settings"}
                    </h5>
                    <div className="p-3">
                        <Outlet />
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}