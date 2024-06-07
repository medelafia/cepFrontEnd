import image from "../../../assets/jamaaElFna.jpeg"
import {motion} from "framer-motion" ; 
export default function Section5() {
    return(
        <div className="custom-container my-5">
            <motion.div className="border p-5 rounded-lg row" style={{minHeight : "40vh"}}
                initial={{translateX : -50 , opacity : 0}} 
                whileInView={{translateX : 0  , opacity : 1}}
                transition={{duration : 1}}
            >
                <div className="col-sm-12 col-lg-8 d-flex align-items-start justify-content-center flex-column">
                    <h1 className="text-capitalize custom-text-primary bold">destination finder</h1>
                    <div className="my-3 text-capitalize">ai model that can be given the appropriate place by entering text containing your favorite activities and things</div>
                    <button className="btn custom-bg-primary text-white rounded-pill px-5 mt-2">try it now!</button>
                </div>
                <div className="col-sm-12 col-lg-4 position-relative">
                    <motion.div className="w-100 h-100 custom-bg-primary position-absolute rounded" style={{zIndex : 1 }}
                        initial={{rotate : -30}}
                        whileInView={{rotate : 0 }}
                        transition={{duration : 0.1 , delay : 0.2 }}
                    ></motion.div>
                    <motion.div className="w-100 h-100 custom-bg-secondary position-absolute rounded" style={{zIndex : 2 , transform :"rotate(-5deg)"}}
                        initial={{rotate : -40}}
                        whileInView={{rotate : -5 }}
                        transition={{duration : 0.1, delay : 0.3 }}
                    ></motion.div>
                    <motion.img src={image} alt="" 
                        initial={{rotate : -50}}
                        whileInView={{rotate : -10 }}
                        transition={{duration : 0.1 , delay : 0.4}}
                        className="position-relative bg-white border" style={{width : "100%" , height : "100%" , zIndex : 100 , transform :"rotate(-10deg)" }}/>
                </div>  
            </motion.div>
            
        </div>
    )
}