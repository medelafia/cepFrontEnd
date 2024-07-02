import { useCallback } from "react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useFetch } from "../../hooks/custom-hooks"
import IndexBox from "./componants/IndexBox"
import PropertyBox from "./componants/PropertyBox"

export default function ProviderIndex() {
    const navigate = useNavigate()
    const provider = useFetch("http://localhost:8089/provider/")
    useEffect(() => {
        console.log(provider)
    } , [provider])
    return (
        <div className="custom-container pt-5">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4 rounded border mb-3">
                    <div className="container py-3">
                        <div className="">
                            <img src={provider.data?.logo.url} style={{width : "200px" , height : "200px"}} className="rounded" alt="" />
                        </div>
                        <div className="mt-3">
                            <h3>company name</h3>
                            { provider.data?.email != null && <PropertyBox value={provider.data?.email}>
                                <i class="fa-solid fa-at me-2"></i>
                            </PropertyBox> }
                            { provider.data?.tel != null && <PropertyBox value={provider.data?.tel}>
                                <i class="fa-solid fa-phone me-2"></i>
                            </PropertyBox> }
                            { provider.data?.fax != null && <PropertyBox value={provider.data?.fax}>
                                <i class="fa-solid fa-fax me-2"></i>
                            </PropertyBox>}
                            { provider.data?.address != null && <PropertyBox value={provider.data?.address}>
                                <i class="fa-solid fa-location-dot me-2"></i>
                            </PropertyBox> }
                        </div>
                        <div className="d-flex align-items-center justify-content-end mt-4">
                            <button className="btn btn-outline-dark rounded-pill" onClick={()=>navigate("/dashboard/settings/")}>
                                <i class="fa-solid fa-gear me-2"></i>edit
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8 row">
                    <div className="col-sm-12">
                        <h3 className="text-secondary">overview</h3>
                    </div>
                    <IndexBox count={10} title="offers" bgColor="#bde0fe">
                        <i class="fa-solid fa-location-dot me-2 font-secondary" ></i>
                    </IndexBox>
                    <IndexBox count={10} title="reservations" bgColor="#ffd6a5">
                        <i class="fa-solid fa-location-dot me-2 font-secondary"></i>
                    </IndexBox>
                    <IndexBox count={10} title="images" bgColor="#cdb4db">
                        <i class="fa-solid fa-location-dot me-2 font-secondary"></i>
                    </IndexBox>
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                recent events 
                            </div>
                            <div className="card-body">
                                kddjkdj
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}