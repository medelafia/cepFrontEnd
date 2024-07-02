import ServiceBox from "../componants/ServiceBox";

export default function Section6() {
    return (
        <div className="custom-container" style={{margin : "100px 0px"}}>
            <div>
                <h1 className="text-capitalize">what's you can fin in <span className="custom-text-primary">travelboot</span> ?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sapiente tenetur dolor, veniam id exercitationem qui beatae ea ratione nulla optio perferendis assumenda? Cum, vitae unde corporis eius fuga exercitationem.</p>
            </div>
            <div className="row mt-5">
                <ServiceBox title="train trevels" text="L" circleColor="D5D6EA" to="/offers/trainTravels">
                    <i class="fa-solid fa-train text-white"></i>
                </ServiceBox>
                <ServiceBox title="flight" text="L" circleColor="8F9F98" to="/offers/trainTravels">
                    <i class="fa-solid fa-plane-departure text-white" ></i>
                </ServiceBox>
                <ServiceBox title="rental cars" text="L" circleColor="D7ECD9" to="/offers/trainTravels">
                    <i class="fa-solid fa-car text-white"></i> 
                </ServiceBox>
                <ServiceBox title="train trevels" text="L" circleColor="F3DDF2" to="/offers/trainTravels">
                    <i class="fa-solid fa-earth-americas text-white"></i>
                </ServiceBox>
            </div>
        </div>
    )
} 