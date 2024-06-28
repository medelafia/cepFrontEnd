import image1 from "../../../assets/marrakech.jpg" 
import {motion} from "framer-motion"
import TopDestination from "../../../components/TopDestination"
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
                        where's next ? 
                    </div>
                    <a href="/offers/destinations" className="custom-text-secondary text-decoration-none">show more</a>
                </motion.div>
                <div className="row p-sm-5" style={{height : "90%"}}>
                    <motion.div className="col-md-4 custom-h-100 col-sm-12 my-4"
                        initial={{translateX : -50 }}
                        whileInView={{translateX : 0 }}
                        transition={{duration : 0.4  }}
                        
                    >
                        <TopDestination destinationImage={image1} destinationName="dest"/>
                    </motion.div>
                    <motion.div className="col-md-4 rounded my-4"
                            initial={{translateY : -50 }}
                            whileInView={{translateY : 0 }}
                            transition={{duration : 0.5  }}
                        >
                            <TopDestination destinationImage={image1} destinationName="dest"/>
                    </motion.div>
                    <motion.div className="col-md-4 col-sm-12 my-4"
                        initial={{translateX : 50 }}
                        whileInView={{translateX : 0 }}
                        transition={{duration : 0.5  }}
                    >
                        <div className="bg-primary rounded custom-h-100">
                            <TopDestination destinationImage={image1} destinationName="dest"/>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}