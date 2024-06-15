import image from "../../../assets/login.jpg"
import {motion} from "framer-motion" ;
import { useNavigate } from "react-router-dom";

export default function Section3() {
    const navigate = useNavigate() 
    return (
        <motion.div className="section section3 mt-5"
            initial ={{translateX : -50 , opacity : 0}}
            whileInView = {{translateX : 0 , opacity : 1 }}
            transition={{duration : 0.5}}
        >
            <div className="custom-container">
                    <div className="col-sm-12 d-flex justify-content-center align-items-center flex-column p-3 bg-dark">
                        <motion.h1 className="text-white my-5 text-capitalize"
                            whileInView={{translateX : 0 , opacity : 1}}
                            initial={{translateX : -40 , opacity : 0 }}
                            transition={{duration : 0.5}}
                        >
                            travel to any corner around the world
                        </motion.h1>
                        <div className="row w-100 d-flex align-items-center justify-content-between">
                            <motion.div className="col-lg-3 col-sm-6 p-3 d-flex align-items-center justify-content-center text-white flex-column"
                                whileInView={{translateY : 0 , opacity : 1}}
                                initial={{translateY : -40 , opacity : 0 }}
                                transition={{duration : 0.5 , delay : 0.1}}
                            >
                                <h1 className="custom-text-primary">+200</h1>
                                <div>costumer</div>
                            </motion.div>
                            <motion.div className="col-lg-3 col-sm-6 p-3 d-flex align-items-center justify-content-center text-white flex-column"
                                whileInView={{translateY : 0 , opacity : 1}}
                                initial={{translateY : +40 , opacity : 0 }}
                                transition={{duration : 0.5}}
                            >
                                <h1 className="custom-text-primary">+20</h1>
                                <div>hotel</div>
                            </motion.div>
                            <motion.div className="col-lg-3 col-sm-6 p-3 d-flex align-items-center justify-content-center text-white flex-column"
                                whileInView={{translateY : 0 , opacity : 1}}
                                initial={{translateY : -40 , opacity : 0 }}
                                transition={{duration : 0.5  , delay : 0.2}}
                            >
                                <h1 className="custom-text-primary">+30</h1>
                                <div>airline</div>
                            </motion.div>
                            <motion.div className="col-lg-3 col-sm-6 p-3 d-flex align-items-center justify-content-center text-white flex-column"
                                whileInView={{translateY : 0 , opacity : 1}}
                                initial={{translateY : +40 , opacity : 0 }}
                                transition={{duration : 0.5 , delay : 0.3}}
                            >
                                <h1 className="custom-text-primary">+40</h1>
                                <div>car agencies</div>
                            </motion.div>
                        </div>
                        <motion.button className="btn custom-btn-primary w-25 my-5"
                            whileInView={{translateX : 0 , opacity : 1}}
                            initial={{translateX : -40 , opacity : 0 }}
                            transition={{duration : 0.5 , delay : 0.4}}
                            onClick={()=>{navigate("/providers/airlines")}}
                        >
                            explore more
                        </motion.button>
                    </div>
            </div>
        </motion.div>
    )
}