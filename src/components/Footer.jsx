import Brand from "./Brand";
import FooterCell from "./FooterCell";

export default function Footer() {
    return (
      <div className="footer bg-light p-4 w-100">
        <div className="custom-container row">
        <div className="col-lg-4 col-sm-12">
          <Brand />
          <div className="mt-3">
            <div className="text-uppercase bold">follow us</div>
            <div className="d-flex ms-3 align-items-center justify-content-start py-3">
                <i class="fa-brands fa-facebook mx-2 text-primary"></i>
                <i class="fa-brands fa-facebook mx-2 text-success"></i>
                <i class="fa-brands fa-facebook mx-2"></i>
            </div>
          </div>
          <button className="mt-3 btn custom-btn-primary">join us now</button>
        </div>
        <div className="col-lg-8 col-sm-12 d-flex justify-content-between row">
          <FooterCell title="home" links={[ "services" ,"contact" ]}/> 
          <FooterCell title="offers" links={[ "cars", "destinations", "flights","hotel rooms",  "travels","train travels"]} />
          <FooterCell title="providers" links={[ "hotels",  "cars agencies",  "travels agencies",  "railways operators", "airlines" ]} /> 
        </div>
        </div>
      </div>
    )
} 