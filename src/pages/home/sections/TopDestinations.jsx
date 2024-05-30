import image1 from "../../../assets/marrakech.jpg" 
import {motion} from "framer-motion"
export default function TopDestinations() {
    return (
        <motion.div className="top-destinations section mb-5 bg-light"
            initial={{translateX : -50 }}
            whileInView={{translateX : 0 }}
            transition={{duration : 0.5 }}
        >
            <div className="custom-container py-5 custom-h-100">
                <motion.div className="d-flex align-items-center justify-content-between"
                    initial={{translateX : -50 }}
                    whileInView={{translateX : 0 }}
                    transition={{duration : 0.5  }}
                > 
                    <div className="title custom-text-secondary">
                        top destinations
                    </div>
                    <a href="/offers/destinations" className="custom-text-secondary text-decoration-none">show more</a>
                </motion.div>
                <div className="row my-4" style={{height : "90%"}}>
                    <motion.div className="col-md-4 custom-h-100 col-sm-12"
                        initial={{translateX : -50 }}
                        whileInView={{translateX : 0 }}
                        transition={{duration : 0.4  }}
                        
                    >
                        <div className="bg-primary rounded custom-h-100">
                            <img src={image1} alt="" style={{width : "100%" , height : "100%"}} className="rounded"/>
                        </div>
                    </motion.div>
                    <div className="col-md-4 custom-h-100 col-sm-12">
                        <motion.div className="bg-primary rounded h-50"
                            initial={{translateY : -50 }}
                            whileInView={{translateY : 0 }}
                            transition={{duration : 0.5  }}
                        >
                            <img src={image1} alt="" style={{width : "100%" , height : "100%"}} className="rounded"/>
                        </motion.div>
                        <motion.div className="bg-primary rounded my-1 h-50"
                            initial={{translateY : 50 }}
                            whileInView={{translateY : 0 }}
                            transition={{duration : 0.5  }}
                        >
                            <img src={image1} alt="" style={{width : "100%" , height : "100%"}} className="rounded"/>
                        </motion.div>
                    </div>
                    <motion.div className="col-md-4 custom-h-100 col-sm-12"
                        initial={{translateX : 50 }}
                        whileInView={{translateX : 0 }}
                        transition={{duration : 0.5  }}
                    >
                        <div className="bg-primary rounded custom-h-100">
                            <img src={image1} alt="" style={{width : "100%" , height : "100%"}} className="rounded"/>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}