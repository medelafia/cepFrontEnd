import HotelsSlider from "../../../components/HotelsSlider";
import vid from "../../../assets/vid.mp4" ; 
import {motion} from "framer-motion"
export default function Section4() {
    return (
        <div className="page my-5">
            <motion.div className="custom-container d-flex flex-column align-items-center justify-content-center"
                initial={{opacity : 0  }}
                whileInView = {{opacity : 1 }}
                transition={{duration : 0.5}}
            >
                <video className="custom-rounded" controls autoPlay="autoPlay" style={{width : "100%" , height : "100%"}}>
                    <source src={vid} type="video/mp4"/>
                </video>
            </motion.div>
        </div>
    )
}