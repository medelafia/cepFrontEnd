import IndexBox from "./componants/IndexBox";
import MessageBox from "./componants/MessageBox";

export default function Index() {
    return (
        <div className="py-3 px-5">
            <div className="row w-100 p-1">
                <div className="col-sm-12 mb-3 text-capitalize bold h3 custom-text-primary">
                    overview
                </div>
                <IndexBox title="clients" count={200}
                    style={{
                        background: "linear-gradient(to right, #fd746c, #ff9068)"
                    }}
                >
                    <i class="fa-solid fa-user font-secondary"></i>
                </IndexBox>
                <IndexBox title="destination" count={100}
                    style={{
                        background: "linear-gradient(to right, #d1913c, #ffd194)"
                    }}
                >
                    <i class="fa-solid fa-user font-secondary"></i>    
                </IndexBox>
                <IndexBox title="gates" count={200}
                    style={{
                        background: "linear-gradient(to right, #8e9eab, #eef2f3)"
                    }}
                >
                    <i class="fa-solid fa-user font-secondary"></i>
                </IndexBox>
                <IndexBox title="others" count={300}
                    style={{
                        background: "linear-gradient(to right, #00c9ff, #92fe9d)"
                    }}
                >
                <i class="fa-solid fa-user font-secondary"></i>
                </IndexBox>
            </div>
            <div className="row py-3 px-1">
                <div className="col-sm-6">
                    <div className="border rounded card">
                        <header className="py-3 px-5 d-flex align-items-center justify-content-between border-bottom">
                            <h5 className="bold text-capitalize">messages</h5>
                            <div className="bg-danger text-white d-flex align-items-center justify-content-center p-3 rounded-circle" style={{width: "20px" , height : "20px"}}>
                                5
                            </div>
                        </header>
                        <div className="d-flex flex-column">
                            <MessageBox name={"mohamed el afia"} message="the reseravtion cannot works"/>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}