import {motion} from "framer-motion" ; 
import { Link } from "react-router-dom";
export default function ProductBox({content , title }) {
    const renderPath = () => {
        return content.map((elm , index) => {
            return <li>
                <Link to={elm['path']} className="text-white text-decoration-none">{elm['name']}</Link>
                </li>
        })
    }
    return (
            <div className="col-sm-4">
                <motion.div className="container"
                    initial={{opacity : 0 , scale : 0.5}}
                    whileInView={{opacity : 1 , scale : 1 }}
                >
                    <h5 className="custom-text-primary text-capitalize">
                        {title}
                    </h5>
                    <ul>
                        {renderPath()}
                    </ul>
                    <div>
                    </div>
                </motion.div>
            </div>
    )
}