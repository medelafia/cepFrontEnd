import image1 from "../../../assets/marrakech.jpg" 
import {motion} from "framer-motion"
import TopDestination from "../../../components/TopDestination"
import Hotel from "../../hotels/componants/Hotel"
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
                    <div className="">
                        <h4>recommended hotels</h4>
                        <p className="text-secondary">best hotels to make another experience</p>
                    </div>
                    <a href="/offers/hotels" className="custom-text-secondary text-decoration-none">show more</a>
                </motion.div>
                <div className="row py-3" style={{height : "100%"}}>
                    <Hotel hotel={{ name : "marina" , address : "100"}} />
                    <Hotel hotel={{ name : "marina" , address : "100"}} />
                    <Hotel hotel={{ name : "marina" , address : "100"}} />
                </div>
            </div>
        </motion.div>
    )
}