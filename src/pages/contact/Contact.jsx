import "./contact.css"
import "../../index.css"
import Brand from "../../components/Brand"
export default function Contact() {
    return (
        <div className="page p-3">
            <div className="custom-container d-flex align-items-start justify-content-center mt-5">
                <div className="mx-5 py-5">
                    <Brand /> 
                    <div className='ps-3 mt-3'>
                    <div className="my-2">
                        <i class="fa-brands fa-facebook mx-2 text-primary"></i>
                        <span>facebook page</span>
                    </div>
                    <div className="my-2">
                        <i class="fa-brands fa-whatsapp mx-2 text-success"></i>
                        <span>whatsap number</span>
                    </div>
                    <div className="my-2">
                        <i class="fa-solid fa-envelope mx-2 text-danger"></i> 
                        <span>email </span>
                    </div>
                    </div>
                </div>
                <form className="mx-5 w-50">
                    <div className="form-group my-2">
                        <label htmlFor="">name : </label>
                        <input type="text" name="" id="" className="form-control" placeholder="enter your name"/>
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="">email : </label>
                        <input type="text" name="" id="" className="form-control" placeholder="enter your email "/>
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="">message : </label>
                        <textarea name="" id="" cols="30" rows="5" className="form-control" placeholder="enter the message here"></textarea>
                    </div>
                    <div className="d-flex align-items-center justify-content-end my-2">
                        <button className="btn custom-btn-primary">send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}