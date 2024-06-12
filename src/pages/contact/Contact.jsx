import "./contact.css"
import "../../index.css"
import Brand from "../../components/Brand"
import { useSelector } from "react-redux"
import { userSelector } from "../../store/selectors/userSelector"
import {motion} from "framer-motion"
export default function Contact() {
    const user = useSelector(userSelector)
    return (
        <div className="page p-3 h-100">
            <motion.h1 className="text-capitalize text-center my-3"
                initial={{opacity : 0 , translateX : -100 }}
                animate={{opacity : 1 , translateX : 0 }}
                transition={{duration : 0.4}}
            >
                contact <span className="custom-text-primary bold">travelboot </span>feedback !
            </motion.h1>
            <div className="custom-container h-100 d-flex align-items-start justify-content-center mt-5">
                <div className="mx-5">
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
                <form className="mx-5 w-50 d-flex align-items-center justify-content-center flex-column">

                    { user == null && <div className="form-group my-2 w-100">
                        <label htmlFor="">name : </label>
                        <input type="text" name="" id="" className="form-control" placeholder="enter your name"/>
                    </div> }
                    { user == null && <div className="form-group my-2  w-100">
                        <label htmlFor="">email : </label>
                        <input type="text" name="" id="" className="form-control" placeholder="enter your email "/>
                    </div> }
                    <div className="form-group my-2 w-100 ">
                        <label htmlFor="">message : </label>
                        <textarea name="" id="" cols="30" rows="5" className="form-control" placeholder="enter the message here"></textarea>
                    </div>
                    <div className="d-flex align-items-center justify-content-end my-2 w-100">
                        <button className="btn custom-btn-primary w-100">send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}